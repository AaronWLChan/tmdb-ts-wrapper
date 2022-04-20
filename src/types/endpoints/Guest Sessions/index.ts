import { Translatable } from '../../util'

export interface GuestSessionRatedQueryString extends Translatable {
    sort_by?: "created_at.asc" | "created_at.desc"
}

export * from './GuestSessionRatedMovies'
export * from './GuestSessionRatedTVShows'
export * from './GuestSessionRatedTVEpisodes'

