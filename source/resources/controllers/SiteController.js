
const SanPham = require('../models/SanPham')
const { mutipleMongooseToObject, mongooseToObject } = require('../../ulti/mongoose')


class SiteController{
    
    // [GET] /
    index(req, res, next){
    
        SanPham.find({})
            .then(SanPham => {
                res.render('home',{SanPham: mutipleMongooseToObject(SanPham)})
            })
            .catch(next)   
    }

    // [GET] /search
    search(req, res){
        res.render('Search')
    }
}


module.exports = new SiteController
