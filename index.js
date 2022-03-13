import express from "express"
import cors from "cors";
import mongoose from "mongoose";
import dotenv from 'dotenv'
// routes
import postRouter from "./routes/post.rooter.js"
dotenv.config()

// app
const app = express()
// app use 
app.use(cors())
app.use(express.json({limit: "15mb"}))
app.use("/posts", postRouter)

const port = process.env.PORT || 5000
const connectionURL = process.env.CONNECTION_URI

app.get("/", (req, res)=>{
    res.end("Server is running...")
})

// connect mongoose
//
mongoose.connect(connectionURL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>app.listen(port,()=> console.log("connected and running...")))
    .catch(err=> console.log("MongoDB ERR:",err.message))