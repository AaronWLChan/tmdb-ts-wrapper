import { Authenticationv4CreateAccessTokenResponse, Authenticationv4CreateRequestTokenResponse, Authenticationv4DeleteAccessTokenResponse } from "../types";
import Endpoint from "./Endpoint";

export class Authenticationv4 extends Endpoint {

    /**
     * Create Request Token
     * 
     * This method generates a new request token that you can ask a user to approve. 
     * This is the first step in getting permission from a user to read and write data on their behalf. 
     * You can read more about this system [here]({@link https://developers.themoviedb.org/4/auth/create-request-token}).
     * 
     * Note that there is an optional body you can post alongside this request to set a redirect URL or callback that will be executed once a request token has been approved on TMDb.
     * 
     * {@link https://developers.themoviedb.org/4/auth/create-request-token}
     */
    public createRequestToken(redirect_to?: string){
        return this._post<Authenticationv4CreateRequestTokenResponse>("auth/request_token", redirect_to && { redirect_to })
    }

    /**
     * Create Access Token
     * 
     * This method will finish the user authentication flow and issue an official user access token. 
     * The request token in this request is sent along as part of the POST body. 
     * You should still use your standard API read access token for authenticating this request.
     * 
     * {@link https://developers.themoviedb.org/4/auth/create-access-token}
     */
    public createAccessToken(request_token: string){
        return this._post<Authenticationv4CreateAccessTokenResponse>("auth/access_token", { request_token })
    }

    /**
     * Delete Access Token
     * 
     * This method gives your users the ability to log out of a session.
     * 
     * {@link https://developers.themoviedb.org/4/auth/delete-access-token}
    */
    public deleteAccessToken(access_token: string){
        return this._delete<Authenticationv4DeleteAccessTokenResponse>("auth/access_token", { access_token })
    }

}