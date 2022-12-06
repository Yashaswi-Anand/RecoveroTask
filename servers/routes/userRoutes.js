const express = require('express');
const { signup, signin } = require('../conroller/userController');
const route = express.Router();

// user create
route.post('/signup', signup)
// sign in user
route.post('/signin', signin)

module.exports = route