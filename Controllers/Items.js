const MenuItems = require ('../Models/Items');


exports.getMenuItemsByRes_Id = (req, res) => {
    const {restaurantId} = req.params;
    console.log(restaurantId);
    MenuItems.find({restaurantId:restaurantId})    

        .then ( response => {
            res.status (200).json ({
                message: "Menu Items Retrieved successful using restaurant ID",
                MenuItems : response 
            })
        })

        .catch ( err => {
            res.status (500).json ({
                error: err 
            })
        })
    

}
