// const sanpham = require("../resources/models/SanPham")

module.exports = {
    mutipleMongooseToObject: function(mongooses){
        return mongooses.map(mongoose => mongoose.toObject())
    },
    mongooseToObject: function (mongoose){
        return mongoose ? mongoose.toObject(): mongoose
    }
}
