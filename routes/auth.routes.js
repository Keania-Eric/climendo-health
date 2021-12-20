const express = require('express')
const registerController = require('./../controllers/register.controller')
const loginController = require('./../controllers/login.controller')

// bringing in an express router
const router = express.Router()

router.post('/login', loginController.login)
router.post('/register', registerController.register)


module.exports = router