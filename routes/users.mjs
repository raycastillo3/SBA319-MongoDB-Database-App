import express from 'express'; 
import User from '../schemas/UserSchema.mjs';

const router = express.Router(); 

router.get("/", async (req, res) =>{
    try {
        const result = await User.find({});
        if (!result) return res.status(404).send("No users yet");
        else res.status(200).send(result)
    } catch (err) {
        console.log(err)
    }
}); 

export default router;