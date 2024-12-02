import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config(); 

async function connectDB(){
    try {
        await mongoose.connect(process.env.ATLAS_URI);
        console.log("database connection successful")
    } catch (err) {
        console.log("connection error: ", err);
    }
}

export default connectDB; 