import mongoose from "mongoose";

import dotenv from 'dotenv'

dotenv.config()

const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD


export const Connection = () => {

    const MONGODB_URI = `mongodb://localhost:27017/todo`
    mongoose.connect(MONGODB_URI,{useNewUrlParser : true});

    mongoose.connection.on('connected',() => {
        console.log("Connected Successfully");
    })
    mongoose.connection.on('disconnected',() =>{
        console.log("Database Disconnected");
    })
    mongoose.connection.on('error' , () =>{
        console.log("Error while connecting Database",error.message);
    })
}

export default Connection