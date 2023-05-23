import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

const app = express()
const cors = cors()
const db = mongoose()
const env = dotenv()


app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
}).then(()=>{
    console.log("MongoDB Connected")

}).catch((err)=>{
    console.log(err)
})


const server = app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})
 
