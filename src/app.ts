import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to Auth service from K8s");
});

export default app;
