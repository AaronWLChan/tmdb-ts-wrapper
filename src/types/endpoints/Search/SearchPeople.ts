import { Pageable, Paginated, Translatable } from "../../util";
import { MovieListResult } from "../Movies";
import { TVShowListResult } from "../TV";

export interface SearchPeople extends Paginated {
    results?: SearchPeopleResult[]
}

export interface SearchPeopleQueryString extends Pageable, Translatable{
    query: string,
    include_adult?: boolean,
    region?: string,
}

export interface SearchPeopleResult {
    profile_path?: string,
    adult?: boolean,
    name?: string,
    known_for?: KnownForMovie | KnownForTV
    popularity?: number,
}

interface KnownForMovie extends MovieListResult {
    media_type: "movie"
}

interface KnownForTV extends TVShowListResult {
    media_type: "tv"
}
