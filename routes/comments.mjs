import express from "express"; 
import Comment from "../schemas/CommentSchema.mjs"; 

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

router.get("/", async (req, res) => {
    try {
        const result = await Comment.find({});
        res.status(200).send(result)
    } catch (err) {
        res.status(404).send("Not comments yet");
        console.log(err);
    }
})

router.get("/:id", async (req, res) => {
    try {
        const result = await Comment.findById(req.params.id);
        if (!result) return res.status(404).send("Comment not found");
        else return res.status(200).send(result);
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error Finding Comment");
    }
})

router.patch("/:id/update", async (req, res) => {
    try {
        const newComment = req.body.content;
        const result = await Comment.findById(req.params.id);
        if (!result) {
            return res.status(404).send("Comment not found");
        }
        const updatedComment = result.content ? `${newComment}`: newComment; 

        result.content = updatedComment;
        await result.save();

        res.status(200).send(result);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error Updating Comment");
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const result = await Comment.findByIdAndDelete(req.params.id); 
        if (!result) res.status(404).send("Not found")
        else res.status(200).send(result);
    } catch (err) {
        console.log(err);
        res.status(500).send("Error Deleting Comment");
    }
})

export default router; 