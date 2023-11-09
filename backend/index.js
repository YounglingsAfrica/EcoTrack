const express = require("express");
const dotenv = require("dotenv")
dotenv.config();
const { mongoose } = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const multer = require("multer");

const app = express();

//Multer middleware for upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/'); // specify the path to save the file
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname); // give the file a unique name
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5 // limit file size to 5MB
  }
});

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
    origin: process.env.PROD_URL,
    credentials: true,
  })
);

app.use("/", require("./routes/userRouter"))

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on ${port}`));    

module.exports = {upload}