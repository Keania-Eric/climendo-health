const express = require('express')
const authMiddleware = require('./../middleware/auth.middleware')
const adminAuthMidleware = require('./../middleware/admin.middleware')
const userController = require('./../controllers/user.controller')
    // bringing in an express router
const router = express.Router()


router.put('/update/profile', authMiddleware.check, userController.updateProfile)
router.get('/', [authMiddleware.check, adminAuthMidleware.check], userController.users)
router.put('/update/:id', [authMiddleware.check, adminAuthMidleware.check], userController.updateUser)
module.exports = router