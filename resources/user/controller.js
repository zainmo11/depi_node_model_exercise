const User = require("./model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.register = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        // Assuming your User model is imported correctly and named 'User'
        const newUser = new User({
            email: req.body.email,
            name: req.body.name,
            password: hashedPassword,
        });

        // Save the new user to the database
        const savedUser = await newUser.save();

        // Return the saved user as the response
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

// login using jwt
exports.login = async (req, res) => {
    try {
        const user = await user
            .findOne({email: req.body.email}).select("+password");
        if (!user) {
            return res.status(404).json({message: "User not found"});
        }
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.status(400).json({message: "Invalid Password"});
        }
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
        res.json({token});
    } catch(err) {
        res.status(500).json({message: err.message});
    }
}


exports.getAllUsers = async (req, res) => {
    try {
        const users = await user.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}
