import express from "express";
import connectDB from "./db/conn.js";
import cors from "cors";
import dotenv from 'dotenv';
import {createUser, userRenders, deleteRender } from './routes/userFunctions.js';
import createEmail from './routes/createEmail.js';


dotenv.config({ path: "./config.env" })
const app = express();
app.use(cors());
app.use(express.json());
await connectDB()

let port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

app.use('/api/Users', createUser)
app.use('/api/Emails', createEmail)
app.use('/api/User/Renders/:id', userRenders)
app.use('/api/User/Render/:id', deleteRender)
