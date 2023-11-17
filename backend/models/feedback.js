const mongoose = require("mongoose");
const { Schema } = mongoose;
mongoose.connect(process.env.MONGO_URL);

const feedbackSchema = new Schema({
    userId:{
        type: String,
        required: true
    },
    Q1:{
        type: String,
        required: true
    },
    Q2:{
        type: String,
        required: true
    },
    Q3:{
        type: String,
        required: true
    },
    Q4:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

const FeedbackModel = mongoose.model("Feedback", feedbackSchema);

module.exports = FeedbackModel;