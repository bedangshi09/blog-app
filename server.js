const express=require('express')
const cors=require('cors')
const morgan=require('morgan')
const colors=require('colors')
const dotenv=require('dotenv')
const {connectDB}=require('./config/db.js')

//env config
dotenv.config();
//router import
const userRoutes=require('./routes/userRoutes')
const blogRoutes=require('./routes/blogRoutes')
//rest object
const app=express()
//middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
//mongodb connection
connectDB()

//routes
app.use("/api/v1/user",userRoutes);
app.use("/api/v1/blog",blogRoutes);
app.get('/',(req,res) =>{
    res.status(200).send({
        "message":"Node server" 
    })
})
//Port
const PORT=process.env.PORT || 5000
//listen
app.listen(PORT,() => {
    console.log(`Server Running on ${process.env.DEV_NODE} port no ${PORT}`.bgCyan.white);
})