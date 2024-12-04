import express from "express";
import Post from "../schemas/PostSchema.mjs"; 

const router = express.Router(); 


router.get("/", async (req, res) => {
    try {
        const result = await Post.find({}); 
        res.status(200).send(result);
    } catch (err) {
        res.status(404).send("Not posts yet");
        console.log(err);
    }
})
router.get("/:id", async (req, res) => {
    try {
        const result = await Post.findById(req.params.id);
        res.status(200).send(result)
    } catch (err) {
        res.status(404).send("Not found");
        console.log(err);
    }
})

export default router