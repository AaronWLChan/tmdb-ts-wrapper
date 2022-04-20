import { Identifiable, Pageable } from "../../util"

export interface MovieChanges {
    changes?: MovieChange[]
}

export interface MovieChange {
    key?: string,
    items?: MovieChangeItem[]
}

export interface MovieChangeItem extends Identifiable{
    action?: string,
    time?: string,
    iso_639_1?: string,
    value?: string,
    original_value?: string
}

export interface MovieChangesQueryString extends Pageable {
    start_date?: string,
    end_date?: string,
}