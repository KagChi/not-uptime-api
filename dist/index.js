"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uptimeClient = void 0;
const axios_1 = require("axios");
class uptimeClient {
    constructor(token) {
        this.baseURL = "https://uptime.notadev.xyz/api/v1";
        this.version = require('../package.json').version;
        this.token = token;
    }
    async submit(name, url) {
        if (!this.token)
            throw new Error('Authorization Bearer Required!');
        if (name)
            throw new Error('Name Required!');
        if (url)
            throw new Error('Url Required!');
        const allowedURI = /(glitch.me||repl.co||repl.run)/;
        if (allowedURI.test(url)) {
            const post = await axios_1.default.post(this.baseURL + "/submit", {
                name: name,
                url: url
            }, {
                headers: {
                    authorization: this.token
                }
            });
            return {
                name: name,
                url: url
            };
        }
        else {
            throw new Error('Your URI is Invalid!');
        }
    }
}
exports.uptimeClient = uptimeClient;