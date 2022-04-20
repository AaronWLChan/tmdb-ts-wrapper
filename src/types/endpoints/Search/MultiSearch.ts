import { Pageable, Paginated, Translatable } from "../../util";
import { MovieListResult } from "../Movies";
import { PersonListResult } from "../People";
import { TVShowListResult } from "../TV";

export interface MultiSearch extends Paginated {
    results?: MultiSearchResult[]
}

export interface MultiSearchMovieResult extends MovieListResult {
    media_type: "movie"
}

export interface MultiSearchTVResult extends TVShowListResult {
    media_type: "tv"

}

export interface MultiSearchPersonResult extends PersonListResult {
    media_type: "person"
}

export type MultiSearchResult = MultiSearchMovieResult | MultiSearchTVResult | MultiSearchPersonResult

export interface MultiSearchQueryString extends Translatable, Pageable{
    query: string,
    include_adult?: boolean,
    region?: string
}