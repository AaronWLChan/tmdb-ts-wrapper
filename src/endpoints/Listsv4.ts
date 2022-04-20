import { Listsv4AddItemsToListRequestBody, Listsv4AddItemsToListResponse, Listsv4CheckItemStatusQueryString, Listsv4CheckItemStatusResponse, Listsv4ClearListResponse, 
    Listsv4CreateListRequestBody, Listsv4CreateListResponse, Listsv4DeleteListResponse, Listsv4RemoveItemsRequestBody, Listsv4RemoveItemsResponse, 
    Listsv4UpdateItemsRequestBody, Listsv4UpdateItemsResponse, Listsv4UpdateListRequestBody, Listsv4UpdateListResponse, Listv4, Listv4QueryString } from "../types";
import Endpoint from "./Endpoint";

export class Listsv4 extends Endpoint {

    /** 
    * Get List
    * 
    * This method will retrieve a list by id.
    * 
    * Private lists can only be accessed by their owners and therefore require a valid user access token.
    * 
    * {@link https://developers.themoviedb.org/4/list/get-list}
    */
    public getList(list_id: string, queryString?: Listv4QueryString){
       return this._get<Listv4>(`list/${list_id}`, this.applyTranslation(queryString))
    }

    /** 
    * Create List
    * 
    * This method will create a new list.
    * 
    * You will need to have valid user access token in order to create a new list.
    * 
    * {@link https://developers.themoviedb.org/4/list/create-list}
    */
    public createList(body: Listsv4CreateListRequestBody){
        return this._post<Listsv4CreateListResponse>(`list`, body)
    }

    /** 
    * Update List
    * 
    * This method will let you update the details of a list.
    * 
    * You must be the owner of the list and therefore have a valid user access token in order to edit it.
    * 
    * {@link https://developers.themoviedb.org/4/list/update-list}
    */
    public updateList(list_id: number, body: Listsv4UpdateListRequestBody){
        return this._put<Listsv4UpdateListResponse>(`list/${list_id}`, body)
    }

    /** 
    * Clear List
    * 
    * This method lets you clear all of the items from a list in a single request. This action cannot be reversed so use it with caution.
    * 
    * You must be the owner of the list and therefore have a valid user access token in order to clear a list.
    * 
    * {@link https://developers.themoviedb.org/4/list/clear-list}
    */
    public clearList(list_id: number){
        return this._get<Listsv4ClearListResponse>(`list/${list_id}/clear`)
    }

    /** 
    * Delete List
    * 
    * This method will delete a list by id. This action is not reversible so take care when issuing it.
    * 
    * You must be the owner of the list and therefore have a valid user access token in order to clear a list.
    * 
    * {@link https://developers.themoviedb.org/4/list/delete-list}
    */
    public deleteList(list_id: number){
        return this._delete<Listsv4DeleteListResponse>(`list/${list_id}`)
    }

    /** 
    * Add Items
    * 
    * This method will let you add items to a list. We support essentially an unlimited number of items to be posted at a time. Both movie and TV series are support.
    * 
    * The results of this query will return a results array. Each result includes a success field. 
    * If a result is false this will usually indicate that the item already exists on the list. 
    * It may also indicate that the item could not be found.
    * 
    * You must be the owner of the list and therefore have a valid user access token in order to clear a list.
    * 
    * {@link https://developers.themoviedb.org/4/list/add-items}
    */
    public addItems(list_id: number, body: Listsv4AddItemsToListRequestBody){
        return this._post<Listsv4AddItemsToListResponse>(`list//${list_id}/items`, body)
    }

    /** 
    * Update Items
    * 
    * This method will let you update an individual item on a list. Currently, only adding a comment is supported.
    * 
    * You must be the owner of the list and therefore have a valid user access token in order to clear a list.
    * 
    * {@link https://developers.themoviedb.org/4/list/update-items}
    */
    public updateItems(list_id: number, body: Listsv4UpdateItemsRequestBody){
        return this._put<Listsv4UpdateItemsResponse>(`list/${list_id}/items`, body)
    }

    /** 
    * Remove Items
    * 
    * This method will let you remove items from a list. You can remove multiple items at a time.
    * 
    * You must be the owner of the list and therefore have a valid user access token in order to clear a list.
    * 
    * {@link https://developers.themoviedb.org/4/list/remove-items}
    */
    public removeItems(list_id: number, body: Listsv4RemoveItemsRequestBody){
        return this._delete<Listsv4RemoveItemsResponse>(`list/${list_id}/items`, body)
    }

    /** 
    * Check Item Status
    * 
    * This method lets you quickly check if the item is already added to the list.
    * 
    * You must be the owner of the list and therefore have a valid user access token in order to clear a list.
    * 
    * {@link https://developers.themoviedb.org/4/list/check-item-status}
    */
    public checkItemStatus(list_id: number, queryString: Listsv4CheckItemStatusQueryString){
        return this._get<Listsv4CheckItemStatusResponse>(`list/${list_id}/item_status`, queryString)
    }


}