
import { Injectable } from '@angular/core';

@Injectable()
export class EnvService {

    static configService: any;

    constructor() {}

    getEnv() {
        const configUrl = '../../../../app.config.js';
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function (res) {
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log(res);
            }
        };
        xhr.open('get', configUrl, false);
        xhr.send();
    }
}

