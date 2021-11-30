const express = require("express");
const router = express.Router();
const Product = require("../models/product");


router.get("/", paginatedResults(Product), (req, res) => {
  res.json(res.paginatedResults)
});

router.get("/all", async (req, res) => {
  try{
      const products = await Product.find()
      res.json(products)
  }catch (err){
      res.status(500).json({ message: err.message})
  }
});

router.get("/:id", getProduct, (req, res) => {
  res.json(res.product);
});

//Dodavanje (ne koristi se)
router.post("/", async (req, res) => {
  const product = new Product({
    type: req.body.type,
    image: req.body.image,
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    popular: req.body.popular
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Brisanje (ne koristi se)
router.delete("/:id", getProduct, async (req, res) => {
  try {
    await res.product.remove();
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getProduct(req, res, next) {
  let product;
  try {
    product = await Product.findById(req.params.id);
    if (product == null) {
      return res.status(404).json({ message: "Cannot find product" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.product = product;
  next();
}

function paginatedResults(model) {
  return async (req, res, next) => {
    const type = req.query.type;
    const sort = req.query.sort;
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)
    var argument = {}
    var sortType = {dateAdded: 'asc'}

    const startIndex = (page - 1) * limit

    const results = {}

    if(type != undefined){
      argument = {type: type}
    }
    if(sort == "popular"){
      argument = {popular: true}
    }
    if(sort == "latest"){
      sortType = {dateAdded: 'desc'}
    }

    const maxPages = await model.countDocuments(argument).exec() / limit
    results.maxPages = Math.ceil(maxPages)
    
    try {
      results.results = await model.find(argument).sort(sortType).limit(limit).skip(startIndex).exec()
      res.paginatedResults = results
      next()
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  }
}

module.exports = router;
