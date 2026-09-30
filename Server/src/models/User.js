import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
            trim: true
        },

        nic: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },

        phone: {
            type: String,
            required: true,
            trim: true
        },

        dateOfBirth: {
            type: Date,
            required: true
        },

        address: {
            type: String,
            required: true,
            trim: true
        },

        role: {
            type: String,
            enum: ["pensioner", "nominee", "admin"],
            required: true
        },

        password: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

const User = mongoose.model("User", userSchema);

export default User;