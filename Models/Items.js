const mongoose = require ('mongoose');
const Schema = mongoose.Schema ;

const ItemsSchema = new Schema ({
 
    restaurantId: {
        type:String,
        required: true
    },
    name: {
        type:String,
        required:true
    }


})

module.exports = mongoose.model ('MenuItems', ItemsSchema, 'Items');