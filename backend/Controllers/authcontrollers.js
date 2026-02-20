import User from "../models/UserModel.js"
import bcrypt from "bcryptjs";
import token from "../token/token.js";

export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords don't match" })
        }
        const user = await User.findOne({ username })
        if (user) {
            return res.status(400).json({ error: "Username already exists" })
        }

        // Hash Password here
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const boyProfilePic = `https://i.pinimg.com/736x/70/34/fb/7034fbba66b46834a673f070426ccdb5.jpg`

        const girlProfilePic = `https://i.pinimg.com/1200x/3a/63/e6/3a63e6e6de9a3b18239fbccc6ecd684a.jpg`;

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })
        if (newUser) {
            // Generate Jwt Token here
            token(newUser._id, res)
            await newUser.save()
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic
            })
        } else {
            res.status(400).json({ error: "Invalid user data" })
        }
    } catch (error) {
        console.log("Error in singup controller", error.message)
        res.status(500).json({ error: "Internal Server Error" })
    }
};

export const login = async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await User.findOne({ username })
        if (!user) {
            return res.status(400).json({ error: "Invalid username or Password" })
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password || "")
        if (!isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid username or Password" })
        }
        token(user._id, res)
        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic
        })
    } catch (error) {
        console.log("Error in login controller", error.message)
        res.status(500).json({ error: "Internal Server Error" })
    }
}

export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 })
        res.status(200).json({ message: "Logged out succesfully" })
    } catch (error) {
        console.log("Error in login controller", error.message)
        res.status(500).json({ error: "Internal Server Error" })
    }
}