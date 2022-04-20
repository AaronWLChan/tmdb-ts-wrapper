import { Video } from "../../tmdb";
import { Identifiable } from "../../util";

export interface TVEpisodeVideos extends Identifiable {
    results?: Video[]
}