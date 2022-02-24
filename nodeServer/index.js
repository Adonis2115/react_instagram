const express = require("express");
const cors = require("cors");
const db = require("./db/mongoose");
const userRouter = require("./routers/user");
const postRouter = require("./routers/post");
const path = require("path");
const http = require("http");

const app = express();

const whitelist = ["http://localhost:3000"];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));

// app.use(express.static(publicDirectoryPath));

app.use(express.json());
app.use(userRouter);
app.use(postRouter);

app.listen(5000, () => console.log("Server Up and Running!"));

module.exports = app;
