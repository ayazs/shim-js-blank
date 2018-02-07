// test/index.test.js
const test = require('ava');
const thisModule = require('../index');

test('Module is working', (t) => {
    t.is(thisModule(), true);
});
