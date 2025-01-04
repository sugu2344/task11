const mongoose = require("mongoose");
const userSchema = new mongoose.schema({
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
module.exports=mongoose.model("Users",userSchema,"users")