const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv"); // package used to load the environment variables as needed
const nodemailer = require("nodemailer"); // Used to send mails from the server
const { info } = require("console");

dotenv.config(); // Loads the variables into the process.env object , which can be used to access the variables

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use(
  cors({
    origin: "*", // Allow requests from any origin
  })
);

// Email Configuration

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Connection with the MongoDB Atlas database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
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

// Listen for changes in MongoDB

const db = mongoose.connection;
db.once("open", () => {
  const collection = db.collection("messages");
  const changeStream = collection.watch();

  console.log("Listening for changes in the DB");
  changeStream.on("change", (change) => {
    if (change.operationType === "insert") {
      const newRecord = change.fullDocument;

      // Mail template
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: "tejasrinivassjps@gmail.com",
        subject: "New message",
        text: `A new message is added \n\n ${JSON.stringify(
          newRecord,
          null,
          2
        )}`,
      };

      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.error("Error sending email ", err);
        } else {
          console.log("Email sent : ", info.response);
        }
      });
    }
  });
});
