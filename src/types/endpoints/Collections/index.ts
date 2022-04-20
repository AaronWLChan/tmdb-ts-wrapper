import { Identifiable } from "../../util";

export interface Collection extends Identifiable {
    name?: string,
    overview?: string,
    poster_path?: null,
    backdrop_path?: string
    parts?: CollectionPart[]
}

export interface CollectionPart extends Identifiable {
    adult?: boolean,
    backdrop_path?: string,
    genre_ids?: number[],
    original_language?: string,
    original_title?: string,
    overview?: string,
    release_date?: string,
    poster_path?: string,
    popularity?: number,
    title?: string,
    video?: boolean,
    vote_average?: number,
    vote_count?: number,
}

export * from './CollectionImages'
export * from './CollectionTranslations'