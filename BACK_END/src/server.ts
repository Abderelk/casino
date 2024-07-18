import express from 'express';
import mongoose from 'mongoose';
import { env } from './config/index.js';
import router from './routes/auth.js';

const app = express();
const port = env.port
const mongooseURI = env.mongoURI

//middleware
app.use(express.json());
//connect to db
mongoose
.connect(mongooseURI ? mongooseURI : '')
.then(()=>{console.log("connexion au cluster mongoDB réussie")})
.catch((err)=>{console.log(err)})

//routes
app.use('/',router)
//server

app.listen(port,()=>console.log(`server running on port ${port}`))