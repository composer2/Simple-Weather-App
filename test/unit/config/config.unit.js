const test = require('tap').test;
const fs = require('fs');
const path = require('path');
const rootDir = process.cwd();

test('all config files are present', t => {
    t.ok(fs.existsSync(path.join(rootDir, 'server', 'config')));
    t.ok(fs.existsSync(path.join(rootDir, 'server', 'config', 'database.js')));
    t.ok(fs.existsSync(path.join(rootDir, 'server', 'config', 'express.js')));
    t.ok(fs.existsSync(path.join(rootDir, 'server', 'config', 'index.js')));
    t.end()
});