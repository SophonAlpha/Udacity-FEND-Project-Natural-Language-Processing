// Import required packages.
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { extract } = require('./extract');
const { analyse } = require('./analyse');

// Set up instance of Express app.
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

// Set path to static web content.
app.use(express.static('dist'));

app.post('/analyse', function(req, response) {
    // TODO: add call to extract and analyse module
    extract('https://edition.cnn.com/2021/08/07/asia/pakistan-noor-mukadam-murder-intl-hnk-dst/index.html');
    response.send();
})

// Set up and start our server.
const port = 3000;
const server = app.listen(port, listening);

function listening() {
    console.log(`Server is listening on port ${server.address().port}`);
}
