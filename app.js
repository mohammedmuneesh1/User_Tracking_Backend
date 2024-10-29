const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./router/userRouter");
const userAgent = require("express-useragent");

const app = express();
app.use(express.json());
app.use(cors());
// Middleware to use user-agent
app.use(userAgent.express());
app.use("/api/v1/user",userRouter);

// Set trust proxy to true
app.set('trust proxy', true);


const port = process.env.PORT || 5000;
const mongoUrl = process.env.MONGO_DB_URL;

mongoose.connect(mongoUrl).then(()=>{
    console.log("database connected");
}).catch((err)=>{
    console.log(err);
})

app.get("/working",(req,res)=>{
    res.send("working");
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});


// module.exports=app




  // "scripts": {
  //   "start": "node app.js",
  //   "dev": "nodemon app.js",
  //   "test": "echo \"Error: no test specified\" && exit 1"
  // },