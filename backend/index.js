const express = require("express");
require('dotenv').config();
const cors = require("cors");
const { formRouter } = require("./Routes/form.route");
const { connection } = require("./db");



const app = express();

app.use(express.json());
app.use(cors());

 // formRouter --> 

  app.use("/forms", formRouter);


app.get("/", (req,res) => {
    res.send("Home");
})



app.listen(process.env.PORT,  async() => {
    try{
        await connection;
        console.log("Connected to the DB");
        console.log(`Running at ${process.env.PORT} port`);
    }catch(err){
        console.log(err);
    }
})
