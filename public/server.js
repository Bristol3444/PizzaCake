"use strict"


const express = require("express");
const app = express();
const routes = require("./")

app.use(express.static("./public"));
app.use(express.json());
app.use("/", routes);

app.listen(8080, _ => console.log("Server is running")); 
