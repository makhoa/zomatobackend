const mongoose = require ('mongoose');
const Schema = mongoose.Schema ;

const OrderSchema = new Schema ({


    placedBy: {
        type:String,
        required: true
    },

    placedByUserId: {
        type:Number,
      //  required: true
    
    },

    Amount: {
        type:Number,
        //required: true
    }

})

module.exports = mongoose.model ('Orders', OrderSchema, 'Orders');