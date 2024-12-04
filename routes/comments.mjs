import express from "express"; 
import Comment from "../schemas/CommentSchema"; 

const router = express.Router(); 

router.post("/", async (req, res) => {
    let newComment = req.body; 
    try {
        const result = await Comment.create(newComment); 
        res.status(204).send(result);      
    } catch (err) {
        res.status(500).send(err);
    }
}); 
