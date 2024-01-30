import express from "express";
import { userControllar } from "../controllar/userControllar.js";
const app = express.Router();
app.get("/new", userControllar);
export default app;
