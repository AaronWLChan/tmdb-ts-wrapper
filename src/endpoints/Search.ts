import { MultiSearch, MultiSearchQueryString, SearchCollections, SearchCollectionsQueryString, SearchCompanies, 
    SearchCompaniesQueryString, SearchKeywords, SearchKeywordsQueryString, SearchMovies, SearchMoviesQueryString, 
    SearchPeople, SearchPeopleQueryString, SearchTV, SearchTVQueryString } from "../types";

import Endpoint from "./Endpoint";

export class Search extends Endpoint {

    /**
     * Search Companies
     *
     * Search for companies.
     * 
     * {@link https://developers.themoviedb.org/3/search/search-companies}
    */
    public searchCompanies(queryString: SearchCompaniesQueryString){
        return this._get<SearchCompanies>(`search/company`, queryString)
    }

    /**
     * Search Collections
     *
     * Search for collections.
     * 
     * {@link https://developers.themoviedb.org/3/search/search-collections}
    */
    public searchCollections(queryString: SearchCollectionsQueryString){
        return this._get<SearchCollections>(`search/collection`, this.applyTranslation(queryString))
    }

    /**
     * Search Keywords
     *
     * Search for keywords.
     * 
     * {@link https://developers.themoviedb.org/3/search/search-keywords}
    */
    public searchKeywords(queryString: SearchKeywordsQueryString){
        return this._get<SearchKeywords>(`search/keyword`, queryString)
    }

    /**
     * Search Movies
     *
     * Search for movies.
     * 
     * {@link https://developers.themoviedb.org/3/search/search-movies}
    */
    public searchMovies(queryString: SearchMoviesQueryString){
        return this._get<SearchMovies>(`search/movie`, this.applyTranslation(queryString))
    }
    
    /**
     * Multi Search
     *
     * Search multiple models in a single request. Multi search currently supports searching for movies, tv shows and people in a single request.
     * 
     * {@link https://developers.themoviedb.org/3/search/multi-search}
    */
    public multiSearch(queryString: MultiSearchQueryString){
        return this._get<MultiSearch>(`search/multi`, this.applyTranslation(queryString))
    }

    /**
     * Search People
     *
     * Search for people.
     * 
     * {@link https://developers.themoviedb.org/3/search/search-people}
    */
    public searchPeople(queryString: SearchPeopleQueryString){
        return this._get<SearchPeople>(`search/person`, this.applyTranslation(queryString))
    }

    /**
     * Search TV Shows
     *
     * Search for a TV show.
     * 
     * {@link https://developers.themoviedb.org/3/search/search-tv-shows}
    */
    public searchTVShows(queryString: SearchTVQueryString){
        return this._get<SearchTV>(`search/tv`, this.applyTranslation(queryString))
    }

    
}