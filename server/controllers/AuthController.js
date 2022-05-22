const user = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const round = 10;

exports.register = async (req, res) => {
  const { email, name, password, password_confirmation } = req.body;
  const hash = await bcrypt.hash(password, round);
  const newUser = new user({ email, name, password_hash: hash });
  newUser.save();
  const loggedUser = newUser.toObject();
  delete loggedUser["password_hash"];
  const token = await jwt.sign(loggedUser, process.env.PRIVATE_KEY, {
    expiresIn: "24h",
  });
  res.json(token);
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const loggable = await user.findOne({ email }).select("+password_hash");
  const valid = await bcrypt.compare(password, loggable.password_hash);
  if (valid) {
    const loggedUser = loggable.toObject();
    delete loggedUser["password_hash"];
    const token = await jwt.sign(loggedUser, process.env.PRIVATE_KEY, {
      expiresIn: "24h",
    });
    res.json(token);
  }
};

// exports.refresh = async (req, res) => {
//   const { email, password } = req.body;
//   const loggable = await user.findOne({ email }).select("+password_hash");
//   const valid = await bcrypt.compare(password, loggable.password_hash);
//   if (valid) {
//     const loggedUser = loggable.toObject();
//     delete loggedUser["password_hash"];
//     const token = await jwt.sign(loggedUser, process.env.PRIVATE_KEY, {
//       expiresIn: "24h",
//     });
//     res.json(token);
//   }
// };
