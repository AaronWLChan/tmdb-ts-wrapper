import { AcceptedLanguage, Listsv3CheckItemStatusResponse, Listv3, Listv3AddMovieResponse, Listv3ClearListQueryString, 
    Listv3ClearListResponse, Listv3CreateListRequestBody, Listv3CreateListResponse, Listv3DeleteListResponse, Listv3RemoveMovieResponse } from "../types";
import Endpoint from "./Endpoint";

export class Listsv3 extends Endpoint {

    /**
     * Get Details
     *
     * Get the details of a list.
     * 
     * {@link https://developers.themoviedb.org/3/lists/get-list-details}
    */
    public getDetails(list_id: string | number, language?: AcceptedLanguage){
        return this._get<Listv3>(`list/${list_id}`, { language: language ? language : this.config.language })
    }

    /**
     * Check Item Status
     *
     * You can use this method to check if a movie has already been added to the list.
     * 
     * {@link https://developers.themoviedb.org/3/lists/check-item-status}
    */
    public checkItemStatus(list_id: string | number, movie_id: number){
        return this._get<Listsv3CheckItemStatusResponse>(`list/${list_id}/item_status`, { movie_id })
    }

    /**
     * Create List
     *
     * Create a list.
     * 
     * {@link https://developers.themoviedb.org/3/lists/create-list}
    */
    public createList(session_id: string, body: Listv3CreateListRequestBody){
        return this._post<Listv3CreateListResponse>(`list`, body, { session_id })
    }

    /**
     * Add Movie
     *
     * Add a movie to a list.
     * 
     * {@link https://developers.themoviedb.org/3/lists/add-movie}
    */
     public addMovie(list_id: string | number, session_id: string, media_id: number){
        return this._post<Listv3AddMovieResponse>(`list/${list_id}`, { media_id }, { session_id })
    }

    /**
     * Remove Movie
     *
     * Remove a movie from a list.
     * 
     * {@link https://developers.themoviedb.org/3/lists/remove-movie}
    */
     public removeMovie(list_id: string | number, session_id: string, media_id: number){
        return this._post<Listv3RemoveMovieResponse>(`list/${list_id}/remove_item`, { media_id }, { session_id })
    }

    /**
     * Clear List
     *
     * Clear all of the items from a list.
     * 
     * {@link https://developers.themoviedb.org/3/lists/clear-list}
    */
    public clearList(list_id: string, queryString: Listv3ClearListQueryString){
        return this._post<Listv3ClearListResponse>(`list/${list_id}/remove_item`, undefined, queryString)
    }

    /**
     * Delete List
     *
     * Delete a list.
     * 
     * {@link https://developers.themoviedb.org/3/lists/delete-list}
    */
    public deleteList(list_id: string, session_id: string){
        return this._delete<Listv3DeleteListResponse>(`list/${list_id}/remove_item`, undefined, { session_id })
    }

}