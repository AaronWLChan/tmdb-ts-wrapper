import { Response } from "../../../util";


export interface Authenticationv4CreateRequestTokenResponse extends Response {
    request_token?: string
    success?: boolean,
}