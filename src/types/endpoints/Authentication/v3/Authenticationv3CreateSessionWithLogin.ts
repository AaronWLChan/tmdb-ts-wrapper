export interface Authenticationv3CreateSessionWithLoginRequestBody {
    request_token: string,
    username: string,
    password: string,
}

export interface Authenticationv3CreateSessionWithLoginResponse {
    success?: boolean,
    expires_at?: string,
    request_token?: string
}