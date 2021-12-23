const mongoose = require ('mongoose');

const Schema = mongoose.Schema ;

const LocationsSchema = new Schema ({
    name: {
        type:String,
        required: true
    },

    location_id: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model ('Location', LocationsSchema, 'Locations'); //first argument is just a reference to what moy model is about