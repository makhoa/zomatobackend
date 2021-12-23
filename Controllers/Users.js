
const user = require ('../Models/Users');


exports.userSignUp = (req, res) => {

    const {UserEmail, Password, FirstName, LastName } = req.body;
    const userobj = new user ({
        UserEmail ,
        Password ,
        FirstName : FirstName ? FirstName : undefined,
        LastName : LastName ? LastName : undefined
    });
    userobj.save ()
        .then ( response => {
            res.status (200).json ({
                message: "User Registration successful",
                user : response 
            })
        })

        .catch ( err => {
            res.status (500).json ({
                error: err 
            })
        })
    

}

exports.userLogin = (req, res) => {
    const { UserName, Password } = req.body;

    user.find({ UserName, Password })
        .then(response => {
            if (response.length > 0) {
                res.status(200).json({
                    message: "User Logged_ In Succesfully",
                    isAuthenticated: true,
                    user: response
                })
            }
            else {
                res.status(200).json({
                    message: "Wrong UserName or Password",
                    isAuthenticated: false,
                    user: response
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
}