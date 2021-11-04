const { request } = require("express");
const express = require("express");
const router = express.Router();
const Order = require('../models/orders')


router.get("/", async (req, res) => {
    try{
        const orders = await Order.find()
        res.json(orders)
    }catch (err){
        res.status(500).json({ message: err.message})
    }
});


router.post("/", async (req, res) => {
    //console.log(typeof JSON.stringify( req.body.products))
    //console.log(typeof req.body.products)
    const order = new Order({
        products: JSON.stringify( req.body.products),
        name: req.body.name,
        adress: req.body.adress,
        city: req.body.city,
        postalCode: req.body.postalCode,
        phoneNumber: req.body.phoneNumber
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