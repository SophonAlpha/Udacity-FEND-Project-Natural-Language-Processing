const axios = require('axios');
const { convert } = require('html-to-text');

function extract(url, callback) {
    axios.get(url)
      .then(response => {
          const text = convert(response.data);
          callback(text);
      })
      .catch(error => {
          console.error(error);
      });
}

module.exports = {
    extract
}
