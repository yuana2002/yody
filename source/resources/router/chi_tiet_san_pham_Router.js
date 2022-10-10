const express = require('express')
const router = express.Router()

const chi_tiet_san_pham_Controller = require('../controllers/chi_tiet_san_pham_Controller')

    router.get('/add',chi_tiet_san_pham_Controller.add)
    router.post('/upload',chi_tiet_san_pham_Controller.upload)
        
    
    router.get('/:slug',chi_tiet_san_pham_Controller.show)

module.exports = router;