import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browser = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browser;
