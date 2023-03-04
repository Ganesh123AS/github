const User = require("../model/registerModel");

const registerUser = async(req, res, next) => {
   try {
    const { name, email, password, address, phone } = req.body;

    // Check if email already exists
    const userExists = await User.findOne({ email: email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    const user = new User({ name, email, password, address, phone });
    await user.save();

    res.json({
      result: user,
      status: true,
      msg: "registration successful",
    });
  }
 catch (err) {
  console.error(err);
}
}

exports.registerUser = registerUser;