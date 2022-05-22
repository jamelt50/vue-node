const { user } = require("../models/User");

exports.one = async (req, res) => {};
exports.update = async (req, res) => {
  const { title, content } = req.body;
  const profile_pic = req.file;

  const newMessage = new message({
    name,
    content,
    profile_pic: profile_pic.path.replace("public", ""),
    user: req.user,
  });
  newMessage.save();
  return res.json(newMessage);
};
