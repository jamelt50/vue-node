require("dotenv").config({ path: __dirname + "/server/.env" });
const app = require("./server/app");

app.listen(3000);
