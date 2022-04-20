interface BaseImageOptions {
    file_path: string,
}

interface BackdropImageOptions extends BaseImageOptions{
    image_type: "backdrop",
    backdrop_size: "w300" | "w780" | "w1280" | "original"
}

interface LogoImageOptions extends BaseImageOptions {
    image_type: "logo",
    logo_size: "w45" | "w92" | "w154" | "w185" | "w300" | "w500" | "original"
}

interface PosterImageOptions extends BaseImageOptions {
    image_type: "poster",
    poster_size: "w92" | "w154" | "w185" | "w342" | "w500" | "w780" | "original"
}

interface ProfileImageOptions extends BaseImageOptions {
    image_type: "profile",
    profile_size: "w45" | "w185" | "h632" | "original"
}

interface StillImageOptions extends BaseImageOptions {
    image_type: "still",
    still_size: "w92" | "w185" | "w300" | "original"
}

export type ImageOptions = BackdropImageOptions | LogoImageOptions | PosterImageOptions | ProfileImageOptions | StillImageOptions
