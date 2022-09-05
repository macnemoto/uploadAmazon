const express = require("express");
const router = express.Router();
const upload = require("../upload");
// const main = require('../controller/saveProduct')
const controller = require('../controller/saveProduct')

router.post("/image-upload", upload.single("image"),controller.guardar)

module.exports = router;
