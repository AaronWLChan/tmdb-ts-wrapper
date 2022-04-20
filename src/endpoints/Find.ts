import { AcceptedLanguage, ExternalSource, FindById } from "../types";
import Endpoint from "./Endpoint";

export class Find extends Endpoint {

    /**
     * Find by ID
     * 
     * The find method makes it easy to search for objects in our database by an external id.
     * 
     * This method will search all objects (movies, TV shows and people) and return the results in a single response.
     * 
     * {@link https://developers.themoviedb.org/3/find/find-by-id}
     */
    public findById(external_id: string, external_source: ExternalSource, language?: AcceptedLanguage){
        return this._get<FindById>(`find/${external_id}`, { language: language ? language : this.config.language, external_source }, )
    }
}