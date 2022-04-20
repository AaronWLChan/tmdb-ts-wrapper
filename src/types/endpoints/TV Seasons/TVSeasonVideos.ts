import { Video } from "../../tmdb";
import { Identifiable } from "../../util";

export interface TVSeasonVideos extends Identifiable {
    results?: Video[]
}