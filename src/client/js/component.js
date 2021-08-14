import fetch from 'node-fetch'

let inputTimeOutId
const inputTimeOut = 600

export function formSubmit () {
  const url = document.getElementById('url-field').value
  if (validUrl(url)) {
    return extract(url)
  } else {
    document.getElementById('error').innerHTML = 'Please enter a valid URL.';  // show error message
  }
}

export function validUrl(url) {
  try {
    const dummy = new URL(url);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

function extract(url) {
  const queryStr = {
    url: url
  }
  return fetch('/extract?' + new URLSearchParams(queryStr))
    .then(response => response.json())
    .then(text => {
      document.getElementById('text-area').value = text['text']
      textChanged()
    })
    .catch((err) => {
      console.error(err)
    })
}

// listen to changes in the textarea element
document.getElementById('text-area').addEventListener('input', function (event) {
  // The event is fired at every keystroke. To avoid flooding the server, we wait a
  // bit before calling the API.
  window.clearTimeout(inputTimeOutId)
  inputTimeOutId = setTimeout(textChanged, inputTimeOut)
})

// listen to changes in the URL input element
document.getElementById('url-field').addEventListener('input', function (event) {
  // The event is fired at every keystroke. To avoid flooding the server, we wait a
  // bit before calling the API.
  window.clearTimeout(inputTimeOutId)
  inputTimeOutId = setTimeout(urlTextChanged, inputTimeOut)
})

function textChanged () {
  clearData()
  toggleSpinner()  // show spinner
  const postData = {
    text: document.getElementById('text-area').value,
  }
  return fetch('/analyse', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData)
  })
    .then(response => response.json())
    .then(jsonData => {
      toggleSpinner()  // hide spinner
      displayData(jsonData)
    })
    .catch((err) => {
      console.error(err)
    })
}

function urlTextChanged() {
  document.getElementById('error').innerHTML = '';
}

function displayData(jsonData) {
  document.getElementById('analysis-model').innerHTML = jsonData['model'];
  document.getElementById('analysis-score-tag').innerHTML = scoreTagMap(jsonData['score_tag']);
  document.getElementById('analysis-agreement').innerHTML = jsonData['agreement'];
  document.getElementById('analysis-subjectivity').innerHTML = jsonData['subjectivity'];
  document.getElementById('analysis-confidence').innerHTML = jsonData['confidence'];
  document.getElementById('analysis-irony').innerHTML = jsonData['irony'];
}

function clearData() {
  document.getElementById('analysis-model').innerHTML = ' ';
  document.getElementById('analysis-score-tag').innerHTML = ' ';
  document.getElementById('analysis-agreement').innerHTML = ' ';
  document.getElementById('analysis-subjectivity').innerHTML = ' ';
  document.getElementById('analysis-confidence').innerHTML = ' ';
  document.getElementById('analysis-irony').innerHTML = ' ';
}

function toggleSpinner() {
  document.getElementById('spinner').classList.toggle('spinner__hidden');
}

function scoreTagMap(score) {
  const scoreMap = {
    'P+': 'strong positive',
    'P': 'positive',
    'NEU': 'neutral',
    'N': 'negative',
    'N+': 'strong negative',
    'NONE': 'without sentiment',
  }
  return scoreMap[score];
}
