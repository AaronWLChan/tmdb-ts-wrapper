# tmdb-ts
An unofficial TypeScript wrapper for TMDB's API. Supports v3 and v4.

## Install
```javascript
npm i tmdb-ts-wrapper
```

## Usage

#### Prerequisites
* Create TMDB login and [apply](https://www.themoviedb.org/documentation/api) for an API key.
* Obtain `API Read Access Token`. This can be found below your API key on TMDB.

#### Import
```javascript
import { TMDB } from 'tmdb-ts-wrapper';
```

#### Instantiate
* `ACCESS_TOKEN` - Read access token retrieved from TMDB
* `LANGUAGE` - ISO-639-1 Language Code. Optional. Default is `en-US`. Follow this [link](https://developers.themoviedb.org/3/configuration/get-primary-translations) and select 'Example' to see all 'officially' supported languages.

```typescript
const ACCESS_TOKEN = "MY_ACCESS_TOKEN";
const LANGUAGE = "en-US";

const tmdb = new TMDB(ACCESS_TOKEN, LANGUAGE);
```

### Getting Data
All [endpoints](https://developers.themoviedb.org/3/getting-started/introduction) and their methods described on TMDB for v3 and v4 are available and have been typed. For example.
```typescript
//Get Movie Details
const movie: Movie = await tmdb.movies.getDetails(414906);

//Get Company Details
const company: Company = await tmdb.companies.getDetails(1);

//Create Guest Session
const res: Authenticationv3CreateGuestSessionResponse = await tmdb.authv3.createGuestSession();
const guest_session_id = res.guest_session_id;

//Rate Movie
const res1 = await tmdb.movies.rateMovie(414906, { guest_session_id }, { value: 8 });
```

### Language / Translation
Any of the endpoints which include `language` in their query string will by default use the `language` you defined in the config.
You can however override them if needed.
```typescript
const ACCESS_TOKEN = "MY_ACCESS_TOKEN";

//Configured to English
const tmdb = new TMDB(ACCESS_TOKEN, "en-US");

//Will return in English
const enPopularMovies = tmdb.movies.getPopular();

//Override to German
const popularMovies = tmdb.movies.getPopular({ language: "de-DE" });

//Override to Spanish
const movieCredits = tmdb.moves.getCredits(414906, "es-ES");
```

#### Append To Response
To use [append_to_response](https://developers.themoviedb.org/3/getting-started/append-to-response) you will have to use `endpoint`. 
`endpoint` allows you to provide your own typing as well as your own endpoint, query string and request body. 

For example:
```typescript
import { Movie, Video } from 'tmdb-ts-wrapper';

interface MovieVideo extends Movie {
    videos: {
        results: Video[]
    }
};

const result = await tmdb.endpoint.get<MovieVideo>("movie/551", { append_to_response: "videos" });
```
Please note that according to TMDB [documentation](https://developers.themoviedb.org/3/getting-started/append-to-response), Append To Response **only** supports the 'Get Details' methods for the following endpoints.
* Movie
* TV show
* TV season
* TV episode
* Person

#### Images
To build image URLs use `getImageURL()`. Image types (e.g. backdrop, profile) and their sizes have been typed.

```typescript
//Get Backdrop
const backdropURL = getImageURL({ file_path: "FILE_PATH", image_type: "backdrop", backdrop_size: "w1280" });

//Get Logo
const logoURL = getImageURL({ file_path: "FILE_PATH", image_type: "logo", logo_size: "w45" });

//Get Poster
const posterURL = getImageURL({ file_path: "FILE_PATH", image_type: "poster", poster_size: "w154" });

//Get Profile
const profileURL = getImageURL({ file_path: "FILE_PATH", image_type: "profile", profile_size: "h632" });

//Get Still
const stillURL = getImageURL({ file_path: "FILE_PATH", image_type: "still", still_size: "original" });
```
