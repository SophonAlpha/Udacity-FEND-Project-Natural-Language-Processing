// Import required packages.
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const extract = require('./extract');
const analyse = require('./analyse');
const { log } = require('webpack-cli/lib/utils/logger')

// Set up instance of Express app.
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

// Set path to static web content.
app.use(express.static('dist'));

app.get('/', function (request, response) {
    response.status(200).sendFile(path.join(__dirname, '../../dist/index.html'));
})

app.get('/extract', function(request, response) {
    const url = request.query['url']
    extract.extract(url, function(text) {
        response.status(200).send(JSON.stringify({ text: text }));
    });
});

app.post('/analyse', function(request, response) {
    const text = request.body['text'];
    analyse.analyse(text, function (result) {
        response.status(200).send(JSON.stringify(result));
    }).then(undefined)
});

module.exports = app;
