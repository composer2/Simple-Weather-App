const test = require('tap').test;
const fs = require('fs');
const path = require('path');
const rootDir = process.cwd();


test('all root files are present', t => {
    t.ok(fs.existsSync(path.join(rootDir, 'app.js')));
    t.ok(fs.existsSync(path.join(rootDir, 'package.json')));
    t.ok(fs.existsSync(path.join(rootDir, 'README.md')));
    t.ok(fs.existsSync(path.join(rootDir, 'jsconfig.json')));
    t.ok(fs.existsSync(path.join(rootDir, 'package-lock.json')));
    t.ok(fs.existsSync(path.join(rootDir, 'requirements.txt')));
    t.end()
});

test('all folders are present', t => {
    t.ok(fs.existsSync(path.join(rootDir, 'public')));
    t.ok(fs.existsSync(path.join(rootDir, 'server')));
    t.ok(fs.existsSync(path.join(rootDir, 'test')));
    t.end()
});