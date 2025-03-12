const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv"); // package used to load the environment variables as needed

dotenv.config(); // Loads the variables into the process.env object , which can be used to access the variables

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(
  cors({
    origin: "https://tejasrinivas.netlify.app",
  })
);

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
  try {
    const { name, email, message } = req.body;
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.status(201).send("Message sent succesfully ");
  } catch (error) {
    res.status(500).error(`Error :${error}`);
  }
});

app.listen(port, () => {
  console.log("Server is running on port 5000");
});
