const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://tejasrinivassjps:indiansarethebest@cluster0.0a1va.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const MessageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Message = mongoose.model("Message", MessageSchema);

app.post("/api/messages", async (req, res) => {
  const { name, email, message } = req.body;
  const newMessage = new Message({ name, email, message });
  await newMessage.save();
  res.status(201).send("Message saved");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
