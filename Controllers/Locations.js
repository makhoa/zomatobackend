//const { response } = require('express');
const Locations = require('../Models/Locations');
//const locations = require ('../Models/Locations');

exports.getLocations = (req, res) => {
    Locations.find ()
        .then ( response => {
            res.status (200).json ({
                message: "Locations Fetched successfully",
                Locations : response 
            })
        })

        .catch ( err => {
            res.status (500).json ({
                error: err 
            })
        })
    

}