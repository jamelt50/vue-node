const express = require("express");
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

const MessagesController = require("../controllers/MessagesController");
const CommentsController = require("../controllers/CommentsController");
const AuthController = require("../controllers/AuthController");
const UserController = require("../controllers/UserController");
const Auth = require("../middlewares/Auth");
router.get("/messages", Auth, MessagesController.index);
router.get("/messages/:user_id", Auth, MessagesController.byUser);
router.post(
  "/messages/add",
  [Auth, upload.single("cover")],
  MessagesController.add
);
router.put(
  "/messages/update/:_id",
  [Auth, upload.single("cover")],
  MessagesController.update
);
router.delete("/messages/delete/:_id", Auth, MessagesController.delete);

router.get("/comments", Auth, CommentsController.index);
router.post("/comments/add/:message_id", Auth, CommentsController.add);
router.put("/comments/update", Auth, CommentsController.update);
router.delete("/comments/delete", Auth, CommentsController.delete);

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);

router.get("/profile/:_id", Auth, UserController.one);
router.post(
  "/profile/update",
  [Auth, upload.single("profile_pic")],
  UserController.update
);

module.exports = router;
