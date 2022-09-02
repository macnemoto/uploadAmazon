const express = require('express')
const app = express()
const port = 3000

//Escuchando
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



app.use('/', require('./routes/routesUpload'));

