import { CertificationsMovie, CertificationsTV } from "../types";
import Endpoint from "./Endpoint";

export class Certifications extends Endpoint {

    /**
     * Get Movie Certifications
     *
     * Get an up to date list of the officially supported movie certifications on TMDB. 
     * 
     * {@link https://developers.themoviedb.org/3/certifications/get-movie-certifications}
    */
    public getMovieCertifications(){
        return this._get<CertificationsMovie>("certification/movie/list")
    }

    /**
     * Get TV Certifications
     *
     * Get an up to date list of the officially supported TV show certifications on TMDB. 
     * 
     * {@link https://developers.themoviedb.org/3/certifications/get-tv-certifications}
    */
    public getTVCertifications(){
        return this._get<CertificationsTV>("certification/tv/list")
    }

}