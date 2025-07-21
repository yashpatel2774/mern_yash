const user = require('../models/user-model.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


//// HOME PAGE LOGIC

const home = async (req, res) => {
    try {
        res.status(200).json("Welcome to the home page");
    } catch (error) {
        console.log(error);
    }
}


///// Register Page Logic

const register = async (req, res) => {
    try {
        // console.log(req.body);
        const { username, email, phone, password } = req.body;
        // if (!username || !email || !phone || !password) {
        //     return res.status(400).json({ error: "All fields are required" });
        // }
        // res.status(200).json(req.body);

        const userExists = await user.findOne({ email });

        if (userExists) {
            return res.status(400).json({ error: "User already exists with email" });
        }

        const saltRound = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, saltRound);
        

        const userCreated = await user.create({
            username,
            email,
            phone,
            password: hashedPassword,
        });

        const token = jwt.sign({
            id: userCreated._id.toString(),
            email: userCreated.email,
            isAdmin: userCreated.isAdmin,
        }, process.env.JWT_SECRET, {
            expiresIn: '30d',
        });

        res.status(201).json({msg: "Registration Successfully..", token});

    } catch (error) {
        console.log(error);
    }
}

module.exports = { home, register };