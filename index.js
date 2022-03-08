const express = require("express");
const cors = require("cors");
const { createReminders, getReminders } = require("./src/reminder");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("working!");
});
app.post("/reminders", createReminders);
app.get('/reminders', getReminders)

app.listen(3001, () => {
  console.log("Listening to port 3001");
});
