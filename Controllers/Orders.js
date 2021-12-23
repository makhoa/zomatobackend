
const Order = require ('../Models/Orders');


exports.getMenuItemsByRes_Id = (req, res) => {

    const { restaurantId } = req.params;
    Order.findById({ restaurantId  })    

        .then ( response => {
            res.status (200).json ({
                message: "Menu Items Retrieved successful",
                user : response 
            })
        })

        .catch ( err => {
            res.status (500).json ({
                error: err 
            })
        })
    

}
