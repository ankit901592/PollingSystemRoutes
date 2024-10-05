import dotenv from 'dotenv'
dotenv.config();
import express from "express";
import connect from "./Src/config.js/mongoConfig.js";
import Questionroutes from "./Src/Features/questions.routes.js";
import bodyParser from "body-parser";
const Server = express();

Server.use(bodyParser.urlencoded({ extended: true }));
Server.use(bodyParser.json());

Server.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to Polling App</h1>
     <h1>Test this on postMan</h1>
    <ul>
      <li><a href="http://localhost:3000/api/questions/create">POST /api/questions/create</a></li>
      <li><a href="http://localhost:3000/api/questions/:id/options/create">POST /api/questions/:id/options/create</a></li>
      <li><a href="http://localhost:3000/api/questions/getAllQuestions">GET /api/questions/getAllQuestions</a></li>
      <li><a href="http://localhost:3000/api/options/:id/add_vote">GET /api/options/:id/add_vote</a></li>
      <li><a href="http://localhost:3000/api/questions/:id/delete">DELETE /api/questions/:id/delete</a></li>
      <li><a href="http://localhost:3000/api/options/:id/delete">DELETE /api/options/:id/delete</a></li>
      <li><a href="http://localhost:3000/api/questions/:id">GET /api/questions/:id</a></li>
    </ul>
  `);
});
Server.use("/api", Questionroutes);

Server.listen(3000, () => {
  connect();
  console.log("server is listning on port 3000");
});
