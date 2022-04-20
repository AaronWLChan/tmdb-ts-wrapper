import { AcceptedLanguage, WatchProviderRegions, WatchProvidersMovie, 
    WatchProvidersMovieQueryString, WatchProvidersTV, WatchProvidersTVQueryString } from "../types";
import Endpoint from "./Endpoint";

export class WatchProviders extends Endpoint {

    /**
     * Get Available Regions
     * 
     * Returns a list of all of the countries we have watch provider (OTT/streaming) data for.
     * 
     * {@link https://developers.themoviedb.org/3/watch-providers/get-available-regions}
     */
    public getAvailableRegions(language?: AcceptedLanguage){
        return this._get<WatchProviderRegions>(`watch/providers/regions`, { language: language ? language : this.config.language })
    }

    /**
     * Get Movie Providers
     * 
     * Returns a list of the watch provider (OTT/streaming) data we have available for movies. You can specify a watch_region param if you want to further filter the list by country.
     * 
     * {@link https://developers.themoviedb.org/3/watch-providers/get-movie-providers}
     */
    public getMovieProviders(queryString?: WatchProvidersMovieQueryString){
        return this._get<WatchProvidersMovie>(`watch/providers/movie`, this.applyTranslation(queryString))
    }

    /**
     * Get TV Providers.
     * 
     * Returns a list of the watch provider (OTT/streaming) data we have available for TV series. You can specify a watch_region param if you want to further filter the list by country.
     * 
     * {@link https://developers.themoviedb.org/3/watch-providers/get-tv-providers}
     */
    public getTVProviders(queryString?: WatchProvidersTVQueryString){
        return this._get<WatchProvidersTV>(`watch/providers/tv`, this.applyTranslation(queryString))
    }
}