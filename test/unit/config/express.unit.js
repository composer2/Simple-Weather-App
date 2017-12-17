const test = require('tap').test;
const fs = require('fs');
const path = require('path');
const root = process.cwd();
const expressJs = require('../../../server/config/express.js');
const expressJsPath = path.join(root, 'server', 'config', 'express.js')


test('Express file exist', t => {
    const stat = fs.statSync(expressJsPath)

    t.ok(expressJs)
    t.ok(stat.size)
    t.ok(fs.existsSync(expressJsPath))

    t.end()
});

test('App is a function and works correctly', t => {
    t.equal(typeof expressJs, 'function')

    t.doesNotThrow((function() {
        expressJs()
    }, 'the app function works fine'))

    t.end()
});

test('App function throws an error', t => {
    const dummy = {};

    t.throws((function() {
        expressJs(dummy)
    }, 'the app function throws an err'))

    t.end()
});