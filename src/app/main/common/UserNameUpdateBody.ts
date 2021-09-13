
export class UserNameUpdateBody {
    token: string;
    userName: string;
    constructor(token: string, userName: string) {
        this.token = token;
        this.userName = userName;
    }
}
