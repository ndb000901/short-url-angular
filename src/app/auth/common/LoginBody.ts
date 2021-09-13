
export class LoginBody {
    email: string;
    passwd: string;

    constructor(email:string, passwd:string) {
        this.email = email;
        this.passwd = passwd;
    }
}
