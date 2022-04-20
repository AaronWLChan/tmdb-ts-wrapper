import { Image } from "../../tmdb";
import { Identifiable } from "../../util";

export interface TVImages extends Identifiable {
    backdrops?: Image[],
    posters?: Image[]
}