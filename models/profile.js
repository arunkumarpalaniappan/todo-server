'use strict';
const Promise = require("bluebird");
exports.getInfo = function () {
    return new Promise((resolve) => {
        resolve({name: this.Item.name.S, email: this.Item.email.S})
    });
};
