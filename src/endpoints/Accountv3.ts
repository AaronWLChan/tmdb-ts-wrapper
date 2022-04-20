
import { Accountv3AddToWatchlistRequestBody, Accountv3AddToWatchlistResponse, Accountv3FavoriteMovies, Accountv3FavoriteMoviesQueryString, Accountv3FavoriteTVShows, 
    Accountv3FavoriteTVShowsQueryString, Accountv3Lists, Accountv3ListsQueryString, Accountv3MarkAsFavoriteRequestBody, Accountv3MarkAsFavoriteResponse, 
    Accountv3MovieWatchlist, Accountv3MovieWatchlistQueryString, Accountv3RatedMovies, Accountv3RatedMoviesQueryString, Accountv3RatedTVShowEpisodes, 
    Accountv3RatedTVShowEpisodesQueryString, Accountv3RatedTVShows, Accountv3RatedTVShowsQueryString, Accountv3TVWatchlist, Accountv3TVWatchlistQueryString } from '../types'
import Endpoint from './Endpoint'

export class Accountv3 extends Endpoint {

    /**
     * Get Details
     * 
     * Get Your Account Details.
     * 
     * {@link https://developers.themoviedb.org/3/account/get-account-details}
     */
     public getDetails(session_id: string){
        return this._get<Accountv3>("account", { session_id })
    }

    /**
     * Get Created Lists
     * 
     * Get all of the lists created by an account. Will include private lists if you are the owner.
     * 
     * {@link https://developers.themoviedb.org/3/account/get-created-lists}
     */
    public getCreatedLists(account_id: number, queryString: Accountv3ListsQueryString){
        return this._get<Accountv3Lists>(`account/${account_id}/lists`, queryString)
    }

    /**
     * Get Favorite Movies
     * 
     * Get the list of your favorite movies.
     * 
     * {@link https://developers.themoviedb.org/3/account/get-favorite-movies}
     */
    public getFavoriteMovies(account_id: number, queryString: Accountv3FavoriteMoviesQueryString){
        return this._get<Accountv3FavoriteMovies>(`account/${account_id}/favorite/movies`, queryString)
    }

    /**
     * Get Favorite TV Shows
     * 
     * Get the list of your favorite TV shows.
     * 
     * {@link https://developers.themoviedb.org/3/account/get-favorite-tv-shows}
     */
    public getFavoriteTVShows(account_id: number, queryString: Accountv3FavoriteTVShowsQueryString){
        return this._get<Accountv3FavoriteTVShows>(`account/${account_id}/favorite/tv`, queryString)
    }

    /**
     * Mark as Favorite
     * 
     * This method allows you to mark a movie or TV show as a favorite item.
     * 
     * {@link https://developers.themoviedb.org/3/account/mark-as-favorite}
     */
    public markAsFavorite(account_id: number, session_id: string, requestBody: Accountv3MarkAsFavoriteRequestBody){
        return this._post<Accountv3MarkAsFavoriteResponse>(`account/${account_id}/favorite`, requestBody, { session_id })
    }

    /**
     * Get Rated Movies
     * 
     * Get a list of all the movies you have rated.
     * 
     * {@link https://developers.themoviedb.org/3/account/get-rated-movies}
     */
    public getRatedMovies(account_id: number, queryString: Accountv3RatedMoviesQueryString){
        return this._get<Accountv3RatedMovies>(`account/${account_id}/rated/movies`, queryString)
    }

    /**
     * Get Rated TV Shows
     * 
     * Get a list of all the TV shows you have rated.
     * 
     * {@link https://developers.themoviedb.org/3/account/get-rated-tv-shows}
    */
    public getRatedTVShows(account_id: number, queryString: Accountv3RatedTVShowsQueryString){
        return this._get<Accountv3RatedTVShows>(`account/${account_id}/rated/tv`, queryString)
    }

    /**
     * Get Rated TV Episodes
     * 
     * Get a list of all the TV episodes you have rated.
     * 
     * {@link https://developers.themoviedb.org/3/account/get-rated-tv-episodes}
    */
    public getRatedTVEpisodes(account_id: number, queryString: Accountv3RatedTVShowEpisodesQueryString){
        return this._get<Accountv3RatedTVShowEpisodes>(`account/${account_id}/rated/tv`, queryString)
    } 

    /**
     * Get Movie Watchlist
     * 
     * Get a list of all the movies you have added to your watchlist.
     * 
     * {@link https://developers.themoviedb.org/3/account/get-movie-watchlist}
    */
    public getMovieWatchlist(account_id: number, queryString: Accountv3MovieWatchlistQueryString){
        return this._get<Accountv3MovieWatchlist>(`account/${account_id}/watchlist/movies`, queryString)
    }

    /**
     * Get TV Show Watchlist
     * 
     * Get a list of all the TV shows you have added to your watchlist.
     * 
     * {@link https://developers.themoviedb.org/3/account/get-tv-show-watchlist}
    */
    public getTVWatchlist(account_id: number, queryString: Accountv3TVWatchlistQueryString){
        return this._get<Accountv3TVWatchlist>(`account/${account_id}/watchlist/tv`, queryString)
    }

    /**
     * Add to Watchlist
     * 
     * Add a movie or TV show to your watchlist.
     * 
     * {@link https://developers.themoviedb.org/3/account/add-to-watchlist}
    */
    public addToWatchlist(account_id: number, session_id: string, requestBody: Accountv3AddToWatchlistRequestBody){
        return this._post<Accountv3AddToWatchlistResponse>(`account/${account_id}/watchlist`, requestBody, { session_id })
    }

}