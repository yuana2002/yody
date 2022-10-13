
const sanphams = require('../models/SanPham')
const { mutipleMongooseToObject, mongooseToObject } = require('../../ulti/mongoose')


class MeController{
    
    // [GET] /me/store/list
    storeList(req, res,next){
        sanphams.find({})
            .then(sanphams => res.render('me/store_list',{
                sanphams: mutipleMongooseToObject(sanphams)
            }))
            .catch(next)
        
    }
}


module.exports = new MeController()
