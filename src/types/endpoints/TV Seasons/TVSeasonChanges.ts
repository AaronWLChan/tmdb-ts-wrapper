import { Pageable } from "../../util"

export interface TVSeasonChanges {
    changes?: TVSeasonChange[]
}

interface TVSeasonChange {
    key?: string,
    items?: TVSeasonChangeItem[]
}

interface TVSeasonChangeItem {
    id?: string,
    action?: string,
    time?: string,
    value?: string | { episode_id?: number, episode_number?: number },
    iso_639_1: string,
    original_value: string,
}

export interface TVSeasonChangesQueryString extends Pageable{
    start_date?: string,
    end_date?: string,
}