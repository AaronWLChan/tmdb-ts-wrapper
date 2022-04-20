
import { Authenticationv3CreateSessionResponse, Authenticationv3CreateSessionWithLoginRequestBody, Authenticationv3CreateSessionWithLoginResponse, Authenticationv3CreateSessionWithTokenResponse, Authenticationv3DeleteSessionResponse, Authenticationv3GuestSession, Authenticationv3RequestToken } from "../types";
import Endpoint from "./Endpoint";

export class Authenticationv3 extends Endpoint {
    
    /**
     * Create Guest Session
     * 
     * This method will let you create a new guest session. Guest sessions are a type of session that will let a user rate movies and TV shows but not require them to have a TMDB user account. 
     * More information about user authentication can be found [here]({@link https://developers.themoviedb.org/3/authentication/how-do-i-generate-a-session-id}).
     *
     * Please note, you should only generate a single guest session per user (or device) as you will be able to attach the ratings to a TMDB user account in the future. 
     * There is also IP limits in place so you should always make sure it's the end user doing the guest session actions.
     *
     * If a guest session is not used for the first time within 24 hours, it will be automatically deleted.
     * 
     * {@link https://developers.themoviedb.org/3/authentication/create-guest-session}
     */
    public createGuestSession(){
        return this._get<Authenticationv3GuestSession>(`authentication/guest_session/new`)
    }

    /**
     * Create Request Token
     * 
     * Create a temporary request token that can be used to validate a TMDB user login. More details about how this works can be found [here]({@link https://developers.themoviedb.org/3/authentication/create-request-token}).
     * 
     * {@link https://developers.themoviedb.org/3/authentication/create-request-token}
     */
    public createRequestToken(){
        return this._get<Authenticationv3RequestToken>(`authentication/token/new`)
    }

    /**
     * Create Session
     * 
     * You can use this method to create a fully valid session ID once a user has validated the request token. More information about how this works can be found [here]({@link https://developers.themoviedb.org/3/authentication/how-do-i-generate-a-session-id}).
     * 
     * {@link https://developers.themoviedb.org/3/authentication/create-session}
     */
    public createSession(request_token: string){
        return this._post<Authenticationv3CreateSessionResponse>("authentication/session/new", { request_token })
    }

    /**
     * Create Session With Login
     * 
     * This method allows an application to validate a request token by entering a username and password.
     *
     * Not all applications have access to a web view so this can be used as a substitute.
     *
     * Please note, the preferred method of validating a request token is to have a user authenticate the request via the TMDB website. You can read about that method [here]({@link https://developers.themoviedb.org/3/authentication/how-do-i-generate-a-session-id}).
     *
     * If you decide to use this method please use HTTPS.
     * 
     * {@link https://developers.themoviedb.org/3/authentication/validate-request-token}
    */
    public createSessionWithLogin(requestBody: Authenticationv3CreateSessionWithLoginRequestBody){
        return this._post<Authenticationv3CreateSessionWithLoginResponse>("authentication/token/validate_with_login", requestBody)
    }

    /**
     * Create Session (from v4 access token)
     *
     * Use this method to create a v3 session ID if you already have a valid v4 access token. The v4 token needs to be authenticated by the user. Your standard "read token" will not validate to create a session ID. 
     * 
     * {@link https://developers.themoviedb.org/3/authentication/create-session-from-v4-access-token}
    */
    public createSessionWithToken(){
        return this._post<Authenticationv3CreateSessionWithTokenResponse>("authentication/session/convert/4", { access_token: this.config.access_token })
    }

    /**
     * Delete Session
     *
     * If you would like to delete (or "logout") from a session, call this method with a valid session ID. 
     * 
     * {@link https://developers.themoviedb.org/3/authentication/delete-session}
    */
    public deleteSession(session_id: string){
        return this._delete<Authenticationv3DeleteSessionResponse>("authentication/session", { session_id })
    }

}