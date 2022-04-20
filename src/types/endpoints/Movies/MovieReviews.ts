import { Identifiable, Pageable, Paginated, Translatable } from "../../util";

export interface MovieReviews extends Identifiable, Paginated {
    results?: MovieReviewResult[]
}

export interface MovieReviewResult extends Identifiable{
    author?: string,
    author_details?: MovieReviewAuthorDetails,
    content?: string,
    created_at?: string,
    updated_at?: string,
    url?: string,
}

export interface MovieReviewAuthorDetails{
    name?: string,
    username?: string,
    avatar_path?: string | null,
    rating?: number | null
}

export interface MovieReviewsQueryString extends Pageable, Translatable {}