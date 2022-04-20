import { Identifiable, Pageable, Paginated, Translatable } from "../../util";

export interface SearchCollections extends Paginated{
    results?: SearchCollectionsResult[]
}

export interface SearchCollectionsResult extends Identifiable {
    backdrop_path?: string | null,
    name?: string,
    poster_path?: string | null
}

export interface SearchCollectionsQueryString extends Pageable, Translatable {
    query: string,
}