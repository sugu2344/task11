const auth = require("../models/users");
const authController = {
  // register
  register: (request, response) => {
    response.json({ message: "auth created sucessfully" });
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
