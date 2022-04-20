import { Identifiable, Pageable } from "../../util"

export interface TVEpisodeChanges {
    changes?: []
}

export interface TVEpisodeChange {
    key?: string,
    items?: TVEpisodeChangeItem[]
}

export interface TVEpisodeChangeItem extends Identifiable {
    action?: string,
    time?: string,
    value?: string,
    iso_639_1?: string,
}


export interface TVEpisodeChangesQueryString extends Pageable {
    start_date?: string,
    end_date?: string,

}