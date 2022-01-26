const express = require("express");
const db = require("./db/mongoose");
const userRouter = require("./routers/user");
const path = require("path");
const http = require("http");

const app = express();

// app.use(express.static(publicDirectoryPath));

app.use(express.json());
app.use(userRouter);

app.listen(5000, () => console.log("Server Up and Running!"));

module.exports = app;
