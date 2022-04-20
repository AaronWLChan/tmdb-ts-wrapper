import { Identifiable, Pageable, Translatable } from "../../../util";
import { MovieListResult } from "../../Movies";
import { TVShowListResult } from "../../TV";

export interface Listv4 extends Identifiable {
    poster_path?: string | null,
    backdrop_path?: string | null,
    total_results?: number,
    public?: boolean,
    revenue?: string,
    page?: number,
    results?: Listv4Results[],
    iso_639_1?: string,
    total_pages?: number,
    description?: string,
    created_by?: Listv4CreatedBy,
    iso_3166_1?: string,
    average_rating?: number,
    runtime?: number,
    name?: string,

    //These are dependent on list items cannot be typed
    comments?: any,
    objects_ids?: any
}


export interface Listv4CreatedBy extends Identifiable{
    gravatar_hash?: string,
    name?: string,
    username?: string,
}

export interface Listv4MovieResult extends MovieListResult{
    media_type?: "movie"
}

export interface Listv4TVResult extends TVShowListResult{
    media_type?: "tv"
}


export type Listv4Results = Listv4MovieResult | Listv4TVResult

export interface Listv4QueryString extends Pageable, Translatable {
    sort_by?: "original_order.asc" | "original_order.desc" | "release_date.asc" | "release_date.desc" | "title.asc" | "title.desc" | "vote_average.asc" | "vote_average.desc"
}

export * from './Listsv4AddItemsToList'
export * from './Listsv4CheckItemStatus'
export * from './Listsv4ClearList'
export * from './Listsv4CreateList'
export * from './Listsv4DeleteList'
export * from './Listsv4RemoveItems'
export * from './Listsv4UpdateItems'
export * from './Listsv4UpdateList'