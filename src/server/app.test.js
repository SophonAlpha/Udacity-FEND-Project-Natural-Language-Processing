import * as testData from '../client/js/component.testData'

const request = require('supertest');
const path = require('path');
const app = require(path.resolve(__dirname, 'app'));
const { response } = require('express')

test('GET /', () => {
  return request(app)
    .get('/')
    .then(response => {
      expect(response.statusCode).toBe(200);
      expect(response.text).toContain('<title>Natural Language Processing</title>');
    });
});

test('GET /extract', () => {
  return request(app)
    .get('/extract')
    .query({ url: 'https://www.theonion.com/toddler-cites-freedom-of-choice-in-refusal-to-use-potty-1847466497' })
    .then(response => {
      expect(response.statusCode).toBe(200);
      expect(response.text).toContain('test dummy data');
    });
});
