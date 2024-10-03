import { questionRepostior } from "../question.repostiory/question.repository.js";

export class questionsController {
  constructor() {
    // Initialize the QuestionRepository to interact with the question database
    this.QuestionRepository = new questionRepostior();
  }

  // Add a new question to the database
  async addNewQuestion(req, res, next) {
    try {
      const { Title } = req.body;

      // Call the repository to create a new question
      const questionadded = await this.QuestionRepository.createQuestions(
        Title
      );
      if (questionadded) {
        res.status(200).send("question added Succesfully");
      } else {
        res.status(404).send("something went wrng");
      }
    } catch (err) {
      console.log(err);
    }
  }

  // Add options to an existing question
  async addOptions(req, res, nex) {
    try {
      const id = req.params.id;
      const { text, votes } = req.body;

      // Call the repository to add options to the question
      const addedoption = await this.QuestionRepository.addOptions(
        id,
        text,
        votes
      );
      if (addedoption) {
        res.status(200).send("options added succesfully");
      } else {
        res.status(404).send("something went wrong");
      }
    } catch (err) {
      console.log(err);
    }
  }

  // Add a vote to an option of a question
  async addVote(req, res, next) {
    try {
      const id = req.params.id;

      // Call the repository to increment vote count
      const voted = await this.QuestionRepository.voteOption(id);
      if (voted) {
        res.status(200).send("voted succesfully");
      } else {
        res.status(404).send("something went wrong");
      }
    } catch (err) {
      console.log(err);
    }
  }

  // Retrieve all questions from the database
  async getAllQuestions(req, res, next) {
    try {
      const allQuestion = await this.QuestionRepository.getAllQuestions();
      if (allQuestion) {
        res.status(200).send(allQuestion);
      } else {
        res.status(404).send("no question found");
      }
    } catch (err) {
      console.log(err);
    }
  }

  // Delete a specific question from the database
  async deleteQuestion(req, res, next) {
    try {
      const id = req.params.id;

      // Call the repository to delete the specified question
      const isDeleted = await this.QuestionRepository.deleteOneQuestion(id);
      if (isDeleted) {
        res.status(200).send("question Deleted Succesfully");
      } else {
        res.status(404).send("question not found");
      }
    } catch (err) {
      console.log(err);
    }
  }

  // Delete an option from a question
  async deleteOption(req, res, next) {
    try {
      const id = req.params.id;

      // Call the repository to delete the option from the question
      const optionsDeleted = await this.QuestionRepository.deleteOptions(id);
      if (optionsDeleted) {
        res.status(200).send("options deleted Succesfully");
      } else {
        res.status(404).send("options not found");
      }
    } catch (err) {
      console.log(err);
    }
  }

  // Retrieve a specific question by its ID
  async getOneQuestion(req, res, next) {
    try {
      const id = req.params.id;
      
      // Call the repository to fetch one question
      const getone = await this.QuestionRepository.GetOneQuestion(id);
      if (getone) {
        res.status(200).send(getone);
      } else {
        res.status(404).send("question not found");
      }
    } catch (err) {
      console.log(err);
    }
  }
}
