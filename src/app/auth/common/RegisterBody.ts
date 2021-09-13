
export class RegisterBody {
    email: string;
    passwd: string;

    // tslint:disable-next-line: variable-name
    user_name: string;
    captcha: string;
    // tslint:disable-next-line: variable-name
    constructor(email: string, passwd: string, user_name: string, captcha: string) {
        this.email = email;
        this.passwd = passwd;
        this.user_name = user_name;
        this.captcha = captcha;

    }
}

