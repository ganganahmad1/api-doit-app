const express = require('express');
const Route = express.Router();
const userController = require('../controllers/user');
const auth = require('../helpers/auth');

Route
    .all('/*')
    .get('/profile/:id', auth.authorization, auth.accessToken, userController.getProfile)
    .post('/login', userController.login)
    .post('/register', userController.register)
    .patch('/logout/:id', auth.authorization, auth.accessToken, userController.logout)
module.exports = Route;