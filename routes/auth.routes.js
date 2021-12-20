const express = require('express')
const registerController = require('./../controllers/register.controller')


// bringing in an express router
const router = express.Router()

router.post('/register', registerController.register)

module.exports = router