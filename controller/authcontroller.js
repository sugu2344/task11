const User = require("../models/users");
const authController = {
  // register
  register: async (request, response) => {
    try {
      const { name, email, password } = request.body;
      const newUser = new User({
        name,
        email,
        password,
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
