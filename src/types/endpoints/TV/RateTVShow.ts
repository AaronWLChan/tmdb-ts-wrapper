import { Response } from "../../util"

export interface RateTVShowGuestQueryString {
    guest_session_id?: string,
    session_id?: never,

}

export interface RateTVShowNonGuestQueryString {
    guest_session_id?: never,
    session_id?: string

}


export type RateTVShowQueryString = RateTVShowGuestQueryString | RateTVShowNonGuestQueryString


export interface RateTVShowResponse extends Response {}