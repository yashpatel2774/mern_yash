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
        console.log("📥 Incoming data:", req.body);

        const { username, email, phone, password } = req.body;

        const userExists = await user.findOne({ email });
        console.log("👤 Existing user:", userExists);

        if (userExists) {
            return res.status(400).json({ error: "User already exists with email" });
        }

        const saltRound = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, saltRound);
        console.log("🔐 Hashed password:", hashedPassword);

        const userCreated = await user.create({
            username,
            email,
            phone,
            password: hashedPassword,
        });

        console.log("✅ User created:", userCreated);

        console.log("🔑 JWT_SECRET:", process.env.JWT_SECRET);
        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET is missing in .env");
        }

        const token = jwt.sign(
            {
                id: userCreated._id.toString(),
                email: userCreated.email,
                isAdmin: userCreated.isAdmin,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "30d",
            }
        );

        console.log("🪙 Token created:", token);

        res.status(201).json({ msg: "Registration Successfully..", token , user: userExists});

    } catch (error) {
        console.error("❌ Registration error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};





//// Login Page Logic

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userExists = await user.findOne({ email });

        if (!userExists) {
            return res.status(400).json({ error: "Invalid Credentials" });
        }

        const isPasswordMatch = await bcrypt.compare(password, userExists.password);

        if (!isPasswordMatch) {
            return res.status(400).json({ error: "Invalid Email or Password" });
        }

        const token = jwt.sign({
            id: userExists._id.toString(),
            email: userExists.email,
            isAdmin: userExists.isAdmin,
        }, process.env.JWT_SECRET, {
            expiresIn: '30d',
        });

        res.status(200).json({ msg: "Login Successfully..", token, user: userExists });

    } catch (error) {
        console.error("Login error:", error); // helpful for debugging
        res.status(500).json({ error: "Internal Server Error" });
    }
}

    //   User data - USER LOGIC

        const getUser = async (req, res) => {
            try {
                const userData = req.user;
                console.log(userData)
                return res.status(200).json({ userData })
            } catch (error) {
                console.log(`error from the user route ${error}`);
            }
        };


module.exports = { home, register, login, getUser };