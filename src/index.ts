import axios from 'axios';
import type { Submit } from './Interfaces'
export class uptimeClient {
    token: string;
    constructor(token: string) {
        this.token = token;
    }
    private readonly baseURL = "https://uptime.notadev.xyz/api/v1";
    public version : string = require('../package.json').version
    public async submit(name: string, url: string): Promise<Submit> {
        if(!this.token) throw new Error('Authorization Bearer Required!');
        if(!name) throw new Error('Name Required!');
        if(!url) throw new Error('Url Required!');
        const allowedURI = /(glitch.me|repl.co|repl.run)/i
        if(allowedURI.test(url)) {
            try {
        const post = await axios.post(this.baseURL+ "/submit", {
            name: name,
            url: url
        }, {
            headers: {
                authorization: this.token
            }
        })
        return {
           name: name,
           url: url,
           message: "Success"
        }
    } catch (error) {
        throw new Error(error.message)
    }
} else {
    throw new Error('Your URI is Invalid!')
    }
} 
  }

 