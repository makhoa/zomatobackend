const mongoose = require ('mongoose');
const Schema = mongoose.Schema ;

const RestaurantDataSchema = new Schema ({
    name: {
        type:String,
        required:true
    },

    location_id: {
        type:Number,
        required:true
    },
    
    mealtype_id: {
        type:Number,
        required:true
    },
    cuisine_id: {
        type:Number,
        required:true
    },
    min_price: {
        type:Number,
        required:true
    },
    restaurantId: {
        type:String,
        required:true
    },

    _id:{
        type:Schema.ObjectId,
        required:true,
    }


})

module.exports = mongoose.model ('RestaurantData', RestaurantDataSchema, 'RestaurantData');