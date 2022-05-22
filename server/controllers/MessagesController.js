const message = require("../models/Message");
const multer = require("multer");
const fs = require("fs");

exports.index = async (req, res) => {
  const messages = await message
    .find({})
    .populate([
      "user",
      { path: "comments", populate: { path: "user" } },
      "likes",
    ]);
  res.json(messages);
};

exports.byUser = async (req, res) => {
  const _id = req.params.user_id;
  const messages = await message
    .find({ user: _id })
    .populate([
      "user",
      { path: "comments", populate: { path: "user" } },
      "likes",
    ]);
  res.json(messages);
};

exports.add = async (req, res) => {
  const { title, content } = req.body;
  const cover = req.file;

  const newMessage = new message({
    title,
    content,
    cover: cover.path.replace("public", ""),
    user: req.user._id,
  });
  newMessage.save();
  await newMessage.populate(["user", "comments", "likes"]);
  res.json(newMessage);
};

exports.delete = async (req, res) => {
  const _id = req.params._id;
  try {
    const deleteMessage = await message.findOne({ _id });
    fs.unlinkSync(
      `./public${deleteMessage.get("cover", null, { getters: false })}`
    );
    deleteMessage.remove();
    res.json(deleteMessage);
  } catch (err) {
    console.error(err);
  }
};

exports.update = async (req, res) => {
  const { title, content } = req.body;
  const cover = req.file;
  const _id = req.params._id;

  let data;
  if (cover) {
    data = {
      title,
      content,
      user: req.user._id,
      cover: cover.path.replace("public", ""),
    };
  } else {
    data = {
      title,
      content,
      user: req.user._id,
    };
  }

  const editedMessage = message.updateOne({ _id }, data);
  res.json(editedMessage);
};
