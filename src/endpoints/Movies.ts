import { AcceptedLanguage, DeleteMovieQueryQueryString, DeleteMovieResponse, LatestMovie, Movie, MovieAccountStates, MovieAccountStatesQueryString, MovieAlternativeTitles, MovieAlternativeTitlesQueryString, 
    MovieChanges, MovieChangesQueryString, MovieCredits, MovieExternalIds, MovieImages, MovieImagesQueryString, MovieKeywords, 
    MovieLists, MovieListsQueryString, MovieRecommendations, MovieRecommendationsQueryString, MovieReleaseDates, MovieReviews, MovieReviewsQueryString, MovieTranslations, 
    MovieVideos, MovieWatchProviders, NowPlaying, NowPlayingQueryString, PopularMovies, PopularMoviesQueryString, RateMovieQueryString, RateMovieResponse, 
    SimilarMovies, SimilarMoviesQueryString, TopRatedMovies, TopRatedMoviesQueryString, UpcomingMovies, UpcomingMoviesQueryString } from "../types";
import Endpoint from "./Endpoint";

export class Movies extends Endpoint {

    /**
     * Get Details
     *
     * Get the primary information about a movie.
     * 
     * {@link https://developers.themoviedb.org/3/movies/get-movie-details}
    */
    public getDetails(movie_id: number, language?: AcceptedLanguage){
        return this._get<Movie>(`movie/${movie_id}`, { language: language ? language : this.config.language })
    }

    /**
     * Get Account States
     *
     * Grab the following account states for a session:
     * - Movie rating
     * - If it belongs to your watchlist
     * - If it belongs to your favorite list
     * 
     * {@link https://developers.themoviedb.org/3/movies/get-movie-account-states}
    */
    public getAccountStates(movie_id: number, queryString: MovieAccountStatesQueryString){
        return this._get<MovieAccountStates>(`movie/${movie_id}/account_states`, queryString)
    }

    /**
     * Get Alternative Titles
     *
     * Get all of the alternative titles for a movie.
     * 
     * {@link https://developers.themoviedb.org/3/movies/get-movie-alternative-titles}
    */
    public getAlternativeTitles(movie_id: number, queryString?: MovieAlternativeTitlesQueryString){
        return this._get<MovieAlternativeTitles>(`movie/${movie_id}/alternative_titles`, queryString)
    }

    /**
     * Get Changes
     *
     * Get the changes for a movie. By default only the last 24 hours are returned.
     * 
     * You can query up to 14 days in a single query by using the start_date and end_date query parameters.
     * 
     * {@link https://developers.themoviedb.org/3/movies/get-movie-changes}
    */
    public gteChanges(movie_id: number, queryString?: MovieChangesQueryString){
        return this._get<MovieChanges>(`movie/${movie_id}/changes`, queryString)
    }

    /**
     * Get Credits
     *
     * Get the cast and crew for a movie.
     * 
     * {@link https://developers.themoviedb.org/3/movies/get-movie-credits}
    */
    public getCredits(movie_id: number, language?: AcceptedLanguage){
        return this._get<MovieCredits>(`movie/${movie_id}/credits`, { language: language ? language : this.config.language })
    }

    /**
     * Get External Ids
     *
     * Get the external ids for a movie.
     * 
     * {@link https://developers.themoviedb.org/3/movies/get-movie-external-ids}
    */
    public getExternalIds(movie_id: number){
        return this._get<MovieExternalIds>(`movie/${movie_id}/external_ids`)
    }

    /**
     * Get Images
     *
     * Get the images that belong to a movie.
     * 
     * Querying images with a language parameter will filter the results. 
     * If you want to include a fallback language (especially useful for backdrops) you can use the include_image_language parameter. 
     * This should be a comma seperated value like so: include_image_language=en,null.
     * 
     * {@link https://developers.themoviedb.org/3/movies/get-movie-images}
    */
    public getImages(movie_id: number, queryString?: MovieImagesQueryString){
        return this._get<MovieImages>(`movie/${movie_id}/images`, this.applyTranslation(queryString))
    }

    /**
     * Get Keywords
     *
     * Get the keywords that have been added to a movie.
     * 
     * {@link https://developers.themoviedb.org/3/movies/get-movie-keywords}
    */
    public getKeywords(movie_id: number){
        return this._get<MovieKeywords>(`movie/${movie_id}/keywords`)
    }

    /**
     * Get Lists
     *
     * Get a list of lists that this movie belongs to.
     * 
     * {@link https://developers.themoviedb.org/3/movies/get-movie-lists}
    */
    public getLists(movie_id: number, queryString?: MovieListsQueryString){
        return this._get<MovieLists>(`movie/${movie_id}/lists`, this.applyTranslation(queryString))
    }

    /**
     * Get Recommendations
     *
     * Get a list of recommended movies for a movie.
     * 
     * {@link https://developers.themoviedb.org/3/movies/get-movie-recommendations}
    */
    public getRecommendations(movie_id: number, queryString?: MovieRecommendationsQueryString){
        return this._get<MovieRecommendations>(`movie/${movie_id}/recommendations`, this.applyTranslation(queryString))
    }

    /**
     * Get Release Dates
     *
     * Get the release date along with the certification for a movie.
     * 
     * Release dates support different types:
     * 1. Premiere
     * 2. Theatrical (limited)
     * 3. Theatrical
     * 4. Digital
     * 5. Physical
     * 6. TV
     * 
     * {@link https://developers.themoviedb.org/3/movies/get-movie-release-dates}
    */
    public getReleaseDates(movie_id: number){
        return this._get<MovieReleaseDates>(`movie/${movie_id}/release_dates`)
    }

