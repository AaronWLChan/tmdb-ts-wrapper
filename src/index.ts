import { Accountv4, Accountv3, Authenticationv3, Authenticationv4, Certifications, Changes, 
    Collections, Companies, Configuration, Credits, Discover, Find, Genres, GuestSessions, Keywords, 
    Listsv3, Listsv4, Movies, Networks, People, Reviews, Search, Trending, TV, TVEpisodeGroups, TVEpisodes, 
    TVSeasons, WatchProviders, Generic } from "./endpoints"
import { AcceptedLanguage, Config, ImageOptions } from "./types"

//CHECK FOR TYPOS AND REQUIRED/OPTIONAL and add class references for querystrings
export class TMDB {

    private config: Config
    private IMAGE_BASE_URL = "https://image.tmdb.org/t/p"

    private _endpoint: Generic
    private _accountv3: Accountv3
    private _accountv4: Accountv4
    private _authv3: Authenticationv3
    private _authv4: Authenticationv4
    private _certifications: Certifications
    private _changes: Changes
    private _collections: Collections
    private _companies: Companies
    private _configuration: Configuration
    private _credits: Credits
    private _discover: Discover
    private _find: Find
    private _genres: Genres
    private _guestSessions: GuestSessions
    private _keywords: Keywords
    private _listsv3: Listsv3
    private _listsv4: Listsv4
    private _movies: Movies
    private _networks: Networks
    private _people: People
    private _reviews: Reviews
    private _search: Search
    private _trending: Trending
    private _tv: TV
    private _tvEpisodeGroups: TVEpisodeGroups
    private _tvEpisodes: TVEpisodes
    private _tvSeasons: TVSeasons
    private _watchProviders: WatchProviders

    /**
     * Create TMDB Wrapper. 
     */
    constructor(access_token: string, language: AcceptedLanguage = "en-US"){
        this.config = { access_token, language }
    }

    get endpoint(){
        return this._endpoint || (this._endpoint = new Generic(this.config))
    }

    get accountv3(){
        return this._accountv3 || (this._accountv3 = new Accountv3(this.config))
    }

    get accountsv4(){
        return this._accountv4 || (this._accountv4 = new Accountv4(this.config, 4))
    }
    
    get authv3(){
        return this._authv3 || (this._authv3 = new Authenticationv3(this.config))
    }

    get authv4(){
        return this._authv4 || (this._authv4 = new Authenticationv4(this.config, 4))
    } 

    get certifications(){
        return this._certifications || (this._certifications = new Certifications(this.config))
    }

    get changes(){
        return this._changes || (this._changes = new Changes(this.config))
    }

    get collections(){
        return this._collections || (this._collections = new Collections(this.config))
    }

    get companies(){
        return this._companies || (this._companies = new Companies(this.config))

    }

    get configuration(){
        return this._configuration || (this._configuration = new Configuration(this.config))
    }

    get credits(){
        return this._credits || (this._credits = new Credits(this.config))
    }

    get discover(){
        return this._discover || (this._discover = new Discover(this.config))
    }

    get find(){
        return this._find || (this._find = new Find(this.config))
    }

    get genres(){
        return this._genres || (this._genres = new Genres(this.config))
    }

    get guestSessions(){
        return this._guestSessions || (this._guestSessions = new GuestSessions(this.config))
    }

    get keywords(){
        return this._keywords || (this._keywords = new Keywords(this.config))
    }

    get listsv3(){
        return this._listsv3 || (this._listsv3 = new Listsv3(this.config))
    }

    get listsv4(){
        return this._listsv4 || (this._listsv4 = new Listsv4(this.config, 4))
    }

    get movies(){
        return this._movies || (this._movies = new Movies(this.config))
    }

    get networks(){
        return this._networks || (this._networks = new Networks(this.config))
    }

    get people(){
        return this._people || (this._people = new People(this.config))
    }

    get reviews(){
        return this._reviews || (this._reviews = new Reviews(this.config))
    }

    get search(){
        return this._search || (this._search = new Search(this.config))
    }

    get trending(){
        return this._trending || (this._trending = new Trending(this.config))
    }

    get tv(){
        return this._tv || (this._tv = new TV(this.config))
    }

    get tvEpisodeGroups(){
        return this._tvEpisodeGroups || (this._tvEpisodeGroups = new TVEpisodeGroups(this.config))
    }

    get tvEpisodes(){
        return this._tvEpisodes || (this._tvEpisodes = new TVEpisodes(this.config))
    }

    get tvSeasons(){
        return this._tvSeasons || (this._tvSeasons = new TVSeasons(this.config))
    }

    get watchProviders(){
        return this._watchProviders || (this._watchProviders = new WatchProviders(this.config))
    }

    /**
     * Get Image URL
     * 
     * Provide image_type and size typing will be automatically typed for you.
     * 
     * {@link https://developers.themoviedb.org/3/getting-started/images}
     * {@link https://developers.themoviedb.org/3/configuration/get-api-configuration}
     */
    public getImageURL(options: ImageOptions){

        const { image_type } = options

        let size: string

        if (image_type === "backdrop") {
            size = options.backdrop_size
        }

        else if (image_type === "logo") {
            size = options.logo_size
        }

        else if (image_type === "poster") {
            size = options.poster_size
        }

        else if (image_type === "profile"){
            size = options.profile_size
        }

        //Still
        else { 
            size = options.still_size
        }

        return `${this.IMAGE_BASE_URL}/${size}/${options.file_path}`
    }

    

}


