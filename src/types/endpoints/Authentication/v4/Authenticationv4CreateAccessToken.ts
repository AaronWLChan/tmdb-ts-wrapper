import { Response } from "../../../util";

export interface Authenticationv4CreateAccessTokenResponse extends Response {
    access_token?: string,
    success?: boolean,
    account_id?: string,
}