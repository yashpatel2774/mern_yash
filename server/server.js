require('dotenv').config();
const express = require("express");
const app = express();
const router = require('./router/auth-router');
const connectDB = require('./utils/db.js');

app.use(express.json()); // Middleware to parse JSON bodies

// app.use('/', require('./router/auth-router'));   THE FIRST WAY

app.use('/api/auth/', router); // THE SECOND WAY in this we need to import it 

const port = 3000;

connectDB().then(() => {
app.listen(port, () => {   
    console.log(`Server is running on http://localhost:${port}`);
    });
}).catch((error) => {
    console.error("Failed to connect to the database:", error);
});