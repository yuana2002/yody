const mongoose = require('mongoose');
async function connect(){
    try {
        await mongoose.connect('mongodb+srv://Hung:HuyHung90@sanphams.wvumejc.mongodb.net/?retryWrites=true&w=majority', {
                // await mongoose.connect('mongodb+srv://Hung:HuyHung90@sanphams.wvumejc.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('DataBase_Successfully')
    } catch (error) {
        console.log('DataBase_StopWorking' + error)
    }
}

module.exports = {  connect  }
