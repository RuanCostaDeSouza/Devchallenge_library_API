import Express from "express";
import cors from "cors";
import { Routes } from "./routes";

const app = Express();

app.use(Express.json());
app.use(Express.urlencoded({extended:true}));
app.use(cors)
app.use(Routes)


export {app};