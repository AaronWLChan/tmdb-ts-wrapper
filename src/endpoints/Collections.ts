import { AcceptedLanguage, Collection, CollectionImages, CollectionTranslations } from "../types";
import Endpoint from "./Endpoint";

export class Collections extends Endpoint {

    /**
     * Get Details
     *
     * Get collection details by id.
     * 
     * {@link https://developers.themoviedb.org/3/collections/get-collection-details}
    */
    public getDetails(collectionId: number, language?: AcceptedLanguage){
        return this._get<Collection>(`collection/${collectionId}`, { language: language ? language : this.config.language })
    }

    /**
     * Get Images
     *
     * Get the images for a collection by id.
     *  
     * {@link https://developers.themoviedb.org/3/collections/get-collection-images}
    */
    public getImages(collectionId: number, language?: AcceptedLanguage){
        return this._get<CollectionImages>(`collection/${collectionId}/images`, { language: language ? language : this.config.language })
    }

    /**
     * Get Translations
     *
     * Get the list translations for a collection by id.
     *
     * {@link https://developers.themoviedb.org/3/collections/get-collection-translations}
    */
    public getTranslations(collectionId: number, language?: AcceptedLanguage) {
        return this._get<CollectionTranslations>(`collection/${collectionId}/translations`, { language: language ? language : this.config.language })
    }
}