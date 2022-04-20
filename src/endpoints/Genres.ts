import { AcceptedLanguage, GenresMovie, GenresTV } from "../types";
import Endpoint from "./Endpoint";

export class Genres extends Endpoint {
    
    /**
     * Get Movie List
     * 
     * Get the list of official genres for movies.
     *
     * {@link https://developers.themoviedb.org/3/genres/get-movie-list}
    */
    public getMovieList(language?: AcceptedLanguage){
        return this._get<GenresMovie>("genre/movie/list", { language: language ? language : this.config.language })
    }

    /**
     * Get TV List
     * 
     * Get the list of official genres for TV shows.
     *
     * {@link https://developers.themoviedb.org/3/genres/get-tv-list}
    */
    public getTVList(language?: AcceptedLanguage){
        return this._get<GenresTV>("genre/tv/list", { language: language ? language : this.config.language })
    }
}