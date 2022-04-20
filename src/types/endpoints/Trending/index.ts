import { Paginated } from "../../util";
import { MovieListResult } from "../Movies";
import { PersonListResult } from "../People";
import { TVShowListResult } from "../TV";

export interface TrendingResults extends Paginated {
    results?: TrendingResult[]
}

interface TrendingMovieResult extends MovieListResult{
    media_type?: "movie"
}

interface TrendingTVResult extends TVShowListResult{
    media_type?: "tv"
}

interface TrendingPersonResult extends PersonListResult{
    media_type?: "person"
}

export type TrendingResult = TrendingMovieResult | TrendingTVResult | TrendingPersonResult