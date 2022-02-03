require('dotenv').config()
const express = require("express");
const router = express.Router();
const Order = require('../models/orders')
const client = require('@sendgrid/mail')
client.setApiKey(process.env.SENDGRID_API_KEY)


router.get("/", async (req, res) => {
    try{
        const orders = await Order.find()
        res.json(orders)
    }catch (err){
        res.status(500).json({ message: err.message})
    }
});

router.get("/user", async (req, res) => {
    try{
        const orders = await Order.find({username: req.query.username})
        res.json(orders)
    }catch (err){
        res.status(500).json({ message: err.message})
    }
});

router.post("/", async (req, res) => {
    const order = new Order({
        products: req.body.products,
        name: req.body.name,
        email: req.body.email,
        adress: req.body.adress,
        city: req.body.city,
        postalCode: req.body.postalCode,
        phoneNumber: req.body.phoneNumber,
        username: req.body.username,
        totalSum: req.body.totalSum,
    })

    var templateData = []
    for(product in req.body.products){
        templateData.push(req.body.products[product].title+", ")
    }

    
    const msg = {
        to: req.body.email,
        from: 'webshop@zavrsnirad.xyz',
        subject: 'Potvrda narudžbe',
        templateId: 'd-b13b51739fc24aab99dad0be9ad8896a',
        dynamicTemplateData: {
            name: req.body.name,
            items: templateData,
        }
      }
    
    client
        .send(msg)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
    })

    try{
        const newOrder = await order.save()
        res.status(201).json(newOrder)
    }catch (err){
        res.status(400).json({ message: err.message})
    }
});

router.delete('/:id', getOrders, async (req,res) => {
    try{
        await res.order.remove()
        res.json({ message: "Order deleted"})
    }catch (err){
        res.status(500).json({ message: err.message})
    }
})


async function getOrders(req, res, next){
    let order
    try{
        order = await Order.findById(req.params.id)
        if(order == null){
            return res.status(404).json({ message: 'Cannot find order' })
        }
    }catch (err){
        return res.status(500).json({ message: err.message })
    }
    res.order = order
    next()
}



module.exports = router;