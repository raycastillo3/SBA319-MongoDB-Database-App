import mongoose from "mongoose";


const Schema = mongoose.Schema; 

const PostSchema = new Schema(
  {
    content: {
      type: String,
      trim: true,
    },
    postedBy: { 
        type: Schema.Types.ObjectId, 
        ref: "User" 
    },
    pinned: Boolean,
    likes: [{ 
      type: Schema.Types.ObjectId, 
      ref: "User" 
  }],
  replyTo: {
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }
  },
  { timestamps: true }
);


let Post = mongoose.model("Post", PostSchema); 
export default Post; 