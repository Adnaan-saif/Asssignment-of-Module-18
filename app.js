const express = require("express");
const router = require("./src/routes");
const app = new express();
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(helmet);
app.use(hpp());
app.use(mongoSanitize);

const limiter = rateLimit({windowMs:15*60*1000,max:3000})
app.use(limiter)

let URI = "";
mongoose.connect(URI);

app.use("/api/v1",router);
app.use('*',(req,res)=>{
    res.status(404).json({status:"fail",data:"Not Found"})
})

module.exports = app;