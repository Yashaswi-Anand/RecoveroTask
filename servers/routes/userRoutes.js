const express = require('express');
const { signup, signin, allUser } = require('../conroller/userController');
const route = express.Router();

// user create
route.post('/signup', signup)
// sign in user
route.post('/signin', signin)
// get all user
route.get('/allUsers', allUser)

module.exports = route