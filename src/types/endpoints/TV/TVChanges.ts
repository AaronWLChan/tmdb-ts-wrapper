import { Identifiable, Pageable } from "../../util"

export interface TVChanges {
    changes?: TVChange[]
}

export interface TVChange{
    key?: string,
    items?: TVChangeItem[] 
}

export interface TVChangeItem extends Identifiable{
    action?: string,
    time?: string,
}

export interface TVChangesQueryString extends Pageable {
    start_date?: string,
    end_date?: string,
}