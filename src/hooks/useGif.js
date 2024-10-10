import { useEffect, useState } from "react";
import axios from "axios";

const useGif = (tag) => {
  const [loading, setLoading] = useState(false);
  const [gif, setGif] = useState("");
  const API_KEY = "hxyMb8wT183Po8NYjkbG3q5EbQe19Z8f";
  const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  // Modified downloadGif function to download the actual GIF
  const downloadGif = async () => {
    if (!gif) return; // If no GIF URL is present, don't proceed

    try {
      // Fetch the GIF as a blob (binary data)
      const response = await fetch(gif);
      const blob = await response.blob(); // Convert the response to a blob

      // Create a temporary object URL from the blob
      const url = window.URL.createObjectURL(blob);

      // Create an anchor element and set the href to the object URL
      const link = document.createElement("a");
      link.href = url;
      link.download = "downloaded-gif.gif"; // Set the name for the downloaded file

      // Append the anchor to the body and trigger the download
      document.body.appendChild(link);
      link.click();

      // Cleanup: Remove the anchor element and revoke the object URL
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading the GIF:", error);
    }
  };

  async function fetchData(tag) {
    setLoading(true);
    try {
      const { data } = await axios.get(
        tag ? `${randomUrl}&tag=${tag}` : randomUrl
      );
      const output = data.data.images.downsized.url;
      setGif(output); // Set the fetched GIF URL in the state
      console.log(output);
    } catch (error) {
      console.log("Fetching error");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData(tag); // Fetch GIFs based on the tag
  }, []);

  return { gif, loading, setLoading, fetchData, downloadGif };
};

export default useGif;
