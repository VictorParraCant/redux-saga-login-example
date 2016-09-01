// Express imports
const express = require("express");
const loginValidation = require("../validations/login");

let router = express.Router();

router.post("/", (req, res) => {
    // Validations
    const { errors, isValid } = loginValidation(req.body);
    if(!isValid){
        res.status(200).json(errors);
    }
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
