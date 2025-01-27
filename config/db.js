const mongoose = require("mongoose");

const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongodb is connected successfully")
    }catch(error){
        console.log("error in connecting the database")
    }
}

module.exports = connectDB; 