import express from "express";
import connectDB from "./database/conn.mjs";
import posts from "./routes/posts.mjs";
import comments from "./routes/comments.mjs";
import users from "./routes/users.mjs"; 

const app = express(); 
const PORT = 5050; 
//Body-parser
app.use(express.json());

//Mongoose:
connectDB()

app.get("/", (req, res) => {
    res.json({
        links: [
            {
                href: "/users",
                rel: "users",
                type: "GET"
            },
            {
                href: "/posts",
                rel: "posts",
                type: "GET"
            },
            {
                href: "/posts/:id",
                rel: "posts",
                type: "GET"
            },
            {
                href: "/comments",
                rel: "comments",
                type: "POST"
            },
            {
                href: "/comments",
                rel: "comments",
                type: "GET"
            },
            {
                href: "/comments/:id",
                rel: "comments",
                type: "GET"
            },
            {
                href: "/comments",
                rel: "comments",
                type: "GET"
            },
            {
                href: "/comments/:id/update",
                rel: "comments",
                type: "PATCH"
            },
            {
                href: "/comments/:id",
                rel: "comments",
                type: "DELETE"
            },
        ]
    })
}); 

//ROUTES:
app.use("/posts", posts)
app.use("/comments", comments)
app.use("/users", users)


//Global error handling
app.use((err, _req, res, next) =>{
    res.status(500).send("Something went wrong...")
})


const server = app.listen(PORT, ()=> console.log(`Server is running in PORT: ${PORT}`))