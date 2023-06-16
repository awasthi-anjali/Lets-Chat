const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const colors = require("colors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes")
const { notFound, errorHandler }=require("./middleware/errorMiddleware")

dotenv.config();
connectDB();
const app = express();

app.use(express.json()); //to accept json data

app.get("/", (req, res) => {
  res.send("API is running Successfully");
});

app.use('/api/user',userRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 8080;
app.listen(8080, () => {
  console.log(`Server Started on PORT ${PORT}.`.yellow.bold);
});
