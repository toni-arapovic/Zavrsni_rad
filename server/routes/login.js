const express = require("express");
const login = require("../models/login");
const router = express.Router();
const bcrypt = require("bcrypt")
const Login = require('../models/login')
const Order = require('../models/orders')

router.post("/login", async (req, res) => {
    
    const user = await Login.findOne({username: req.body.username})


    try {
        if (user == null){
            res.status(201).json({ message: "User does not exist" });
        }
        if(await bcrypt.compare(req.body.password, user.password)) {
            user.orders = await Order.find({username: req.body.username})
            console.log(user)
            res.status(201).json(user)
        }else {
            res.status(201).json({ message: "Wrong Password" });
        }
      } catch(err) {
        res.status(400).json({ message: err.message });
      }
});

router.post("/register", async (req, res) => {
    const user = new Login({
        username: req.body.username,
        password: await bcrypt.hash(req.body.password, 10),
        name: req.body.name,
        email: req.body.email,
        adress: req.body.adress,
        city: req.body.city,
        postalCode: req.body.postalCode,
        phoneNumber: req.body.phoneNumber
    })

    const alreadyExists = await Login.findOne({username: req.body.username})
    console.log(alreadyExists)

    
   try {
        if(alreadyExists == null){
            const newLogin = await user.save();
            res.status(201).json({ message: "Registration successful" });
        }else{
             res.status(201).json({ message: "Username already exists" });
        }
    } catch (err) {
         res.status(400).json({ message: err.message });
    }
    
});



module.exports = router;