import axios from "axios";

export class apiClient {
    constructor(url) {
        this._url = url;
    }

    post(source, request, func, token) {
        let m = 'post';
        if (this._url.indexOf('static') > -1) m = 'get';

        const options = {
            method: m,
            url: this._url + '/' + source,
            transformResponse: (res) => {
                console.log(res)
                return JSON.parse(res);
            },
            data: request
        };

        if (token) {
            options['headers'] = { Authorization: `Bearer ${token}` };
        }

        axios(options).then(res => {
            const result = res.data;
            if (result !== null) {
                func(result);
            }
        }, (error) => {
            console.log(error);
        });
    }
}