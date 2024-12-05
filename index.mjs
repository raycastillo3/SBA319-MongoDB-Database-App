import express from "express";
import connectDB from "./database/conn.mjs";
import posts from "./routes/posts.mjs";
import comments from "./routes/comments.mjs";

const app = express(); 
const PORT = 5050; 
//Body-parser
app.use(express.json());

//Mongoose:
connectDB()

app.get("/", (req, res) => {
    res.send("Hello");
}); 

//ROUTES:
app.use("/posts", posts)
app.use("/comments", comments)


//Global error handling
app.use((err, _req, res, next) =>{
    res.status(500).send("Something went wrong...")
})


const server = app.listen(PORT, ()=> console.log(`Server is running in PORT: ${PORT}`))