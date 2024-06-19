const express = require("express");
const mainRouter = require("./routes");

const app = express();

app.use(express.json());

app.use("/api/v1", mainRouter);

app.listen(3000, () => {
  console.log("App is Listening on 3000");
});
