const User = require("../models/users");
const bcrypt = require("bcrypt");
const authController = {
  // register
  register: async (request, response) => {
    try {
      const { name, email, password } = request.body;
      // check if the user already exist
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return response.status(400).json({ message: "user already exist" });
      }
      // to encrypt the pasword
      const PasswordHash = await bcrypt.hash(password, 10);
      const newUser = new User({
        name,
        email,
        password: PasswordHash,
      });
      await newUser.save();
      response.json({ message: "user registered sucessfully" });
    } catch (error) {
      response.status(500).json({ message: error.message });
    }

    // response.json({ message: "auth created sucessfully" });
  },
  // login
  login: (request, response) => {
    response.json({ message: "login created sucessfully" });
  },
  // logout
  //   logout: (request, response) => {
  //     response.json({ message: "logout sucessfully done" });
  //   },
  // register
  me: (request, response) => {
    response.json({ message: "me created sucessfully" });
  },
};
module.exports = authController;
