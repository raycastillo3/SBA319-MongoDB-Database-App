import mongoose from "mongoose";
const Schema = mongoose.Schema; 

const CommentSchema = new Schema(
  {
    content: {
      type: String,
      required: [true, "A comment is required"],
      minlength: [1, "Comment cannot be empty"],
      maxlength: [200, "Comments cannot exceed 200 characters"],
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