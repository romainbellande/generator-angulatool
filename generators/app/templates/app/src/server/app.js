'use strict';

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const livereload = require('connect-livereload');
const mongoose = require('mongoose');

const config = require('./config');

mongoose.connect(config.database, err => {
  if (err) {
    console.warn('db: connection error', err);
  } else {
    console.warn('db: connection successfull');
  }
});

let app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));

app.use(cookieParser());

app.use(cors());

app.use(livereload());

app.use(express.static(path.join(__dirname, '../client')));

module.exports = app;
