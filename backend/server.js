import express from 'express';
import authRoutes from "./routes/auth.route.js";
import { ENV_VAR } from './config/envVars.js';
import { connectDB } from './config/db.js';
//Used the package jaon to change the type to module to be able to do import express from 'express'
//Then I went into the package Json and changed the script to dev and then let the dev equal to ther server.js file which when i did npm
//run dev it actully did so
const app = express();
const PORT = ENV_VAR.PORT
app.use(express.json())
app.use("/api/v1/auth", authRoutes)
 // This allows you to fetch the values from 
//routes are just your own versions of local hosting, it creates different websites

app.listen(PORT, ()=> {
    console.log('Server start at http://localhost:'+ PORT)
connectDB()});

