const mongoose = require('mongoose');
async function connect(){
    try {
        await mongoose.connect('mongodb+srv://Hung:HuyHung90@sanphams.wvumejc.mongodb.net/?retryWrites=true&w=majority', {
                //mongodb+srv://Hung:HuyHung90@sanphams.wvumejc.mongodb.net/?retryWrites=true&w=majority
                //mongodb://localhost:27017/?readPreference=primary&directConnection=true&ssl=false (offline)
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
        });
        console.log('DataBase_Successfully')
    } catch (error) {
        console.log('DataBase_StopWorking' + ' ' + (error))
    }
}

module.exports = {  connect  }
