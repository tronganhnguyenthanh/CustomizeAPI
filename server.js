const express = require("express")
const app = express()
const dotenv = require("dotenv")
dotenv.config()
const cors = require("cors")
const mongoose = require("mongoose")
const router = require("./routes/routes")
mongoose.connect(process.env.DB_CustomizeImage).then(function(){console.log("Database connected successfully")}).catch(function(){
 console.log("Failed to connect database")
})
app.use(cors())
app.use(express.json())
app.use("/api", router)
app.listen(process.env.PORT, () => {
 console.log(`Server is running on port ${process.env.PORT}`)
})