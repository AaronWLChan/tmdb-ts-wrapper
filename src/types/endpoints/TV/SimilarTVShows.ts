import { TVShowListResult } from ".";
import { Pageable, Paginated, Translatable } from "../../util";

export interface SimilarTVShows extends Paginated {
    results?: TVShowListResult[]
}

export interface SimilarTVShowsQueryString extends Pageable, Translatable{}