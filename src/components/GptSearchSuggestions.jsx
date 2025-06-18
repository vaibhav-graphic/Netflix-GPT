import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSearchSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);

  if (!movieNames || !movieResults) {
    return;
  }

  return (
    <div>
      {movieNames.map((movieNames, index) => (
        <MovieList
          key={movieNames}
          title={movieNames}
          movies={movieResults[index]}
        />
      ))}
    </div>
  );
};

export default GptSearchSuggestions;
