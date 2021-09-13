import { Url } from 'url';

export class UrlUpdateBody {
    token: string;
    surl: string;
    lurl: string;
    alias: string;
    constructor(token: string, surl: string, lurl: string, alias: string) {
        this.token = token;
        this.surl = surl;
        this.lurl = lurl;
        this.alias = alias;
    }
}

