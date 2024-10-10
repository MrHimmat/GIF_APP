import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="bg-gray-950 h-full text-white flex flex-col  items-center background w-full">
      <div className="bg-gray-100  shadow-2xl w-11/12 justify-center flex items-center mt-5 p-3 rounded-xl text-4xl font-bold font-serif underline text-black ">
        <h2 className=""> Generate Random GIF</h2>
      </div>
      <Random />
      <Tag />
    </div>
  );
}
