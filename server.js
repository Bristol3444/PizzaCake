"use strict";

const express = require("express");
const app = express();


app.use(express.static("./public"));
app.use(express.json());



const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("SERVER IS RUNNING, PORT 8080");            
});

