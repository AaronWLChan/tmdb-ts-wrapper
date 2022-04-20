import { Response } from "../../util";

export interface DeleteTVEpisodeRatingGuestQueryString{
    guest_session_id: string,
    session_id?: never
}

export interface DeleteTVEpisodeRatingNonGuestQueryString{
    guest_session_id?: never,
    session_id: string
}

export type DeleteTVEpisodeRatingQueryString = DeleteTVEpisodeRatingGuestQueryString | DeleteTVEpisodeRatingNonGuestQueryString

export interface DeleteTVEpisodeRatingResponse extends Response{}