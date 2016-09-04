const express = require("express");
const User = require("../models/user");
const bcrypt = require("bcryptjs");

let router = express.Router();
const signupValidation = require("../validations/signup");

router.get("/usuarios", (req, res) => {
    User.fetchAll().then(users => res.status(200).json({
        users: users
    }));
});

router.post("/", (req, res) => {
    // Validations
    const { errors, isValid } = signupValidation(req.body);
    if(isValid){
        const { email, password } = req.body;
        const password_digest = bcrypt.hashSync(password, 10);

        // Guardamos los datos.
        User.forge({email, password_digest}, { hasTimestamps: true })
        .save()
        .then(user => res.status(200).json({
            user: {
                "name": "admin",
                "email": email
            }
        }))
        .catch(err => res.status(500));
    } else {
        res.status(200).json(errors);
    }

});

module.exports = router;
