import { UrlAdd } from './UrlAdd';

export class UrlAddBody {
    token: string;
    list: UrlAdd[];

    constructor() {
        this.list = [];
        this.token = '';
    }
}
