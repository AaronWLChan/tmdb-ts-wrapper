import { Image } from "../../tmdb";
import { Identifiable, Translatable } from "../../util";

export interface MovieImages extends Identifiable {
    backdrops?: Image[],
    posters?: Image[]
}

export interface MovieImagesQueryString extends Translatable {
    include_image_language?: string
}