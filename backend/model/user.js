const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ["user", "admin"],
            default: "user",
        },
        subscription: {
            type: String,
            enum: ["enterprise", "premium"],
            default: "user",
        },
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = model("User", UserSchema);