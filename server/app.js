import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config()
const app = express();

app.use(cors()); // enable cors origin resourse sharing

app.get("/",(req,res)=>{
    res.send("APi is working")
})

const PORT = process.env.PORT

app.listen(PORT,()=>console.log(`The server is running at ${PORT}`))