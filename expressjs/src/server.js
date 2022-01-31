const express = require('express');
const path = require('path');
const conf = require('./conf');
const app = express();

class Server {
    constructor(port) {
        this.port = port;
        console.log('inside server....');
        app.set('port', this.port);
        console.log('app port initialized....', this.port);
        app.use(express.static(path.join(__dirname, 'public')));
        return app;
    }
}

module.exports = new Server(conf.getPort());