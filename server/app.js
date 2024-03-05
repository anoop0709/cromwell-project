import express from "express";
import cors from "cors";
import 'dotenv/config'
import cookieParser from 'cookie-parser';
import noCache from 'nocache';
import "./src/utils/dataBaseConfig.js"
import { corsOptions } from "./src/utils/corsConfig.js"
import userRouter from './src/routes/userRoutes.js'
import mongoSanitize from 'express-mongo-sanitize'; 

const server = express();
const { PORT } = process.env;

server.use(express.json())
server.use(express.urlencoded({ extended: true }));
server.use(cookieParser());
server.use(noCache());
server.use(cors(corsOptions));
server.use(mongoSanitize());
server.listen(PORT);

server.use(userRouter);
