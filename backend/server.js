import express from 'express';
import dotenv from "dotenv";
import authRoutes from "./routes/authroutes.js";
import db from './config/db.js';
import messageRoutes from './routes/messageRoutes.js';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoutes.js';
import { app, server } from './Socket/socket.js';

const PORT = process.env.PORT || 5000;
dotenv.config();


app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)


// app.get("/", (req, res) => {
//     res.send("Hello world!")
// })


  server.listen(PORT, () => {
    db();
    console.log(`Server running on port ${PORT}`)
})