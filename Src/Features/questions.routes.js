import { questionsController } from "./questionController/questions.controller.js";
import express from "express";

const QuestionController = new questionsController();

const Questionroutes = express.Router();

Questionroutes.post("/questions/create", (req, res, next) => {
  QuestionController.addNewQuestion(req, res, next);
});
Questionroutes.post("/questions/:id/options/create", (req, res, next) => {
  QuestionController.addOptions(req, res, next);
});
Questionroutes.get("/questions/getAllQuestions", (req, res, next) => {
  QuestionController.getAllQuestions(req, res, next);
});
Questionroutes.get("/options/:id/add_vote", (req, res, next) => {
  QuestionController.addVote(req, res, next);
});
Questionroutes.delete("/questions/:id/delete", (req, res, next) => {
  QuestionController.deleteQuestion(req, res, next);
});
Questionroutes.delete("/options/:id/delete", (req, res, next) => {
  QuestionController.deleteOption(req, res, next);
});
Questionroutes.get("/questions/:id", (req, res, next) => {
  QuestionController.getOneQuestion(req, res, next);
});

export default Questionroutes;
