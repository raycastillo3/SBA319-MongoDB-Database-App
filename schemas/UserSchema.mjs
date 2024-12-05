import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    username: {
        unique: true,
        type: String,
        required: true,
        index: true,
        unique: true,
        trim: true,
    },
    email: {
        unique: true,
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    }
});

let User = mongoose.model("User", UserSchema); 
export default User; 