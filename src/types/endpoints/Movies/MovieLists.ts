import { Identifiable, Pageable, Paginated, Translatable } from "../../util";

export interface MovieLists extends Identifiable, Paginated {
    results?: MovieListsResult[]
}

export interface MovieListsResult extends Identifiable {
    description?: string,
    favorite_count?: number,
    item_count?: number
    iso_639_1?: string,
    list_type?: string,
    name?: string,
    poster_path?: string | null
}

export interface MovieListsQueryString extends Pageable, Translatable {}