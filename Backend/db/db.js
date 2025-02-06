const mongoose = require('mongoose');

async function connecttoDB() {  
    try {
        await mongoose.connect(process.env.DB_CONNECT).then(()=>{console.log("Mongoose Connected");})
    } catch (err) {
        console.log("Database connection error:", err.message);
    }
}

module.exports = connecttoDB;
