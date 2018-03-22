"use strict"
const Controller = require('./controller');

class View {
    static showData(data) {
        console.log(data);
    }

    static showErrorMessage(statusMessage) {
        console.log(statusMessage);
    }
}

module.exports = View;