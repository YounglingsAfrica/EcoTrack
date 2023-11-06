const mongoose = require("mongoose");
const { Schema } = mongoose;
mongoose.connect(process.env.MONGO_URL);

const UserSchema = new Schema(
    {
        name: {
            type: String,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;