
const MealTypes = require ('../Models/MealTypes');


exports.getMealTypes = (req, res) => {
    
    MealTypes.find ()
        .then ( response => {
            res.status (200).json ({
                message: "MealTypes Fetched successfully",
                MealTypes : response 
            })
        })

        .catch ( err => {
            res.status (500).json ({
                error: err 
            })
        })
    

}