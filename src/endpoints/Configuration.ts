import { Country, Job, Language, Timezone } from "../types";
import Endpoint from "./Endpoint";

export class Configuration extends Endpoint {

    /**
     * Get API configuration
     *
     * Get the system wide configuration information. Some elements of the API require some knowledge of this configuration data. 
     * The purpose of this is to try and keep the actual API responses as light as possible. 
     * It is recommended you cache this data within your application and check for updates every few days.
     * 
     * This method currently holds the data relevant to building image URLs as well as the change key map.
     * 
     * {@link https://developers.themoviedb.org/3/configuration/get-api-configuration}
    */
    public getAPIConfiguration(){
        return this._get<Configuration>("configuration")
    }

    /**
     * Get Countries
     * 
     * Get the list of countries (ISO 3166-1 tags) used throughout TMDB.
     * 
     * {@link https://developers.themoviedb.org/3/configuration/get-countries}
     */
    public getCountries(){
        return this._get<Country[]>("configuration/countries")
    }

    /**
     * Get Jobs
     * 
     * Get a list of the jobs and departments we use on TMDB.
     * 
     * {@link https://developers.themoviedb.org/3/configuration/get-jobs}
    */
    public getJobs(){
        return this._get<Job[]>("configuration/jobs")
    }

    /**
     * Get Languages
     * 
     * Get the list of languages (ISO 639-1 tags) used throughout TMDB.
     * 
     * {@link https://developers.themoviedb.org/3/configuration/get-languages}
    */
    public getLanguages(){
        return this._get<Language[]>("configuration/languages")
    }

    /**
     * Get Primary Translations
     * 
     * Get a list of the officially supported translations on TMDB. 
     * 
     * While it's technically possible to add a translation in any one of the [languages]({@link https://developers.themoviedb.org/3/configuration/get-languages}) we have added to TMDB (we don't restrict content), the ones listed in this method are the ones we also support for localizing the website with which means they are what we refer to as the "primary" translations.
     * These are all specified as [IETF tags]({@link https://en.wikipedia.org/wiki/IETF_language_tag}) to identify the languages we use on TMDB. There is one exception which is image languages. They are currently only designated by a ISO-639-1 tag. This is a planned upgrade for the future.
     * We're always open to adding more if you think one should be added. You can ask about getting a new primary translation added by posting on [the forums]({@link https://www.themoviedb.org/talk/category/5047951f760ee3318900009a}).
     * 
     * One more thing to mention, these are the translations that map to our website translation project. You can view and contribute to that project [here]({@link https://www.localeapp.com/projects/8267}).
     * 
     * {@link https://developers.themoviedb.org/3/configuration/get-primary-translations}
    */
    public getPrimaryTranslations(){
        return this._get<string[]>("configuration/primary_translations")
    }

    /**
     * Get Timezones
     * 
     * Get the list of timezones used throughout TMDB.
     * 
     * {@link https://developers.themoviedb.org/3/configuration/get-timezones}
    */
    public getTimezones(){
        return this._get<Timezone[]>("configuration/timezones")
    }
}