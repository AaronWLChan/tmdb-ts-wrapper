import { Image } from "../../tmdb";
import { Identifiable } from "../../util";

export interface TVEpisodeImages extends Identifiable{
    stills?: Image[]
}