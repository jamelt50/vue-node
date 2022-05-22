const express = require("express");
const mongo = require("mongoose");
var cors = require("cors");
const db = process.env.MONGO_DB;
const cluster = process.env.MONGO_URL;
const pass = process.env.MONGO_PASS;
const user = process.env.MONGO_USER;

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());
mongo
  .connect("mongodb://" + cluster + "/" + db, {
    pass,
    user,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connexion a MPOngoDb reussie"))
  .catch((e) => console.log(e, "connexion echouer"));

const routes = require("./routes/Routes");

app.use(express.static("public"));
app.use(routes);

module.exports = app;
