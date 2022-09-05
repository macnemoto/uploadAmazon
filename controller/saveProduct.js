require("../db/connection");

const Product = require("../model/product");


async function main() {

const product = new Product({
  image:"https://cdn-products.eneba.com/resized-products/XSGva9c_350x200_1x-0.jpg",
  title: "Fallout new vegas",
  description: "vendo code del juegos en digital",
  price: 30,
});

const productoSaved = await product.save();
return productoSaved
}
main()
 .then((productoSaved) => console.log(productoSaved))
 .catch(err => console.log(err))