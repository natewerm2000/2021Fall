/*Nate
*/
const express = require("express");
const model = require("../models/users")

const app = express.Router();

app
    .get("/", (req, res, next)=>{
        res.send([ {name: "Nathaniel" }])
    })

module.exports = app;