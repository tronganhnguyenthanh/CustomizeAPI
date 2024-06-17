const mongoose = require("mongoose")
const ImageCustomizeSchema = new mongoose.Schema({
  imageThumbnail:{
   type:String
  },
  width:{
   type:String
  },
  height:{
   type:String
  },
  topLeft:{
   type:String
  },
  bottomRight:{
   type:String
  },
  topRight:{
   type:String
  },
  bottomLeft:{
   type:String
  },
},{
 collection:"dimension"
})
module.exports = mongoose.model("ImageCustomizeSchema", ImageCustomizeSchema)