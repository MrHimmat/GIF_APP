import useGif from "../hooks/useGif";
import { Spinner } from "./Spinner";

export default function Random() {
  const { loading, fetchData, gif, downloadGif } = useGif();

  return (
    <div>
      <div className="bg-green-700 mt-20  flex-col items-center flex rounded-md min-w-full lg:w-[600px] p-9  ">
        <h2 className="flex items-center justify-center mt-9 p-3 text-xl font-bold text-black bg-yellow-500 w-[50%] rounded-lg ">
          Random GIF
        </h2>
        <div className="flex flex-col mt-9">
          {loading ? <Spinner /> : <img src={gif} alt="image" />}
          <button
            onClick={() => downloadGif()}
            className="download-btn  mt-5 hover:text-violet-500 font-serif font-bold border border-1 p-1 rounded-lg transition-all transform duration-200 "
          >
            Download
          </button>
        </div>

        <div className="flex mt-5">
          <button
            className="bg-orange-500 hover:bg-orange-600 transition-all transform duration-200 font-bold font-serif p-2 rounded-lg"
            onClick={() => fetchData()}
          >
            Generate
          </button>
        </div>
      </div>
    </div>
  );
}
