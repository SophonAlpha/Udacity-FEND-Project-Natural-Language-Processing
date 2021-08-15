const fs = require('fs')
const path = require('path')
window.document.body.innerHTML = fs.readFileSync(
  path.resolve(__dirname, '../../../dist/index.html'));
const client = require('./client.js');

test('module correct imported', () => {
  expect((typeof client.component.formSubmit === 'function')).toBe( true);
})
