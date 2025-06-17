import { BG_LOGO_IMG } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptSearchSuggestions from "./GptSearchSuggestions";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img alt="backgroung logo image" src={BG_LOGO_IMG} />
      </div>
      <GptSearchBar />
      <GptSearchSuggestions />
    </div>
  );
};

export default GptSearch;
