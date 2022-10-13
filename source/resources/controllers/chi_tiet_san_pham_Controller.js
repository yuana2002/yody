
const sanphams = require('../models/SanPham')
const { mutipleMongooseToObject, mongooseToObject } = require('../../ulti/mongoose');



class chi_tiet_san_pham_Controller{
    

    // [GET] /chi_tiet_san_pham/slug
    show(req, res, next){
        sanphams.findOne({slug: req.params.slug})
            .then(sanphams => {
                res.render('chi_tiet_san_pham/show', {sanphams: mongooseToObject(sanphams)})
            })
            .catch(next);
    }


    // [GET] /chi_tiet_san_pham/ADD
    add(req, res, next){
        res.render('chi_tiet_san_pham/add');
    }

    // [POST] /chi_tiet_san_pham/store
    store(req, res, next){
        const sanpham = new sanphams(req.body);
        sanpham.save()
            .then(() => res.redirect ('/'))
            .catch(error => {
                ('Error')
            })
    }

    // [GET] /chi_tiet_san_pham/edit
    edit(req, res, next){
        sanphams.findById(req.params.id)
            .then(sanpham => res.render('chi_tiet_san_pham/edit',{
                sanpham: mongooseToObject(sanpham)
            }))
            .catch(next)
    }  
    
    update(req,res, next){
        sanphams.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/me/store/list'))
            .catch(next)
    }
}


module.exports = new chi_tiet_san_pham_Controller
