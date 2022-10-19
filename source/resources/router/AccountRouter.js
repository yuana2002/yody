const express = require('express')
const router = express.Router()

const AccountController = require('../controllers/AccountController')



router.get('/register',AccountController.register)
router.post('/validation',AccountController.validation)

// router.get('/login',AccountController.login)



module.exports = router;

