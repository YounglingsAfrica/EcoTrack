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
        phoneNumber: {
            type: String,
            default: null,
        },
        avatar: {
            path: {
                type: String,
                default: null
            },
            contentType: {
                type: String,
                default: null
            }
        },
        isConfirmed: {
            type: Boolean,
            default: false
        },
        confirmationToken: {
            type: String,
            default: null
        }
    },
    { timestamps: true }
);

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;