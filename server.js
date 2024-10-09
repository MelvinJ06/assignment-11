const express = require("express");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const recipeRoutes = require("./routes/recipeRoutes");

require("dotenv").config();

const app = express();

app.use(bodyParser.json());

connectDB ();

app.use("/api/recipes",recipeRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log("server is running at url http://localhost:5000")
})