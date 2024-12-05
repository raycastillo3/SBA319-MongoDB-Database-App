import mongoose from "mongoose";
const Schema = mongoose.Schema; 

const CommentSchema = new Schema(
  {
    content: {
      type: String,
      trim: true,
    },
    postedBy: { 
        type: Schema.Types.ObjectId, 
        ref: "User" 
    },
  },
  { timestamps: true }
);


let Comment = mongoose.model("Comment", CommentSchema); 
export default Comment; 