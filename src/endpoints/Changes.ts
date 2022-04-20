import { ChangeListQueryString, ChangesForMovie, ChangesForPerson, ChangesForTV } from "../types";
import Endpoint from "./Endpoint";

export class Changes extends Endpoint {

    /**
     * Get Movie Change List
     *
     * Get a list of all of the movie ids that have been changed in the past 24 hours.
     *
     * You can query it for up to 14 days worth of changed IDs at a time with the start_date and end_date query parameters. 100 items are returned per page.
     * 
     * {@link https://developers.themoviedb.org/3/changes/get-movie-change-list}
    */
    public getMovieChangeList(queryString?: ChangeListQueryString){
        return this._get<ChangesForMovie>("movie/changes", queryString)
    }

    /**
     * Get TV Change List
     *
     * Get a list of all of the TV show ids that have been changed in the past 24 hours.
     *
     * You can query it for up to 14 days worth of changed IDs at a time with the start_date and end_date query parameters. 100 items are returned per page.
     * 
     * {@link https://developers.themoviedb.org/3/changes/get-tv-change-list}
    */
    public getTVChangeList(queryString?: ChangeListQueryString){
        return this._get<ChangesForTV>("tv/changes", queryString)
    }

    /**
     * Get Person Change List
     *
     * Get a list of all of the person ids that have been changed in the past 24 hours.
     *
     * You can query it for up to 14 days worth of changed IDs at a time with the start_date and end_date query parameters. 100 items are returned per page.
     * 
     * {@link https://developers.themoviedb.org/3/changes/get-person-change-list}
    */
    public getPersonChangeList(queryString?: ChangeListQueryString){
        return this._get<ChangesForPerson>("person/changes", queryString)
    }
}