import { useEffect } from "react";
import Header from "./Header";

const Browser = () => {

    const getNowPlayingMovies = async() => {
        try{
            const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1");
            const json = await data.json();

            console.log(json);
        }
        catch(error){
            return error;
        }
    }

    useEffect(() => {
        getNowPlayingMovies();
    }, []);

    return <div>
        <Header />
    </div>
};

export default Browser;