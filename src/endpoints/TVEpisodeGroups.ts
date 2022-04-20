import { AcceptedLanguage, TVEpisodeGroup } from "../types";
import Endpoint from "./Endpoint";

export class TVEpisodeGroups extends Endpoint {
    
    /**
     * Get Details
     * 
     * Get the details of a TV episode group. Groups support 7 different types which are enumerated as the following:
     *
     * 1. Original air date
     * 2. Absolute
     * 3. DVD
     * 4. Digital
     * 5. Story arc
     * 6. Production
     * 7. TV
     * 
     * {@link https://developers.themoviedb.org/3/tv-episode-groups/get-tv-episode-group-details}
    */
    public getDetails(episode_group_id: string, language?: AcceptedLanguage){
        return this._get<TVEpisodeGroup>(`tv/episode_group/${episode_group_id}`, { language: language ? language : this.config.language })
    }

}