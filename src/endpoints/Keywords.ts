import { Keyword, KeywordMovies, KeywordMoviesQueryString } from "../types";
import Endpoint from "./Endpoint";

export class Keywords extends Endpoint {

    /**
     * Get Details
     * 
     * {@link https://developers.themoviedb.org/3/keywords/get-keyword-details}
     */
    public getDetails(keyword_id: number){
        return this._get<Keyword>(`keyword/${keyword_id}`)
    }

    /**
     * Get Movies
     * 
     * Get the movies that belong to a keyword.
     * 
     * We highly recommend using [movie discover]({@link https://developers.themoviedb.org/3/discover/movie-discover}) instead of this method as it is much more flexible.
     */
    public getMoviesFromKeyword(keyword_id: number, queryString?: KeywordMoviesQueryString) {
        return this._get<KeywordMovies>(`keyword/${keyword_id}/movies`, this.applyTranslation(queryString))
    }

}