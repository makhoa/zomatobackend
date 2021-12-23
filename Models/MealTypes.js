const mongoose = require ('mongoose');
const Schema = mongoose.Schema ;

const MealTypesSchema = new Schema ({
    name: {
        type:String,
        required: true
    },

    mealtype_id: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model ('MealTypes', MealTypesSchema, 'MealTypes');