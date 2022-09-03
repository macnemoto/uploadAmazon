const express = require("express");
const app = express();
const port = 3000;

//server escuchado puerto 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use("/", require("./routes/routesUpload"));
