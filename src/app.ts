import express from "express";
import "reflect-metadata";

import authRouter from "./routes/auth.js";
const app = express();

app.use("/auth", authRouter);
app.get("/", (req, res) => {
    res.send("Welcome to Auth service from K8s");
});

export default app;
