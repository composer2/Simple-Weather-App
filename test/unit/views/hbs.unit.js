const test = require('tap').test;
const fs = require('fs');
const path = require('path');
const rootDir = process.cwd();

test('all views are present', t => {
    t.ok(fs.existsSync(path.join(rootDir, 'server', 'views')));
    t.ok(fs.existsSync(path.join(rootDir, 'server', 'views', 'contacts-page.hbs')));
    t.ok(fs.existsSync(path.join(rootDir, 'server', 'views', 'getalldata-page.hbs')));
    t.ok(fs.existsSync(path.join(rootDir, 'server', 'views', 'home-page.hbs')));
    t.ok(fs.existsSync(path.join(rootDir, 'server', 'views', 'login-page.hbs')));
    t.ok(fs.existsSync(path.join(rootDir, 'server', 'views', 'register-page.hbs')));
    t.ok(fs.existsSync(path.join(rootDir, 'server', 'views', 'weather-page.hbs')));
    t.ok(fs.existsSync(path.join(rootDir, 'server', 'views', 'layouts')));
    t.ok(fs.existsSync(path.join(rootDir, 'server', 'views', 'layouts', 'layout.hbs')));
    t.end()
});