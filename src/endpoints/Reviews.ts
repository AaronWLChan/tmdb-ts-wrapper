import { Review } from "../types";
import Endpoint from "./Endpoint";

export class Reviews extends Endpoint {

    /**
     * Get Details
     *
     * Retrieve the details of a movie or TV show review.
     * 
     * {@link https://developers.themoviedb.org/3/reviews/get-review-details}
    */
    public getDetails(review_id: string){
        return this._get<Review>(`review/${review_id}`)
    }

}