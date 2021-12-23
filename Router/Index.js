//this file will be managing all the specific requests from the server 

const express = require ('express');
 

const LocationsController = require ('../Controllers/Locations');
const MealTypesController = require ('../Controllers/Mealtypes');
const RestaurantDataController = require ('../Controllers/RestaurantData');
const UsersController = require ('../Controllers/Users');
const ItemsController = require ('../Controllers/Items');
const OrdersController = require ('../Controllers/Orders');
const paymentController = require ('../Controllers/Payment');
//assigning router the functionality of distributing  the incoming requests to specified APIs...>> from express package
var route = express.Router();

//the get method here is going to be used to get specified apis from the client 
route.get('/Locations', LocationsController.getLocations);// specifies the api pathname
route.get('/MealTypes', MealTypesController.getMealTypes);
route.get('/RestaurantData/loc_id', RestaurantDataController.getRestaurantDataBylocation_id); 

//homepage and also in filter page
route.post ('/SignUp', UsersController.userSignUp);
route.post ('/Login', UsersController.userLogin);

//from the filter page
route.post ('/Filter', RestaurantDataController.FilterRestaurant);
route.get ('/RestaurantData/:restaurantId', RestaurantDataController.getRestaurantDataByRes_Id);
route.get ('/Items/:restaurantId', ItemsController.getMenuItemsByRes_Id);
route.get ('/Orders', OrdersController.getMenuItemsByRes_Id); 



//intergrating  the payment gateway for backkend logic (Paytm)
route.post ('/Payment', paymentController.payment);
route.post ('/Callback', paymentController.callback);
//route.get('/restaurant/:id', RestaurantDataController.getrestaurantById)   error test

module.exports = route;
//export every available path of API to app.js


