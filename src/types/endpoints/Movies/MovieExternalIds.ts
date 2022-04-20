import { Identifiable } from "../../util";

export interface MovieExternalIds extends Identifiable {
    imdb_id?: string | null,
    facebook_id?: string | null,
    instagram_id?: string | null,
    twitter_id?: string | null,

}