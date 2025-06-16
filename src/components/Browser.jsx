import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browser = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
      {
        /*
          mainContainer
            - video background
            - video title
          secondary Container
            - movielist * n
            - cards * n
        */
      }
    </div>
  );
};

export default Browser;
