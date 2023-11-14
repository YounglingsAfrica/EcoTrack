const express = require("express");
const dotenv = require("dotenv")
dotenv.config();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

// db connection
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("Database connected"))
.catch((err) => console.log("Database not connected", err))

// middleware
app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({extended: false}))
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use("/", require("./routes/userRouter"))

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on ${port}`));