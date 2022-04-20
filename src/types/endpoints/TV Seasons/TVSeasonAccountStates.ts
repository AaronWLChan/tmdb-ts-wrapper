import { Identifiable, Translatable } from "../../util";

export interface TVSeasonAccountStates extends Identifiable {
    results?: TVSeasonAccountStatesResult[]
}

export interface TVSeasonAccountStatesResult extends Identifiable {
    episode_number?: number,
    rated?: boolean | { value?: number }
}

interface TVSeasonAccountStatesGuestQueryString extends Translatable{
    session_id?: never,
    guest_session_id: string
}

interface TVSeasonAccountStatesNonGuestQueryString extends Translatable{
    session_id: string,
    guest_session_id?: never
}

export type TVSeasonAccountStatesQueryString = TVSeasonAccountStatesGuestQueryString | TVSeasonAccountStatesNonGuestQueryString