
export class UserUpdatePasswdBody {
    token: string;
    oldPasswd: string;
    newPasswd: string;

    constructor(token: string, oldPasswd: string, newPasswd: string) {
        this.token = token;
        this.oldPasswd = oldPasswd;
        this.newPasswd = newPasswd;
    }
}
