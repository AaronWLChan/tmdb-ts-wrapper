import { Image } from "../../tmdb";
import { Identifiable } from "../../util";

export interface TVSeasonImages extends Identifiable {
    posters?: Image[]
}