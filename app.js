'use strict';

const express = require('express');
const app = express();
const routes = require('./routes'); //adding /index is optional because if you target a folder it defaults to index

app.use(routes);

module.exports = app;