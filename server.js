import express from "express";
import connect from "./Src/config.js/mongoConfig.js";
import Questionroutes from "./Src/Features/questions.routes.js";
import bodyParser from "body-parser";
const Server = express();

Server.use(bodyParser.urlencoded({ extended: true }));
Server.use(bodyParser.json());

Server.get("/", (req, res) => {
  res.send("welcome to polling app");
});
Server.use("/api", Questionroutes);

Server.listen(3000, () => {
  connect();
  console.log("server is listning on port 3000");
});
