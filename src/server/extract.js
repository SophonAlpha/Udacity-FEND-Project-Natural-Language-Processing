const { convert } = require('html-to-text');

function extract(url, callback) {

    const urlObj = new URL(url);

    // Load the right library based on the protocol in the URL.
    let proto = '';
    if (urlObj.protocol === 'https:') {
        proto = require('https');
    }
    if (urlObj.protocol === 'http:') {
        proto = require('http');
    }

    const options = {
        host: urlObj.host,
        path: urlObj.pathname,
    };
    let data = '';
    const request = proto.request(options, function (response) {
        // Retrieve HTML data.
        response.on('data', function (chunk) {
            data += chunk;
        });
        response.on('end', function () {
            // Return text extracted from HTML.
            const text = convert(data);
            callback(text);
        })
    });
    request.on('error', function(e) {
        console.log(e.message);
    });
    request.end();

}

module.exports = {
    extract
}
