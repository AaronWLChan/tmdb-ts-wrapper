import { Identifiable } from "../../util";

export interface MovieWatchProviders extends Identifiable {
    results?: MovieWatchProvidersResults
}

export interface MovieWatchProvidersResults {
    AR?: MovieWatchProviderDetails,
    AT?: MovieWatchProviderDetails,
    AU?: MovieWatchProviderDetails,
    BE?: MovieWatchProviderDetails,
    BR?: MovieWatchProviderDetails,
    CA?: MovieWatchProviderDetails,
    CH?: MovieWatchProviderDetails,
    CL?: MovieWatchProviderDetails,
    CO?: MovieWatchProviderDetails,
    CZ?: MovieWatchProviderDetails,
    DE?: MovieWatchProviderDetails,
    DK?: MovieWatchProviderDetails,
    EC?: MovieWatchProviderDetails,
    EE?: MovieWatchProviderDetails,
    ES?: MovieWatchProviderDetails,
    FI?: MovieWatchProviderDetails,
    FR?: MovieWatchProviderDetails,
    GB?: MovieWatchProviderDetails,
    GR?: MovieWatchProviderDetails,
    HU?: MovieWatchProviderDetails,
    ID?: MovieWatchProviderDetails,
    IE?: MovieWatchProviderDetails,
    IN?: MovieWatchProviderDetails,
    IT?: MovieWatchProviderDetails,
    JP?: MovieWatchProviderDetails,
    KR?: MovieWatchProviderDetails,
    LT?: MovieWatchProviderDetails,
    LV?: MovieWatchProviderDetails,
    MX?: MovieWatchProviderDetails,
    MY?: MovieWatchProviderDetails,
    NL?: MovieWatchProviderDetails,
    NO?: MovieWatchProviderDetails,
    NZ?: MovieWatchProviderDetails,
    PE?: MovieWatchProviderDetails,
    PH?: MovieWatchProviderDetails,
    PL?: MovieWatchProviderDetails,
    PT?: MovieWatchProviderDetails,
    RO?: MovieWatchProviderDetails,
    RU?: MovieWatchProviderDetails,
    SE?: MovieWatchProviderDetails,
    SG?: MovieWatchProviderDetails,
    TH?: MovieWatchProviderDetails,
    TR?: MovieWatchProviderDetails,
    US?: MovieWatchProviderDetails,
    VE?: MovieWatchProviderDetails,
    ZA?: MovieWatchProviderDetails,
}

export interface MovieWatchProviderDetails {
    link?: string,
    flatrate?: MovieWatchProvider[],
    rent?: MovieWatchProvider[],
    buy?: MovieWatchProvider[],
}

export interface MovieWatchProvider{
    display_priority?: number,
    logo_path?: string,
    provider_id?: number,
    provider_name?: string
}