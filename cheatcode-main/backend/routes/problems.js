const express = require("express");
const { Problem } = require("../db");

const problemRouter = express.Router();
// req-header, parameters, query, body
// /all/algorithm
// /all/dsa
// /all/sql

problemRouter.get("/all/:category", async (req, res) => {
  const category = req.params.category;
  const problems = await Problem.find({
    category,
  });

  res.json({
    category,
    problems,
  });
});

problemRouter.get("/tag/:tag", async (req, res) => {
  try {
    // Get the tag from the request parameters
    const tag = req.params.tag;

    // Find problems that contain the specified tag in their tags array
    const problems = await Problem.find({
      tags: tag,
    });

    // Return the tag and the list of matching problems
    res.json({
      tag,
      problems,
    });
  } catch (error) {
    console.error("Error fetching problems:", error);
    res.status(500).json({
      message: "An error occurred while fetching problems",
      error: error.message,
    });
  }
});

problemRouter.get("/:problemId", async (req, res) => {
  const problemId = req.params.problemId;
  const problems = await Problem.find({
    _id: problemId,
  });

  res.json({
    problemId,
    problems,
  });
});

problemRouter.post("/add", async (req, res) => {
  const body = req.body();

  const problem = await Problem.create(body);

  res.json({
    message: "Problem ho gyi create",
    problem,
  });
});

module.exports = {
  problemRouter,
};
