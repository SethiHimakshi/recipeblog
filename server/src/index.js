import express from "express";
// for frontend backend communication
import cors from "cors";
import mongoose from "mongoose";
import {userRouter} from './routes/users.js';
import {recipesRouter} from './routes/recipes.js';
const app = express();

//middleware
//help in receiving data from frontend
app.use(express.json());
app.use(cors());
app.get("/",(req,res)=>{res.send("Hi")});
app.use("/auth",userRouter);
app.use("/recipes",recipesRouter);
//database connection
mongoose.connect("mongodb+srv://himakshi:root@blog.tabvgbn.mongodb.net/blog?retryWrites=true&w=majority");
app.listen(3001, () => console.log("Server started"));