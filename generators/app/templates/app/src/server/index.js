const http = require('http');
const app = require('./app');

const entities = require('./entities/entities');

entities();

let server = http.createServer(app);
server.listen(3000);
