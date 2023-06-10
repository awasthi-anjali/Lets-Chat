const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const colors = require("colors");
const connectDB = require("./config/db");

const app = express();
dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.send("API is running Successfully");
});
app.get("/api/chat", (req, res) => {
  res.send(chats);
});
app.get("/api/chat/:id", (req, res) => {
  //   console.log(req.params.id);
  const singlechat = chats.find((c) => c._id == req.params.id);
  res.send(singlechat);
});
const PORT = process.env.PORT || 8080;
app.listen(8080, () => {
  console.log(`Server Started on PORT ${PORT}.`.yellow.bold);
});
