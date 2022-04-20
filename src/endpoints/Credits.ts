import { Credit } from "../types";
import Endpoint from "./Endpoint";

export class Credits extends Endpoint {

    /**
     * Get Details
     *
     * Get a movie or TV credit details by id.
     * 
     * {@link https://developers.themoviedb.org/3/credits/get-credit-details}
    */
    public getDetails(credit_id: string){
        return this._get<Credit>(`credit/${credit_id}`)
    }
}