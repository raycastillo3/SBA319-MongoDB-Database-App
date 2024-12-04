import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
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