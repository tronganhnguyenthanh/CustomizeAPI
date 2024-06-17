const imageDimensionModel = require("../models/imageDimension.model")
const addImageDimension = async (req, res) => {
  try{
    let addImageDimension = new imageDimensionModel({
      imageThumbnail:req.body.imageDimensionModel,
      width:req.body.width,
      height:req.body.height,
      topLeft:req.body.topLeft,
      bottomRight:req.body.bottomRight,
      topRight:req.body.topRight,
      bottomLeft:req.body.bottomLeft
    })
    let image = await addImageDimension.save()
    res.status(200).json(image)
  }catch(error){
    res.status(400).json({message:error})
  } 
}
const getImageDimension = async (req, res) => {
  try{
    let getListImageDimesion = await imageDimensionModel.find()
    res.status(200).json(getListImageDimesion)
  }catch(error){
    res.status(400).json({message:error})
  }
}
const removeImageDimension = async (req, res) => {
  try{
   let _id = req.params.id
   await imageDimensionModel.findByIdAndDelete(_id)
   res.status(200).json({message:"Image deleted successfully"})
  }catch(error){
    res.status(400).json({message:error})
  }
}
module.exports = {
 addImageDimension,
 getImageDimension,
 removeImageDimension
}