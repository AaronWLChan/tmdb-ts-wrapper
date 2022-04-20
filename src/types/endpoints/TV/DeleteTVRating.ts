import { Response } from "../../util"

export interface DeleteTVShowRatingGuestQueryString {
    guest_session_id?: string,
    session_id?: never,
}

export interface DeleteTVShowRatingNonGuestQueryString {
    guest_session_id?: never,
    session_id?: string

}

export type DeleteTVShowRatingQueryString = DeleteTVShowRatingGuestQueryString | DeleteTVShowRatingNonGuestQueryString

export interface DeleteTVShowRatingResponse extends Response {}