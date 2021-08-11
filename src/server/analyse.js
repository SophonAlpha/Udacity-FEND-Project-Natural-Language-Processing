const fetch = require('node-fetch');
const dotenv = require('dotenv');

dotenv.config();

apiUrl = process.env.apiUrl;
apiKey = process.env.apiKey;

async function analyse(text, callback) {

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
            callback(data);
        } catch (error) {
            console.log(error);
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    analyse
}
