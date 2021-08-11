/*

Good introduction to require:
    https://www.freecodecamp.org/news/requiring-modules-in-node-js-everything-you-need-to-know-e7fbd119be8/

*/

// Import required packages.
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const extract = require('./extract');
const analyse = require('./analyse');
const { log } = require('webpack-cli/lib/utils/logger')

// Set up instance of Express app.
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

// Set path to static web content.
app.use(express.static('../../dist'));

app.get('/analyse', function(req, response) {
    // TODO: add call to extract and analyse module
    extract.extract('https://material.io/components/app-bars-bottom', function(text) {
        analyse.analyse(text, function(result) {
            response.send(result);
        }).then(undefined);
    });
});

// Set up and start our server.
const port = 3000;
const server = app.listen(port, listening);

function listening() {
    console.log(`Server is listening on port ${server.address().port}`);
}
