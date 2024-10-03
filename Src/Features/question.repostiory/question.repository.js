import mongoose from "mongoose";
import { questionModel } from "../questionsSchema/questions.Schema.js";
const ObjectId = mongoose.Types.ObjectId;

export class questionRepostior {
  async createQuestions(newQuestion) {
    try {
      const addedQuestion = await new questionModel({
        Title: newQuestion,
      });
      await addedQuestion.save();
      return addedQuestion;
    } catch (err) {
      console.log(err);
    }
  }
  async addOptions(Id, text, vote) {
    try {
      // Validate if Id is a valid ObjectId
      if (!ObjectId.isValid(Id)) {
        throw new Error("Invalid question Id");
      }

      const newOptionId = new ObjectId(); // Generate a new ObjectId for the option
      const question = await questionModel.findById(Id); // Find the question by its Id

      if (question) {
        // Add the new option to the options array
        const addedOptions = await questionModel.updateOne(
          { _id: Id },
          {
            $push: {
              options: {
                _id: newOptionId, // Use the new Option ID here
                text: text, // The text of the option
                votes: vote, // Initial vote count
                link_to_vote: `http://localhost:3000/api/options/${newOptionId}/add_vote`, // Use the option ID in the link
              },
            },
          }
        );
        return addedOptions;
      } else {
        console.log("Question not found.");
        return null;
      }
    } catch (err) {
      console.log("Error in addOptions: ", err);
      return err;
    }
  }

  async createQuestions(newQuestion) {
    try {
      const addedQuestion = new questionModel({
        Title: newQuestion,
      });
      await addedQuestion.save();
      return addedQuestion; // Return the saved question
    } catch (err) {
      console.log(err);
    }
  }
  async getAllQuestions() {
    try {
      const getallquestions = await questionModel.find();
      if (getallquestions) {
        return getallquestions;
      } else {
        return new Error("questions not found");
      }
    } catch (err) {
      console.log(err);
    }
  }
  async voteOption(optionId) {
    try {
      const opt = await questionModel.find({ "options._id": optionId });
      console.log(opt);
      if (opt) {
        return await questionModel.updateOne(
          { "options._id": optionId },
          { $inc: { "options.$.votes": 1 } }
        );
      } else {
        console.log("option not found");

        return null;
      }
    } catch (err) {
      console.log(err);
    }
  }
  async deleteOneQuestion(id) {
    try {
      const deleted = await questionModel.deleteOne({ _id: id });
      if (deleted) {
        return deleted;
      } else {
        console.log("question not found");
        return null;
      }
    } catch (err) {
      console.log(err);
    }
  }
  async deleteOptions(optionId) {
    try {
      const isDeleted = await questionModel.updateOne(
        {
          "options._id": optionId,
        },
        { $pull: { options: { _id: optionId } } }
      );
      if (isDeleted) {
        return isDeleted;
      } else {
        console.log("options not found");
        return null;
      }
    } catch (err) {
      console.log(err);
    }
  }
  async GetOneQuestion(id) {
    try {
      const getQuestion = await questionModel
        .findById(id)
        .select({ _id: 0, options_id: 0 });
      if (getQuestion) {
        return getQuestion;
      } else {
        console.log("quesion not found");
        return null;
      }
    } catch (err) {
      console.log(err);
    }
  }
}
