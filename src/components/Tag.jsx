import { useState } from "react";
import useGif from "../hooks/useGif";
import { Spinner } from "./Spinner";

export default function Tag() {
  const [tag, setTag] = useState("");

  const { gif, loading, fetchData, downloadGif } = useGif(tag);

  return (
    <div className="mb-[100px]">
      <div className="bg-violet-700 mt-20  flex-col items-center flex rounded-md min-w-full lg:w-[600px] p-9  ">
        <h2 className="flex items-center justify-center mt-9 p-3 text-xl font-bold border border-1 text-black bg-yellow-500 w-[50%] rounded-lg ">
          Random {tag} GIF
        </h2>
        <div className="flex flex-col mt-9">
          {loading ? <Spinner /> : <img src={gif} alt="image" />}
          <button
            onClick={() => downloadGif()}
            className="download-btn  mt-5 hover:text-green-500 font-serif font-bold border border-1 p-1 rounded-lg transition-all transform duration-200 "
          >
            Download
          </button>
        </div>
        {/* Button to trigger the download */}
        <div className="flex mt-4 relative"></div>

        <div className="flex mt-4 rounded-lg ">
          <input
            className="text-pink-700 rounded-lg p-2"
            onChange={(e) => setTag(e.target.value)}
            type="text"
            value={tag}
          />
        </div>
        <div className="flex mt-5">
          <button
            className="bg-red-500 hover:bg-red-600 transition-all transform duration-200 font-bold font-serif p-2 rounded-lg"
            onClick={() => fetchData(tag)}
          >
            Generate
          </button>
        </div>
      </div>
    </div>
  );
}
