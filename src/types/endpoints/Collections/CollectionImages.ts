import { Image } from "../../tmdb";
import { Identifiable } from "../../util";

export interface CollectionImages extends Identifiable {
    backdrops?: Image[],
    posters?: Image[]
}