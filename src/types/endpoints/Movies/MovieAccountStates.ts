import { Identifiable } from "../../util";

export interface MovieAccountStates extends Identifiable {
    favorite?: boolean,
    rated?: boolean | { value: number },
    watchlist?: boolean
}

export interface MovieAccountStatesGuestQueryString{
    guest_session_id: string,
    session_id?: never
}

export interface MovieAccountStatesNonGuestQueryString{
    guest_session_id?: never,
    session_id: string
}

export type MovieAccountStatesQueryString = MovieAccountStatesGuestQueryString | MovieAccountStatesNonGuestQueryString
