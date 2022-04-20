import Endpoint from "./Endpoint";

/**
 * Create your own calls.
 * Version can also be changed if needed. Default is 3.
 * Use with append_to_response
 */
export class Generic extends Endpoint {

    public get<T>(endpoint: string, queryString?: Object, version?: 3 | 4){
        return this._get<T>(endpoint, queryString, version)
    }

    public post<T>(endpoint: string, body?: Object, queryString?: Object, version?: 3 | 4){
        return this._post<T>(endpoint, body, queryString, version)
    }

    public delete<T>(endpoint: string, body?: Object, queryString?: Object, version?: 3 | 4){
        return this._delete<T>(endpoint, body, queryString, version)
    }

    public put<T>(endpoint: string, body?: Object, queryString?: Object, version?: 3 | 4){
        return this._put<T>(endpoint, body, queryString, version)
    }

}