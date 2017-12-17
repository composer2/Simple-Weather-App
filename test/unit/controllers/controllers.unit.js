const test = require('tap').test;
const fs = require('fs');
const path = require('path');
const rootDir = process.cwd();

test('all controllers is present', t => {
    t.ok(fs.existsSync(path.join(rootDir, 'server', 'controllers')));
    t.ok(fs.existsSync(path.join(rootDir, 'server', 'controllers', 'home-controller.js')));
    t.ok(fs.existsSync(path.join(rootDir, 'server', 'controllers', 'index.js')));
    t.ok(fs.existsSync(path.join(rootDir, 'server', 'controllers', 'user-controller.js')));
    t.ok(fs.existsSync(path.join(rootDir, 'server', 'controllers', 'weather-controller.js')));
    t.end()
});