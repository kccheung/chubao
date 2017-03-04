/// <reference path="node.d.ts" />

import util = require('util')

export class Bot {

    private args: any;

    constructor(args: Object) {
        this.args = args;
    }

    execute(cb: any) {
        let args = this.args;
        let text: string = args.text;

        if (text) {
            if (text.indexOf("name") >= 0) {
                cb({
                    "text": "Error, please pass in ‘name’ parameter."
                });
            }
            else {
                cb({
                    text: util.format("Hello %s", text)
                });
            }
        } else {
            throw "Missing \"text\" property."
        }
    }
}
