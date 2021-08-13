/*

Good introduction to require:
    https://www.freecodecamp.org/news/requiring-modules-in-node-js-everything-you-need-to-know-e7fbd119be8/

*/

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

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../../dist/index.html'));
})

app.get('/extract', function(req, response) {
    const url = req.query['url']
    console.log(url);
    extract.extract(url, function(text) {
        response.send(JSON.stringify({ text: text }));
    });
});

app.post('/analyse', function(req, response) {
    const text = req.body['text'];
    analyse.analyse(text, function (result) {
        response.send(JSON.stringify(result));
    }).then(undefined)
});

// Set up and start our server.
const port = 3000;
const server = app.listen(port, listening);

function listening() {
    console.log(`Server is listening on port ${server.address().port}`);
}
