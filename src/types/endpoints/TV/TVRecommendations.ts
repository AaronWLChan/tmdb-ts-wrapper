import { TVShowListResult } from ".";
import { Pageable, Paginated, Translatable } from "../../util";

export interface TVRecommendations extends Paginated {
    results?: TVShowListResult[]
} 

export interface TVRecommendationsQueryString extends Translatable, Pageable {}
