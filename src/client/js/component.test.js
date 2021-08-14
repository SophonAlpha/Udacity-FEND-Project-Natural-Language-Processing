import fetchMock from 'jest-fetch-mock';
const path = require('path');
const fs = require('fs');

fetchMock.enableMocks();

window.document.body.innerHTML = fs.readFileSync(
  path.resolve(__dirname, '../../../dist/index.html'));
const component = require('./component.js');
import * as testData from './component.testData';

beforeEach(() => {
  fetch.mockClear();
});

test('invalid URL submitted', () => {
  window.document.getElementById('url-field').value = testData.invalidURL;
  component.formSubmit();
  expect(
    window.document.getElementById('error').innerHTML).toBe( 'Please enter a valid URL.'
  );
})

test('valid URL submitted', () => {
  fetch
    .once(JSON.stringify({'text': testData.articleText}))
    .once(JSON.stringify(testData.articleAnalysisJSON));
  window.document.getElementById('url-field').value = testData.validURL;
  return component.formSubmit()
    .then(() => {
      const textAreaValue = window.document.getElementById('text-area').value
      expect(textAreaValue).toContain(testData.articleText)
    });
})

