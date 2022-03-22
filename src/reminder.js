const { connectDb } = require("./connectDb");

//this is a function to post to database
exports.createReminders = (req, res) => {
  const newReminder = req.body;
  const db = connectDb();
  db.collection("reminders") 
    .add(newReminder)
    .then((doc) => res.status(201).send({data: doc.id}))
    .catch((err) => res.status(500).send(err));
};

exports.getReminders = (req,res) => {
  const db = connectDb();
  db.collection("reminders")
  .get()
  .then(snapshot => {
    const reminders = snapshot.docs.map(doc => {
      let reminder = doc.data()
      reminder.id = doc.id
      return reminder
    })
  res.send(reminders)
  })
}