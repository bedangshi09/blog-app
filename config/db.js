// const mongoose=require('mongoose')
import mongoose from 'mongoose';

export const connectDB=async()=>{
    try{
        const connect=await mongoose.connect(process.env.MONGO_URL)
        console.log('Database connected:',connect.connection.host,connect.connection.name)
    }
    catch(err){
        console.log('Database connection error:',err)
    }
}