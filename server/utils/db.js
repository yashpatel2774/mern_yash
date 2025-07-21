const mongoose = require('mongoose');

// const URI = 'mongodb://localhost:27017/mern_admin'; 
// mongoose.connect(URI);

const URI = process.env.MONGODB_URI;


const connectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Database Connection Successfully...")
    }
    catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1); 
    }
}

module.exports = connectDB;