/// <reference path="node.d.ts" />

import util = require('util');


export class Bot {

    private args: any;

    constructor(args: Object) {
        this.args = args;
    }

    get extract() {
        return "message.text";
    }

    execute(cb: any) {
        let args = this.args;
        let text: string = args.text;
        let payload = {};

        console.log(args);

        if (args.apiai) {
            let result = args.apiai.result;
            let speech = result.fulfillment.speech;

            switch (result.action) {
                case 'input.unknown':
                case 'input.food':
                    payload = {
                        text: speech
                    };
            }

            if (speech) {
                payload = {
                    text: speech
                };
            } else {
                payload = {
                    attachment: {
                        type: "image",
                        payload: {
                            url: result.fulfillment.messages[0]["imageUrl"]
                        }
                    }
                };
            }
        }
        return cb(payload);
    }
}
