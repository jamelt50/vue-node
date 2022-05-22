const mongoose = require("mongoose");
const user = require("./User");
const comment = require("./Comment");
const like = require("./Like");

const messageSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    likes: Array,
    cover: { type: String, get: coverUrl },
    user: { type: mongoose.ObjectId, ref: user },
    comments: {
      type: [{ type: mongoose.ObjectId, ref: comment }],
      default: [],
    },
    likes: {
      type: [{ type: mongoose.ObjectId, ref: like }],
      default: [],
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    toJSON: { getters: true },
  }
);
function coverUrl(cover) {
  const url = process.env.BACK_URL + cover;
  return url;
}
const message = mongoose.model("message", messageSchema);

module.exports = message;
