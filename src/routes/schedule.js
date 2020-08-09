const express = require('express');
const Route = express.Router();
const scheduleController = require('../controllers/schedule');

Route
    .all('/*')
    .post('/insert', scheduleController.insert)

module.exports = Route;