    /**
     * Get Reviews
     *
     * Get the user reviews for a movie.
     * 
     * {@link https://developers.themoviedb.org/3/movies/get-movie-reviews}
    */
    public getReviews(movie_id: number, queryString?: MovieReviewsQueryString){
        return this._get<MovieReviews>(`movie/${movie_id}/reviews`, this.applyTranslation(queryString))
    }

    /**
     * Get Similar Movies
     *
     * Get a list of similar movies. This is not the same as the "Recommendation" system you see on the website.
     * 
     * These items are assembled by looking at keywords and genres.
     * 
     * {@link https://developers.themoviedb.org/3/movies/get-similar-movies}
    */
    public getSimilarMovies(movie_id: number, queryString?: SimilarMoviesQueryString){
        return this._get<SimilarMovies>(`movie/${movie_id}/similar`, this.applyTranslation(queryString))
    }

    /**
     * Get Translations
     *
     * Get a list of translations that have been created for a movie.
     * 
     * {@link https://developers.themoviedb.org/3/movies/get-movie-translations}
    */
    public getTranslations(movie_id: number){
        return this._get<MovieTranslations>(`movie/${movie_id}/translations`)
    }

    /**
     * Get Videos
     *
     * Get the videos that have been added to a movie.
     * 
     * {@link https://developers.themoviedb.org/3/movies/get-movie-videos}
    */
    public getVideos(movie_id: number, language?: AcceptedLanguage){
        return this._get<MovieVideos>(`movie/${movie_id}/videos`, { language: language ? language : this.config.language })
    }

    /**
     * Get Watch Providers
     *
     * Powered by our partnership with JustWatch, you can query this method to get a list of the availabilities per country by provider.
     * 
     * This is not going to return full deep links, but rather, it's just enough information to display what's available where.
     * 
     * You can link to the provided TMDB URL to help support TMDB and provide the actual deep links to the content.
     * 
     * Please note: In order to use this data you must attribute the source of the data as JustWatch. If we find any usage not complying with these terms we will revoke access to the API.
     * 
     * {@link https://developers.themoviedb.org/3/movies/get-movie-watch-providers}
    */
    public getWatchProviders(movie_id: number){
        return this._get<MovieWatchProviders>(`movie/${movie_id}/watch/providers`)
    }

    /**
     * Rate Movie
     *
     * Rate a movie.
     * 
     * A valid session or guest session ID is required. You can read more about how this works [here]({@link https://developers.themoviedb.org/3/authentication/how-do-i-generate-a-session-id}).
     * 
     * {@link https://developers.themoviedb.org/3/movies/rate-movie}
    */
    public rateMovie(movie_id: number, value: number, queryString: RateMovieQueryString){
        return this._post<RateMovieResponse>(`movie/${movie_id}/rating`, { value }, queryString)
    }

    /**
     * Delete Rating
     *
     * Remove your rating for a movie.
     * 
     * A valid session or guest session ID is required. You can read more about how this works [here]({@link https://developers.themoviedb.org/3/authentication/how-do-i-generate-a-session-id}).
     * 
     * {@link https://developers.themoviedb.org/3/movies/delete-movie-rating}
    */
    public deleteMovieRating(movie_id: number, queryString: DeleteMovieQueryQueryString){
        return this._delete<DeleteMovieResponse>(`movie/${movie_id}/rating`, undefined, queryString)
    }

    /**
     * Get Latest
     *
     * Get the most newly created movie. This is a live response and will continuously change.
     * 
     * {@link https://developers.themoviedb.org/3/movies/get-latest-movie}
    */
    public getLatest(language?: AcceptedLanguage){
        return this._get<LatestMovie>(`movie/latest`, { language: language ? language : this.config.language })
    }

    /**
     * Get Now Playing
     *
     * Get a list of movies in theatres. This is a release type query that looks for all movies that have a release type of 2 or 3 within the specified date range.
     * 
     * You can optionally specify a region prameter which will narrow the search to only look for theatrical release dates within the specified country.
     * 
     * {@link https://developers.themoviedb.org/3/movies/get-now-playing}
    */
    public getNowPlaying(queryString?: NowPlayingQueryString){
        return this._get<NowPlaying>(`movie/now_playing`, this.applyTranslation(queryString))
    }

    /**
     * Get Popular
     *
     * Get a list of the current popular movies on TMDB. This list updates daily.
     * 
     * {@link https://developers.themoviedb.org/3/movies/get-popular-movies}
    */
    public getPopular(queryString?: PopularMoviesQueryString){
        return this._get<PopularMovies>(`movie/popular`, this.applyTranslation(queryString))
    }

    /**
     * Get Top Rated
     *
     * Get the top rated movies on TMDB.
     * 
     * {@link https://developers.themoviedb.org/3/movies/get-top-rated-movies}
    */
    public getTopRated(queryString?: TopRatedMoviesQueryString){
        return this._get<TopRatedMovies>(`movie/top_rated`, this.applyTranslation(queryString))
    }

    /**
     * Get Upcoming
     *
     * Get a list of upcoming movies in theatres. This is a release type query that looks for all movies that have a release type of 2 or 3 within the specified date range.
     * 
     * You can optionally specify a region prameter which will narrow the search to only look for theatrical release dates within the specified country.
     * 
     * {@link https://developers.themoviedb.org/3/movies/get-upcoming}
    */
    public getUpcoming(queryString?: UpcomingMoviesQueryString){
        return this._get<UpcomingMovies>(`movie/upcoming`, this.applyTranslation(queryString))
    }
}