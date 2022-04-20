import { Video } from "../../tmdb";
import { Identifiable } from "../../util";

export interface MovieVideos extends Identifiable {
    results?: Video[]
}