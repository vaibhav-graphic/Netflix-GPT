import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRated } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    const getTopRated = async() => {
        try{
            const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", API_OPTIONS);
            const json = await data.json();

            dispatch(addTopRated(json.results));
        }
        catch(error){
            return error;
        }
    }

    useEffect(() => {
        getTopRated();
    }, []);
}

export default useTopRatedMovies;