const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');

let app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));

app.use(cookieParser());

app.use(cors());

app.use(express.static(path.join(__dirname, '../client')));

let server = http.createServer(app);
server.listen(3000);

module.exports = app;
