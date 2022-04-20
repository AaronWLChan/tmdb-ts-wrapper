import { Identifiable, Pageable, Paginated, Translatable } from "../../../util";

export interface Accountv3Lists extends Paginated {
    results?: Accountv3ListsResult[]
}

export interface Accountv3ListsQueryString extends Pageable, Translatable {
    session_id: string,
}

export interface Accountv3ListsResult extends Identifiable {
    description?: string,
    favorite_count?: number,
    item_count?: number,
    iso_639_1?: string,
    list_type?: string,
    name?: string,
    poster_path?: null
}