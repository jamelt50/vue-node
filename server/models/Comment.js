const mongoose = require("mongoose");
const user = require("./User");

const commentSchema = new mongoose.Schema(
  {
    content: String,
    user: { type: mongoose.ObjectId, ref: user },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);
commentSchema.post("save", function (doc, next) {
  doc.populate("user").then(function () {
    next();
  });
});
const comment = mongoose.model("comment", commentSchema);

module.exports = comment;
