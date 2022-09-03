const express = require("express");
const router = express.Router();
const upload = require("../upload");

router.post("/image-upload", upload.single("image"), function (req, res, next) {
  return res.json({
    imageUrl: req.file.location,
    titutlo: req.body.title,
    descripcion: req.body.description,
    precio: req.body.price
    });
});

module.exports = router;
