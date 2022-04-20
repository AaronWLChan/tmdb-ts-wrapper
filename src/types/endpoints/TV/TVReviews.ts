import { Identifiable, Pageable, Paginated, Translatable } from "../../util";

export interface TVReviews extends Identifiable, Paginated {
    results?: TVReviewResult[]
}

export interface TVReviewResult extends Identifiable{
    author?: string,
    author_details?: TVReviewAuthorDetails,
    content?: string,
    created_at?: string,
    updated_at?: string,
    url?: string,
}

export interface TVReviewAuthorDetails{
    name?: string,
    username?: string,
    avatar_path?: string | null,
    rating?: number | null
}

export interface TVReviewsQueryString extends Pageable, Translatable {}