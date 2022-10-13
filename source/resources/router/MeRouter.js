const express = require('express')
const router = express.Router()

const MeController = require('../controllers/MeController')

    router.get('/store/list',MeController.storeList)

module.exports = router;