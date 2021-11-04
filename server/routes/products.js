const express = require("express");
const router = express.Router();
const Product = require('../models/product')


router.get("/", async (req, res) => {
    try{
        const products = await Product.find()
        res.json(products)
    }catch (err){
        res.status(500).json({ message: err.message})
    }
});

//Dodavanje (ne koristi se)
router.post("/", async (req, res) => {
    const product = new Product({
        type: req.body.type,
        image: req.body.image,
        title: req.body.title,
        description: req.body.description,
        price: req.body.price
    })
    
    try{
        const newProduct = await product.save()
        res.status(201).json(newProduct)
    }catch (err){
        res.status(400).json({ message: err.message})
    }
});

//Brisanje (ne koristi se)
router.delete('/:id', getProduct, async (req,res) => {
    try{
        await res.product.remove()
        res.json({ message: "Product deleted"})
    }catch (err){
        res.status(500).json({ message: err.message})
    }
})


async function getProduct(req, res, next){
    let product
    try{
        product = await Product.findById(req.params.id)
        if(product == null){
            return res.status(404).json({ message: 'Cannot find product' })
        }
    }catch (err){
        return res.status(500).json({ message: err.message })
    }
    res.product = product
    next()
}

module.exports = router;