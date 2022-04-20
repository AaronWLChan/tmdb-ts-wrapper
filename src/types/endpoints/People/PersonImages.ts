import { Image } from "../../tmdb";
import { Identifiable } from "../../util";

export interface PersonImages extends Identifiable {
    profiles?: Image[]
}