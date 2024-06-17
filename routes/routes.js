const express = require("express")
const imageDimensionController = require("../controller/imageDimension.controller")
const router = express.Router()
router.post("/image", imageDimensionController.addImageDimension)
router.get("/image/list", imageDimensionController.getImageDimension)
router.delete("/image/:id", imageDimensionController.removeImageDimension)
module.exports = router