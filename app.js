/* globals require */

'use strict';

const config = require('./server/config'),
    app = require('./server/config/express');

// connecting to mongoDb and routes
require('./server/config/database')(config);
require('./server/routers')(app);

app.listen(config.port, () => console.log('Server now up and running at http://localhost:3000'));