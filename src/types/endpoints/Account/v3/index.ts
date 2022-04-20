import { Identifiable } from '../../../util'

export interface Account extends Identifiable {
    avatar?: Avatar,
    iso_639_1?: string,
    iso_3166_1?: string,
    name?: string,
    include_adult?: boolean,
    username?: string
}

export interface Avatar {
    gravatar?: Gravatar
}

export interface Gravatar {
    hash?: string
}

export * from './Accountv3Lists'
export * from './Accountv3FavoriteMovies'
export * from './Accountv3FavoriteTVShows'
export * from './Accountv3MarkAsFavorite'
export * from './Accountv3RatedMovies'
export * from './Accountv3RatedTVShows'
export * from './Accountv3MovieWatchlist'
export * from './Accountv3TVWatchlist'
export * from './Accountv3AddToWatchlist'
export * from './Accountv3RatedTVShowEpisodes'