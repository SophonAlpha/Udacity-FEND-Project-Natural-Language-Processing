const { convert } = require('html-to-text');

const newsURL = 'https://edition.cnn.com/2021/08/07/asia/pakistan-noor-mukadam-murder-intl-hnk-dst/index.html';
const urlObj = new URL(newsURL);

let proto = null;

console.log('urlObj.protocol = ' + urlObj.protocol);

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
    response.on('data', function (chunk) {
        data += chunk;
    });
    response.on('end', function () {
        analyse(convert(data));
    });
});

request.on('error', function (e) {
    console.log(e.message);
});

request.end();


const fetch = require('node-fetch');
const FormData = require('form-data');

// const formData = new FormData();
// formData.append('key', '82d9a8fb1179af21471d1219ae1e1bbb');
// formData.append('txt', data);
// formData.append('lang', 'en');

function analyse(data) {

    const formData = {
        'key': '82d9a8fb1179af21471d1219ae1e1bbb',
        'txt': 'Here you have simple examples of requests to the Topics Extraction API. You can use them to test a sample request and get an example response in a quick and easy way, right in your favorite programming language.',
        'lang': 'en',
    };

    console.log(formData);

    const apiUrl = 'https://api.meaningcloud.com/sentiment-2.1';
    const requestOptions = {
        method: 'POST',
        body: formData,
        redirect: 'follow',
    };

    fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json'},
    })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));


    /*

        .then(function(response) {
            return({
                status: response.status,
                body: response.json(),
            })
        })
        .then(function({status, body}) {
            console.log('status = ' + status);
            console.log('body =' + body);
        })
        .catch(function(error) {
            console.log('error', error);
        });

     */
}