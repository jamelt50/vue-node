const comment = require("../models/Comment");
const message = require("../models/Message");
exports.index = async (req, res) => {
  const comments = await comment.find({});
  return res.json(comments);
};

exports.one = async (req, res) => {
  const comment = await comment.findOne({ _id: req.params._id });
  return res.json(comment);
};

exports.add = async (req, res) => {
  const content = req.body.content;
  const message_id = req.params.message_id;
  const newComment = await comment.create({ content, user: req.user._id });
  const findedMessage = await message.findById(message_id);
  findedMessage.comments.push(newComment._id);
  findedMessage.save();
  return res.json(newComment);
};

exports.delete = async (req, res) => {
  const comments = await comment.find({});
  return res.json(comments);
};

exports.update = async (req, res) => {
  const comments = await comment.find({});
  return res.json(comments);
};
