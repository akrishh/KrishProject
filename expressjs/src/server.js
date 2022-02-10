const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const conf = require('./conf');
const app = express();

const crypto = require('crypto');
const nonce = crypto.randomBytes(16).toString('base64');

class Server {
    constructor(port) {
        this.port = port;
        console.log('inside server....');
        app.set('port', this.port);
        console.log('app port initialized....', this.port);
        app.use(cookieParser());
        app.use(function (req, res, next) {
            var cookie = req.cookies.noncecookie;
            if (cookie === undefined) {
                res.cookie('noncecookie', nonce, {
                    maxAge: 900000,
                    httpOnly: true
                });
                console.log(' cookie is created successfully ');
            } else {
                console.log('cookie exists', cookie);
            }
            next();
        });
        app.use(express.static(path.join(__dirname, 'public')));
        return app;
    }
}

module.exports = new Server(conf.getPort());