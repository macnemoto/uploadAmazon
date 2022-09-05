const {Schema, model} = require('mongoose');


const productSchema = new Schema({
  image: String,
  title: String,
  description: String,
  price:{
    type: Number,
    default: 0
  }
  });


module.exports = model('Product', productSchema)