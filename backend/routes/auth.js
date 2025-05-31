const router = require("express").Router();
const User = require("../models/user");

const bcrypt = require("bcryptjs");

// REGISTER
router.post("/register", async (req, res) => {
    try {
      const { email, username, password } = req.body;
  
      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).send({ message: "User Already Exists" });
      }
  
      // Hash the password
      const hashPassword = bcrypt.hashSync(password, 10);
  
      // Create new user
      const user = new User({ email, username, password: hashPassword });
      await user.save();
  
      // Return success response
      return res.status(200).send({ user });
    } catch (error) {
      console.error("Registration Error:", error.message);
      return res.status(500).send({
        message: "Server Error. Please try again later.",
      });
    }
  });

// LOG IN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).send({
        message: "Please Sign Up First",
      });
    }

    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect) {
      return res.status(400).send({
        message: "Password is Not Correct",
      });
    }

    const { password, ...others } = user._doc
    res.status(200).send({ others })

  } catch (error) {
    res.status(400).send({
      message: "User is Already Exists",
    });
  }
});

module.exports = router;
