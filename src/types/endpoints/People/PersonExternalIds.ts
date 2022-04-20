import { Identifiable } from "../../util";

export interface PersonExternalIds extends Identifiable {
    imdb_id?: string | null,
    facebook_id?: string | null,
    freebase_mid?: string | null,
    freebase_id?: string | null,
    tvrage_id?: number | null,
    twitter_id?: string | null,
    instagram_id?: string | null,
}