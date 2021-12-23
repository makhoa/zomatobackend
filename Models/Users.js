const mongoose = require ('mongoose');
const Schema = mongoose.Schema ;

const UserSchema = new Schema ({

    UserEmail: {
        type:String,
        required: true
    },

   Password: {
        type:String,
        required: true
    },

    FirstName: {
        type:String
        
    },

    LastName: {
        type:String,
    
    },
})

module.exports = mongoose.model ('Users', UserSchema, 'Users');