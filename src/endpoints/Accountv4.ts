
import { Accountv4FavoriteMovies, Accountv4FavoriteMoviesQueryString, Accountv4FavoriteTVShows, Accountv4FavoriteTVShowsQueryString, 
    Accountv4Lists, Accountv4MovieRecommendations, Accountv4MovieRecommendationsQueryString, Accountv4MovieWatchlist, 
    Accountv4MovieWatchlistQueryString, Accountv4RatedMovies, Accountv4RatedMoviesQueryString, Accountv4RatedTVShows, Accountv4RatedTVShowsQueryString, 
    Accountv4TVShowRecommendations, Accountv4TVShowRecommendationsQueryString, Accountv4TVShowWatchlist, Accountv4TVShowWatchlistQueryString } from "../types";
import Endpoint from "./Endpoint";

export class Accountv4 extends Endpoint {

    /** 
    * Get Lists
    * 
    * Get all the lists you've created.
    * 
    * {@link https://developers.themoviedb.org/4/account/get-account-lists}
    */
    public getLists(account_id: string, page?: number){
        return this._get<Accountv4Lists>(`account/${account_id}/lists`, page && { page })
    }

    /** 
    * Get Favorite Movies
    * 
    * Get the list of movies you have marked as a favorite.
    * 
    * {@link https://developers.themoviedb.org/4/account/get-account-favorite-movies}
    */
    public getFavoriteMovies(account_id: string, queryString?: Accountv4FavoriteMoviesQueryString){
        return this._get<Accountv4FavoriteMovies>(`account/${account_id}/movie/favorites`, queryString)
    }

    /** 
    * Get Favorite TV Shows
    * 
    * Get the list of TV shows you have marked as a favorite.
    * 
    * {@link https://developers.themoviedb.org/4/account/get-account-favorite-tv-shows}
    */
    public getFavoriteTVShows(account_id: string, queryString?: Accountv4FavoriteTVShowsQueryString){
        return this._get<Accountv4FavoriteTVShows>(`account/${account_id}/tv/favorites`, queryString)
    }

    /** 
    * Get Movie Recommendations
    * 
    * Get the list of your personal movie recommendations.
    * 
    * {@link https://developers.themoviedb.org/4/account/get-account-movie-recommendations}
    */
    public getMovieRecommendations(account_id: string, queryString?: Accountv4MovieRecommendationsQueryString){
        return this._get<Accountv4MovieRecommendations>(`account/${account_id}/movie/recommendations`, queryString)
    }

    /** 
    * Get TV Show Recommendations
    * 
    * Get the list of your personal TV show recommendations.
    * 
    * {@link https://developers.themoviedb.org/4/account/get-account-tv-show-recommendations}
    */
    public getTVShowRecommendations(account_id: string, queryString?: Accountv4TVShowRecommendationsQueryString){
        return this._get<Accountv4TVShowRecommendations>(`account/${account_id}/tv/recommendations`, queryString)
    }

    /** 
    * Get Movie Watchlist
    * 
    * Get the list of movies you have added to your watchlist.
    * 
    * {@link https://developers.themoviedb.org/4/account/get-account-movie-watchlist}
    */
    public getMovieWatchlist(account_id: string, queryString?: Accountv4MovieWatchlistQueryString){
        return this._get<Accountv4MovieWatchlist>(`account/${account_id}/movie/watchlist`, queryString)
    }

    /** 
    * Get TV Show Watchlist
    * 
    * Get the list of TV shows you have added to your watchlist.
    * 
    * {@link https://developers.themoviedb.org/4/account/get-account-tv-show-watchlist}
    */
    public getTVShowWatchlist(account_id: string, queryString?: Accountv4TVShowWatchlistQueryString){
        return this._get<Accountv4TVShowWatchlist>(`account/${account_id}/tv/watchlist`, queryString)
    }

    /** 
    * Get Rated Movie
    * 
    * Get the list of movies you have rated.
    * 
    * {@link https://developers.themoviedb.org/4/account/get-account-rated-movies}
    */
    public getRatedMovies(account_id: string, queryString?: Accountv4RatedMoviesQueryString){
        return this._get<Accountv4RatedMovies>(`account/${account_id}/movie/rated`, queryString)
    }

    /** 
    * Get Rated TV Shows
    * 
    * Get the list of TV shows you have rated.
    * 
    * {@link https://developers.themoviedb.org/4/account/get-account-rated-tv-shows}
    */
    public getRatedTVShows(account_id: string, queryString?: Accountv4RatedTVShowsQueryString){
        return this._get<Accountv4RatedTVShows>(`account/${account_id}/tv/rated`, queryString)
    }

}