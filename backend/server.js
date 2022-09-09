const express =  require("express")
const bodypraser = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose")
const  dotenv= require("dotenv").config()
const port = process.env.PORT || 4000
const app = express()

app.use(cors())
app.use(bodypraser.json())
// const uri = process.env.ATLAS_URI


const crudRouter = require("./routes/CrudRoutes")
app.use("/api/crud",crudRouter)

// mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true})
// const conection = mongoose.connection;
// conection.once('open',()=>{
//     console.log("once success")
// })

app.listen(port,()=>{
    console.log(`server port ${port}`)
})