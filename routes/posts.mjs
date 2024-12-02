import express from "express";
import Post from "../schemas/PostSchema.mjs"; 

const router = express.Router(); 

router.post("/", async (req, res) => {
    let newPost = req.body; 
    try {
        const result = await Post.create(newPost); 
        res.status(204).send(result);      
    } catch (err) {
        res.status(500).send(err);
    }
}); 

router.get("/", async (req, res) => {
    res.send("many posts")
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