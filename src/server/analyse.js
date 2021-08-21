const fetch = require('node-fetch')
const dotenv = require('dotenv')
const path = require('path')

dotenv.config({ path: path.resolve(__dirname, '.env') })

const apiUrl = process.env.apiUrl
const apiKey = process.env.apiKey

if (typeof apiUrl === 'undefined' || typeof apiKey === 'undefined') {
  console.error('File ./src/server/.env not found! The file contains the URL and API key for the ' +
    'MeaningCloud sentiment analysis service. See ./src/server/.env_tmpl for a template.');
}

async function analyse (text, callback) {

  const params = {
    key: apiKey,
    txt: text,
    lang: 'en',
  }

  try {
    const fetchResults = await fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(params),
      headers: { 'Content-Type': 'application/json' },
    })
    try {
      const data = await fetchResults.json()
      callback(data)
    } catch (error) {
      console.log(error)
    }
  } catch (error) {
    console.log(fetchResults)
    console.log(error)
  }
}

module.exports = {
  analyse
}
