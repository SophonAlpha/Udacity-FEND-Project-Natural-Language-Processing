// This 'regenerator-runtime' import was added because of this error
//     "ReferenceError: regeneratorRuntime is not defined"
// Recommended solution: https://stackoverflow.com/questions/42535270/regeneratorruntime-is-not-defined-when-running-jest-test
import 'regenerator-runtime/runtime'

import fetchMock from 'jest-fetch-mock';
fetchMock.enableMocks();
const request = require('supertest');
const path = require('path');
const app = require(path.resolve(__dirname, 'app'));
import * as testData from './app.test.data';
const axios = require('axios');
jest.mock('axios');

beforeEach(() => {
  fetch.mockClear();
});

test('GET /', () => {
  return request(app)
    .get('/')
    .then(response => {
      expect(response.statusCode).toBe(200);
      expect(response.text).toContain('<title>Natural Language Processing</title>');
    });
});

test('GET /extract', () => {
  axios.get.mockResolvedValue(testData.testExtract);
  return request(app)
    .get('/extract')
    .query({ url: 'dummy' })
    .then(response => {
      expect(response.statusCode).toBe(200);
      expect(response.text).toContain(testData.testExtractExpected);
    });
});

test('GET /analyse', async () => {
  fetch.once(JSON.stringify(testData.testAnalyse));
  const response = await request(app)
    .post('/analyse')
    .send({ text: 'dummy' })
    .catch(err => done(err));
  expect(response.statusCode).toBe(200);
  expect(response.text).toContain(JSON.stringify(testData.testAnalyse));
});
