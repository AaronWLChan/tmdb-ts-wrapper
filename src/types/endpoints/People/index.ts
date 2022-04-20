import { Gender } from "../../tmdb";
import { Identifiable } from "../../util";

export interface Person extends Identifiable {
    birthday?: string | null,
    known_for_department?: string,
    deathday?: string | null,
    name?: string,
    also_known_as?: string[],
    gender?: Gender,
    biography?: string,
    popularity?: number,
    place_of_birth?: string | null,
    profile_path?: string | null,
    adult?: boolean,
    imdb_id?: string,
    homepage?: string | null
}

export interface PersonListResult extends Identifiable{
    adult?: boolean,
    also_known_as?: string[],
    biography?: string,
    birthday?: string | null,
    deathday?: string | null,
    gender?: Gender,
    homepage?: string | null
    imdb_id?: string,
    name?: string,
    place_of_birth?: string | null,
    popularity?: number,
    profile_path?: string | null,
}


export * from './PersonChanges'
export * from './PersonMovieCredits'
export * from './PersonTVCredits'
export * from './PersonCombinedCredits'
export * from './PersonExternalIds'
export * from './PersonImages'
export * from './PersonTaggedImages'
export * from './PersonTranslations'
export * from './LatestPerson'
export * from './PopularPeople'