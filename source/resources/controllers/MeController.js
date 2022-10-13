
const SanPham = require('../models/SanPham')
const { mutipleMongooseToObject, mongooseToObject } = require('../../ulti/mongoose')


class MeController{
    
    // [GET] /me/store/list
    storeList(req, res){
        res.render('me/store_list')
    }
}


module.exports = new MeController()
