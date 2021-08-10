const fetch = require('node-fetch');

// MeaningCloud API
const apiUrl = 'https://api.meaningcloud.com/sentiment-2.1';
const apiKey = '82d9a8fb1179af21471d1219ae1e1bbb';

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
