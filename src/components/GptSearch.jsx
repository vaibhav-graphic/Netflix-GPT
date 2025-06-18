import { BG_LOGO_IMG } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptSearchSuggestions from "./GptSearchSuggestions";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen object-cover" alt="backgroung logo image" src={BG_LOGO_IMG} />
      </div>
      <div className="">
        <GptSearchBar />
        <GptSearchSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
