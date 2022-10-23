
const SanPham = require('../models/SanPham')
const { mutipleMongooseToObject, mongooseToObject } = require('../../ulti/mongoose')


class SiteController{
    
    // [GET] /
    index(req, res, next){

        
        let SanPhamQuery = SanPham.find({})
    

        if(req.query.hasOwnProperty('_sort')){
            SanPhamQuery = SanPhamQuery.sort({
                [req.query.column]: req.query.type
            })
        }

        SanPhamQuery
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
