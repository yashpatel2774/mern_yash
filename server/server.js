require('dotenv').config();
const express = require("express");
const cors = require("cors")
const app = express();
const authRoute = require('./router/auth-router.js');
const contactRoute = require('./router/contact-router.js');
const errorMiddleware = require('./middlewares/error-middleware.js');
const connectDB = require('./utils/db.js');

const corsOptions = {
    origin: "http://localhost:5173",
    method: "GET, POST, PUT, PATCH, DELETE, HEAD",
    credentials: true,

};

app.use(cors(corsOptions));

app.use(express.json()); // Middleware to parse JSON bodies

// app.use('/', require('./router/auth-router'));   THE FIRST WAY

app.use('/api/auth/', authRoute);
app.use('/api/form/', contactRoute);

app.use(errorMiddleware); 
const port = 3000;

connectDB().then(() => {
app.listen(port, () => {   
    console.log(`Server is running on http://localhost:${port}`);
    });
}).catch((error) => {
    console.error("Failed to connect to the database:", error);
});