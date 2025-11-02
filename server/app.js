import express from "express";
import dotenv from "dotenv";
import { clerkMiddleware } from '@clerk/express'
import "./configs/dbConnect.js"
import cors from "cors";
import clerkWebHook from "./controllers/clerkWebHooks.js";
dotenv.config()



const app = express();

app.use(cors()); // enable cors origin resourse sharing

    // MiddleWare 
app.use(express.json())
app.use(clerkMiddleware())

// API to Listen Clerk WebHook
 app.use("/api/clerk",clerkWebHook)

app.get("/",(req,res)=>{
    res.send("API is working fine ✅")
})

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>console.log(`The server is running at ${PORT}`))