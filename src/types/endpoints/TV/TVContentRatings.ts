import { Identifiable } from "../../util";

export interface TVContentRatings extends Identifiable {
    results?: TVContentRatingResult[]
}

export interface TVContentRatingResult {
    iso_3166_1?: string,
    rating?: string,
}