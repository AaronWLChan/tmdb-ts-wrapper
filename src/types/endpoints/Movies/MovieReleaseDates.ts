import { Identifiable } from "../../util";

export interface MovieReleaseDates extends Identifiable {
    results?: MovieReleaseDateResult[]
}

export interface MovieReleaseDateResult {
    iso_3166_1?: string,
    release_dates?: MovieReleaseDate[]
}

export interface MovieReleaseDate{
    certification?: string,
    iso_639_1?: string,
    release_date?: string,
    type?: MovieReleaseDateType,
    note?: string,
}

export enum MovieReleaseDateType {
    "PREMIERE" = 1,
    "THEATRICAL_LIMITED",
    "THEATRICAL",
    "DIGITAL",
    "PHYSICAL",
    "TV"
}