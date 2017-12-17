const test = require('tap').test;
const fs = require('fs');
const path = require('path');
const rootDir = process.cwd();

test('all routers are present', t => {
    t.ok(fs.existsSync(path.join(rootDir, 'server', 'routers')));
    t.ok(fs.existsSync(path.join(rootDir, 'server', 'routers', 'index.js')));
    t.ok(fs.existsSync(path.join(rootDir, 'server', 'routers', 'home-router.js')));
    t.ok(fs.existsSync(path.join(rootDir, 'server', 'routers', 'user-router.js')));
    t.ok(fs.existsSync(path.join(rootDir, 'server', 'routers', 'weather-router.js')));
    t.end()
});