import mongoose from "mongoose";

const Schema = mongoose.Schema; 

const PostSchema = new Schema(
  {
    content: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

let Post = mongoose.model("Post", PostSchema); 
export default Post; 