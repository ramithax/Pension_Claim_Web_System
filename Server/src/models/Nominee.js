import mongoose from "mongoose";

const nomineeSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true,
        },

        nic: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },

        gender: {
            type: String,
            enum: ["Male", "Female"],
            required: true,
        },

        dateOfBirth: {
            type: Date,
            required: true,
        },

        address: {
            type: String,
            required: true,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Nominee", nomineeSchema);