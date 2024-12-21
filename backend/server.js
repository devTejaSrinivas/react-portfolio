const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

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
