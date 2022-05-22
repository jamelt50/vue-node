const mongoose = require("mongoose");
const user = require("./User");

const likeSchema = new mongoose.Schema(
  {
    content: String,
    user: { type: mongoose.ObjectId, ref: user },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const like = mongoose.model("like", likeSchema);

module.exports = like;
