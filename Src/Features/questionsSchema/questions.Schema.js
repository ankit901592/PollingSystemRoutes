import mongoose from "mongoose";

// Define the schema for a polling question
const questionSchema = new mongoose.Schema({
  Title: { type: String, required: true },
  
  // Array of options for the poll
  options: [
    {
      // Unique identifier for each option, auto-generated by MongoDB
      _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
      
      // Text description of the poll option
      text: { type: String },
      
      // Number of votes for the option, default is 0
      votes: { type: Number, default: 0 },
      
      // URL link for voting on this option
      link_to_vote: { type: String },
    },
  ],
});

// Create a Mongoose model for the 'pollingQuestion' collection
export const questionModel = mongoose.model("pollingQuestion", questionSchema);
