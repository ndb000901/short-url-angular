
export class UrlDeleteBody {
    token: string;
    surl: string;
    constructor(token: string, surl: string) {
        this.token = token;
        this.surl = surl;
    }
}
