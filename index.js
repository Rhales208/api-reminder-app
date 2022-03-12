const express = require("express");
const cors = require("cors");
const { createReminders, getReminders } = require("./src/reminder");

const port = process.env.PORT || 3001

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("working!");
});
app.post("/reminders", createReminders);
app.get('/reminders', getReminders)

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
