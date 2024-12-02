import express from "express";
import connectDB from "./database/conn.mjs";

const app = express(); 
const PORT = 5050; 

//Mongoose:
connectDB()

app.get("/", (req, res) => {
    res.send("Hello");
}); 

//ROUTES:
import posts from "./routes/posts.mjs"         
app.use("/posts", posts)

//Global error handling
app.use((err, _req, res, next) =>{
    res.status(500).send("Something went wrong...")
})


const server = app.listen(PORT, ()=> console.log(`Server is running in PORT: ${PORT}`))