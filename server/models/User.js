const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    profile_pic: { type: String, default: "/avatar.svg" },
    password_hash: { type: String, select: false },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const user = mongoose.model("user", userSchema);

module.exports = user;
