const chi_tiet_san_pham_Router = require('./Chi_tiet_san_pham_Router')
const MeRouter = require('./MeRouter')
const siteRouter = require('./SiteRouter')
const AccountRouter = require('./AccountRouter')

function routers(app){

    app.use('/chi_tiet_san_pham', chi_tiet_san_pham_Router)
    app.use('/me', MeRouter)
    app.use('/account', AccountRouter)

    app.use('/', siteRouter)

}

module.exports = routers;

