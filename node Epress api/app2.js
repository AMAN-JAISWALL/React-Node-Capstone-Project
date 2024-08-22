import express from "express";
import bodyParser from "body-parser";   
import cors from 'cors';
import userRouter from './routes/userRoute.js';
import courseRouter from './routes/courseRoute.js';
import moduleRouter from './routes/moduleRoute.js';
import materialRouter from './routes/materialRoute.js';



// post or delete or patch method ke liye eyeh important h
// import bodyParser from "body-parser";

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/user',userRouter);
app.use('/course',courseRouter);
app.use('/module',moduleRouter);
app.use('/material',materialRouter);
// app.use('')


//192.168.88.44

app.listen(4040);
console.log("my app link http://localhost:4040");


