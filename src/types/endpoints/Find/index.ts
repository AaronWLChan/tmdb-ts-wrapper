import { MovieListResult } from "../Movies"
import { PersonListResult } from "../People"
import { TVShowListResult } from "../TV"
import { TVEpisodeListResult } from "../TV Episodes"
import { TVSeasonListResult } from "../TV Seasons"

export interface FindById {
    movie_results?: MovieListResult[],
    person_results?: PersonListResult[],
    tv_results?: TVShowListResult[],
    tv_episode_results?: TVEpisodeListResult[],
    tv_season_results?: TVSeasonListResult[]
}

export type ExternalSource = "imdb_id" | "freebase_mid" | "freebase_id" | "tvdb_id" 
                            | "tvrage_id" | "facebook_id" | "twitter_id" | "instagram_id"