import { AcceptedLanguage, TVSeason, TVSeasonAccountStates, TVSeasonAccountStatesQueryString, TVSeasonAggregrateCredits, 
    TVSeasonChanges, TVSeasonChangesQueryString, TVSeasonCredits, TVSeasonExternalIds, TVSeasonImages, 
    TVSeasonTranslations, TVSeasonVideos } from "../types";
import Endpoint from "./Endpoint";

export class TVSeasons extends Endpoint {

    /**
     * Get Details
     * 
     * Get the TV season details by id.
     * 
     * {@link https://developers.themoviedb.org/3/tv-seasons/get-tv-season-details}
    */
    public getDetails(tv_id: number, season_number: number, language?: AcceptedLanguage){
        return this._get<TVSeason>(`tv/${tv_id}/season/${season_number}`, { language: language ? language : this.config.language })
    }

    /**
     * Get Account States
     * 
     * Returns all of the user ratings for the season's episodes.
     * 
     * {@link https://developers.themoviedb.org/3/tv-seasons/get-tv-season-account-states}
    */
    public getAccountStates(tv_id: number, season_number: number, queryString: TVSeasonAccountStatesQueryString){
        return this._get<TVSeasonAccountStates>(`tv/${tv_id}/season/${season_number}/account_states`, this.applyTranslation(queryString))
    }

    /**
     * Get Aggregrate Credits
     * 
     * Get the aggregate credits for TV season.
     *
     * This call differs from the main credits call in that it does not only return the season credits, but rather is a view of all the cast & crew for all of the episodes belonging to a season.
     * 
     * {@link https://developers.themoviedb.org/3/tv-seasons/get-tv-season-aggregate-credits}
    */
    public getAggregrateCredits(tv_id: number, season_number: number, language?: AcceptedLanguage){
        return this._get<TVSeasonAggregrateCredits>(`tv/${tv_id}/season/${season_number}/aggregate_credits`, { language: language ? language : this.config.language })
    }

    /**
     * Get Changes
     * 
     * Get the changes for a TV season. By default only the last 24 hours are returned.
     * 
     * You can query up to 14 days in a single query by using the start_date and end_date query parameters.
     * 
     * {@link https://developers.themoviedb.org/3/tv-seasons/get-tv-season-changes}
    */
    public geChanges(season_id: number, queryString?: TVSeasonChangesQueryString){
        return this._get<TVSeasonChanges>(`tv/season/${season_id}/changes`, queryString)
    }

    /**
     * Get Credits
     * 
     * Get the credits for TV season.
     * 
     * {@link https://developers.themoviedb.org/3/watch-providers/get-tv-season-credits}
    */
    public getCredits(tv_id: number, season_number: number, language?: AcceptedLanguage){
        return this._get<TVSeasonCredits>(`tv/${tv_id}/season/${season_number}/credits`, { language: language ? language : this.config.language })
    }

    /**
     * Get External IDs
     * 
     * Get the external ids for a TV season. Currently only support TVDB ID.
     * 
     * {@link https://developers.themoviedb.org/3/tv-seasons/get-tv-season-external-ids}
    */
    public getExternalIds(tv_id: number, season_number: number, language?: AcceptedLanguage){
        return this._get<TVSeasonExternalIds>(`tv/${tv_id}/season/${season_number}/external_ids`, { language: language ? language : this.config.language })
    }

    /**
     * Get Images
     * 
     * Get the images that belong to a TV season.
     *
     * Querying images with a language parameter will filter the results. 
     * If you want to include a fallback language (especially useful for backdrops) you can use the include_image_language parameter. 
     * This should be a comma separated value like so: include_image_language=en,null.
     * 
     * {@link https://developers.themoviedb.org/3/tv-seasons/get-tv-season-images}
    */
    public getImages(tv_id: number, season_number: number, language?: AcceptedLanguage){
        return this._get<TVSeasonImages>(`tv/${tv_id}/season/${season_number}/images`, { language: language ? language : this.config.language })
    }

    /**
     * Get Translations
     * 
     * Get translations for TV Season.
     * 
     * {@link https://developers.themoviedb.org/3/tv-seasons/get-tv-season-translations}
    */
    public getTranslations(tv_id: number, season_number: number, language?: AcceptedLanguage){
        return this._get<TVSeasonTranslations>(`tv/${tv_id}/season/${season_number}/translations`, { language: language ? language : this.config.language })
    }

    /**
     * Get Videos
     * 
     * Get the videos that have been added to a TV season.
     * 
     * {@link https://developers.themoviedb.org/3/tv-seasons/get-tv-season-videos}
    */
    public getVideos(tv_id: number, season_number: number, language?: AcceptedLanguage){
        return this._get<TVSeasonVideos>(`tv/${tv_id}/season/${season_number}/videos`, { language: language ? language : this.config.language })
    }
}