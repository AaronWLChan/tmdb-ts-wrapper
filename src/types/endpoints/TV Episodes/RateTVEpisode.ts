import { Response } from "../../util";

export interface RateTVEpisodeGuestQueryString{
    guest_session_id: string,
    session_id?: never
}

export interface RateTVEpisodeNonGuestQueryString{
    guest_session_id?: never,
    session_id: string
}

export type RateTVEpisodeQueryString = RateTVEpisodeGuestQueryString | RateTVEpisodeNonGuestQueryString

export interface RateTVEpisodeRequestBody{
    value?: number
}

export interface RateTVEpisodeResponse extends Response{}