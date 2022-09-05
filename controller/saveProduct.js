const controller = {}
require("../db/connection");
const Product = require("../model/product");

controller.guardar =  async (req, res) => {
  

        const product = new Product({
            image: req.file.location,
            title: req.body.title,
            description: req.body.description,
            price: req.body.price
        });
        
        const productoSaved = await product.save()
        console.log(req.file.location)
        console.log(req.body.title)
        console.log(req.body.description)
        console.log(req.body.price)
        return res.json({productoSaved});
  };


module.exports = controller;

