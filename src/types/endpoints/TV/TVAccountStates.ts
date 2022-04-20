import { Identifiable, Translatable } from "../../util";

export interface TVAccountStates extends Identifiable{
    favorite?: boolean,
    rated?: { value: number } | boolean,
    watchlist?: boolean
}

export interface TVAccountStatesNonGuestQueryString extends Translatable {
    guest_session_id?: never,
    session_id?: string
}

export interface TVAccountStatesGuestQueryString extends Translatable {
    guest_session_id?: string,
    session_id?: never
}

export type TVAccountStatesQueryString = TVAccountStatesGuestQueryString | TVAccountStatesNonGuestQueryString