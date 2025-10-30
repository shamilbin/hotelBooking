import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const dbConnect= async ()=>{

    try {
        // mongoose.connection.on(`connected` ,()=>console.log(`Data Base Connected Succesfully`))
        await mongoose.connect(`${process.env.MONGODB_URI}/hotel-booking`)
        console.log(`Data base Connected Succesfully`)
    } catch (error) {
        console.log(error.message)
    }
}

dbConnect()
