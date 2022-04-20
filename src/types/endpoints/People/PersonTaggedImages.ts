import { Image } from "../../tmdb";
import { Identifiable, Pageable, Paginated, Translatable } from "../../util";
import { MovieListResult } from "../Movies";
import { TVShowListResult } from "../TV";

export interface PersonTaggedImages extends Identifiable, Paginated{
    results?: TaggedImage[]
}

export interface TaggedImage extends Image {
    image_type?: string,
    media_type?: string,
    media?: MovieListResult | TVShowListResult
}

export interface PersonTaggedImagesQueryString extends Pageable, Translatable {}