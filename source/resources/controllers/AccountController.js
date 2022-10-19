
const accounts = require('../models/account')
const { mutipleMongooseToObject, mongooseToObject } = require('../../ulti/mongoose');



class AccountController{
    
    // [GET] /Account/register
    register(req, res,next){
        res.render('account/register');
        
    }

    validation(req, res, next){
        const account = new accounts(req.body);
        account.save()
            .then(() => res.redirect ('account/register'))
            .catch(error => {
                ('Error')
            })
    }
}


module.exports = new AccountController()
