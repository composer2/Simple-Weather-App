const test = require('tap').test;
const fs = require('fs');
const path = require('path');
const rootDir = process.cwd();

test('all data is present', t => {
    t.ok(fs.existsSync(path.join(rootDir, 'server', 'data')));
    t.ok(fs.existsSync(path.join(rootDir, 'server', 'data', 'openWeatherData.js')));
    t.ok(fs.existsSync(path.join(rootDir, 'server', 'data', 'database')));
    t.ok(fs.existsSync(path.join(rootDir, 'server', 'data', 'database', 'models')));
    t.ok(fs.existsSync(path.join(rootDir, 'server', 'data', 'database', 'models', 'index.js')));
    t.ok(fs.existsSync(path.join(rootDir, 'server', 'data', 'database', 'models', 'user-model.js')));
    t.ok(fs.existsSync(path.join(rootDir, 'server', 'data', 'database', 'models', 'weather-model.js')));
    t.end()
});