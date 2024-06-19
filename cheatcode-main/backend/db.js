const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://jojosehrawat21:2nb82EUacxSpf9T7@cluster0.r4yw3jl.mongodb.net/CheatCode"
);

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  fullname: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
});

const problemSchema = new mongoose.Schema({
  name: String,
  description: String,
  level: {
    type: String,
    enum: ["easy", "medium", "hard"],
    required: true,
  },
  examples: [
    {
      input: String,
      output: String,
      explaination: String,
    },
  ],
  constraints: [String],
  tags: [String],
  category: String,
  tip: String,
});

const User = mongoose.model("Users", userSchema);
const Problem = mongoose.model("Problems", problemSchema);

module.exports = {
  User,
  Problem,
};
