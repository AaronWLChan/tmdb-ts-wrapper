import { MovieListResult } from ".";
import { Pageable, Paginated, Translatable } from "../../util";

export interface MovieRecommendations extends Paginated {
    results?: MovieListResult[]
}

export interface MovieRecommendationsQueryString extends Translatable, Pageable{}