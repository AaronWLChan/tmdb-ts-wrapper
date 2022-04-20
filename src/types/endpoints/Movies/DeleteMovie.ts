import { Response } from "../../util";

interface DeleteMovieQueryGuestQueryString {
    session_id: never,
    guest_session_id: string,
}

interface DeleteMovieQueryNonGuestQueryString {
    session_id: string,
    guest_session_id: never,
}

export type DeleteMovieQueryQueryString = DeleteMovieQueryGuestQueryString | DeleteMovieQueryNonGuestQueryString

export interface DeleteMovieResponse extends Response {}