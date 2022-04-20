import { Identifiable, Pageable, Paginated, Translatable } from "../../util";
import { MovieListResult } from "../Movies";
import { TVShowListResult } from "../TV";

export interface PopularPeople extends Paginated{
    results?: PopularPerson[] 
}

export interface PopularPerson extends Identifiable {
    profile_path?: string,
    adult?: boolean,
    name?: string,
    known_for?: KnownForMovie | KnownForTV
    popularity?: number,
}

export interface KnownForMovie extends MovieListResult {
    media_type: "movie"
}

export interface KnownForTV extends TVShowListResult {
    media_type: "tv"
}

export interface PopularPeopleQueryString extends Pageable, Translatable {}