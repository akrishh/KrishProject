const express = require('express');
// import index from './index.js';
// const index = require('./index.js');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

app.listen(port);

// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname), '/index.html');
//     // res.sendFile(path.join(__dirname), '/index.html');
// })

app.use(express.static(path.join(__dirname, 'public')));

console.log('Server is listening in ', port);