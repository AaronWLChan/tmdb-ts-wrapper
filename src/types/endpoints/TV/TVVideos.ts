import { Video } from "../../tmdb";
import { Identifiable } from "../../util";

export interface TVVideos extends Identifiable{
    results?: TVVideosResult[]
}

export interface TVVideosResult extends Video{}