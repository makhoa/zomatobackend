const Restaurant = require('../Models/RestaurantData')

exports.getRestaurantDataBylocation_id = (req, res) => {
    const {loc_id} = req.params;
    console.log (loc_id);
    Restaurant.find({location_id:loc_id})
        .then(response => {
            res.status(200).json({
                message: "Restaurants Fetched Succesfully ",
                RestaurantData: response
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
}


//filter method APIs
exports.FilterRestaurant = (req, res) => {
    let { Mealtype, Location, Cuisine, Low_cost, High_cost, Page, Sort,itemsPerPage } = req.body;

    Sort = Sort ? Sort : 1;
    Page = Page ? Page : 1;

    itemsPerPage = itemsPerPage ? itemsPerPage : 2;
    let startIndex = (Page * itemsPerPage) -itemsPerPage ;
    let endIdex = Page * itemsPerPage ;

    let filterObj = {};

    Mealtype&&(filterObj["mealtype_id"]=Mealtype);
    Location&&(filterObj["location_id"]=Location);
    Cuisine&&(filterObj["cuisine_id"]={$in: Cuisine });
    Low_cost&&High_cost&&(filterObj["min_price"]={ $gte: Low_cost, $lte: High_cost });
console.log(filterObj)
    Restaurant.find(filterObj).sort({ min_price: Sort })
        .then(response => {

            // Pagination Logic
            const FilteredResponse = response.slice (startIndex, endIdex )

            res.status(200).json({
                message: "Restaurants Fetched Succesfully, Filtered by Minprice",
                RestaurantData: FilteredResponse
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
}



exports.getRestaurantDataByRes_Id = (req, res) =>{
    const {restaurantId} = req.params;
    console.log(restaurantId);
    Restaurant.findById({_id:restaurantId})
    .then(response => {
        res.status(200).json({
            message: "Restaurant by restaurant id (inbuild findbyId in mongo) Fetched Succesfully",
            RestaurantData: response
        })
    })
    .catch(err => {
        res.status(500).json({
            error: err
        })
    })
}
/*
exports.getrestaurantById = (req ,res)=>{ 
    const Restid = req.params.id; 
    Restaurant.find({ _id: Restid })
    .then(result => { res.status(200).json({ message : `here is your Restaurant ${Restid}`, restaurant : result }); })
    .catch(error => { res.status(500).json( { message: "error in Database", error:error } ); });}   error test*/ 