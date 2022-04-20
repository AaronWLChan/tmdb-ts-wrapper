import { Response } from "../../util"

interface RateMovieQueryStringGuest{
    guest_session_id: string,
    session_id: never
}

interface RateMovieQueryStringNonGuest{
    guest_session_id: never,
    session_id: string
}


export type RateMovieQueryString = RateMovieQueryStringGuest | RateMovieQueryStringNonGuest


export interface RateMovieResponse extends Response{}

export interface DeleteMovieRatingResponse extends Response{}

