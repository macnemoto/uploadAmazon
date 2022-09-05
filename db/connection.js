// getting-started.js
require("dotenv").config({path: '../.env'});
const mongoose = require('mongoose');
const uri = process.env.DB;
const db = mongoose.connection;


try {
    main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(uri);

  
}

} catch (error) {
  
    // console.log('Error no se pudo conectar a la base de datos')
}



db.once('open', _ =>{
    console.log('Estamos conectados papus', uri)
})
  
 db.on('error', _ =>{
    console.log('Error no se pudo conectar a la base de datos')
})