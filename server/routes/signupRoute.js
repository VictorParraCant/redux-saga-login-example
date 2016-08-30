// Express imports
const express = require("express");

let router = express.Router();

const validateBody = data => {

    let errors = {};

    // Simulate database query
    if( data.email !== "admin" ) { errors.email = "Incorrect Email"; }
    if( data.password !== "1234" ) { errors.password = "Incorrect Password"; }

    // Simple test validations
    if( !data.email || data.email.length < 2 ){ errors.email = "Email is required!"; }
    if( !data.password || data.password.length < 2 ){ errors.password = "Password is required!"; }

    return {
        errors: {"errors": errors},
        isValid: ( errors.email || errors.password) ? false : true
    };
};

router.post("/", (req, res) => {
    // Validations
    const { errors, isValid } = validateBody(req.body);
    if(!isValid){ res.status(200).json(errors); }
    else{
        res.status(200).json({
            user: {
                "name": "admin",
                "email": req.body.email,
            }
        });
    }

});

module.exports = router;
