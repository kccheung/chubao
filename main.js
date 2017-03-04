/// <reference path="node.d.ts" />
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("util");
var Bot = (function () {
    function Bot(args) {
        this.args = args;
    }
    Bot.prototype.execute = function (cb) {
        var args = this.args;
        var text = args.text;
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
        }
        else {
            throw "Missing \"text\" property.";
        }
    };
    return Bot;
}());
exports.Bot = Bot;
