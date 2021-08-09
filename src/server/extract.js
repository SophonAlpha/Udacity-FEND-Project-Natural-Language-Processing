const { convert } = require('html-to-text');
const fetch = require('node-fetch');

// MeaningCloud API
const apiUrl = 'https://api.meaningcloud.com/sentiment-2.1';
const apiKey = '82d9a8fb1179af21471d1219ae1e1bbb';

function extract(url) {

    const urlObj = new URL(url);

    // Load the right library based on the protocol in the URL.
    let proto = null;
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
        response.on('end', async function() {
            // Extract text from HTML and analyse.
            try {
                const result = await analyse(convert(data));
                console.log(result);
            } catch (error) {
                console.log(error);
            }
        });
    });
    request.on('error', function(e) {
        console.log(e.message);
    });
    request.end();
}

async function analyse(text) {

    const params = {
        'key': apiKey,
        'txt': text,
        'lang': 'en',
    };

    try {
        const fetchResults = await fetch(apiUrl, {
            method: 'POST',
            body: JSON.stringify(params),
            headers: {'Content-Type': 'application/json'},
        });
        try {
            const data = await fetchResults.json();
            return(data);
        } catch (error) {
            console.log(error);
        }
    } catch (error) {
        console.log(error);
    }
}

extract('https://edition.cnn.com/2021/08/07/asia/pakistan-noor-mukadam-murder-intl-hnk-dst/index.html');
