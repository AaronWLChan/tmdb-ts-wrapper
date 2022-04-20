import { GuestSessionRatedMovies, GuestSessionRatedMoviesQueryString, GuestSessionRatedTVEpisodes, 
    GuestSessionRatedTVEpisodesQueryString, GuestSessionRatedTVShows, GuestSessionRatedTVShowsQueryString } from "../types";
import Endpoint from "./Endpoint";

export class GuestSessions extends Endpoint {

    /**
     * Get Rated Movies
     * 
     * Get the rated movies for a guest session.
     *
     * {@link https://developers.themoviedb.org/3/guest-sessions/get-guest-session-rated-movies}
    */
    public getRatedMovies(guest_session_id: string, queryString?: GuestSessionRatedMoviesQueryString){
        return this._get<GuestSessionRatedMovies>(`guest_session/${guest_session_id}/rated/tv/episodes`, this.applyTranslation(queryString))
    }

    /**
     * Get Rated TV Shows
     * 
     * Get the rated TV shows for a guest session.
     *
     * {@link https://developers.themoviedb.org/3/guest-sessions/get-guest-session-rated-tv-shows}
    */
    public getRatedTVShows(guest_session_id: string, queryString?: GuestSessionRatedTVShowsQueryString){
        return this._get<GuestSessionRatedTVShows>(`guest_session/${guest_session_id}/rated/tv`, this.applyTranslation(queryString))
    }

    /**
     * Get Rated TV Episodes
     * 
     * Get the rated TV episodes for a guest session.
     *
     * {@link https://developers.themoviedb.org/3/guest-sessions/get-guest-session-rated-tv-episodes}
    */
    public getRatedTVEpisodes(guest_session_id: string, queryString?: GuestSessionRatedTVEpisodesQueryString){
        return this._get<GuestSessionRatedTVEpisodes>(`guest_session/${guest_session_id}/rated/tv/episodes`, this.applyTranslation(queryString))
    }

}