import mongoose from "mongoose";

const pensionerSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true,
        },

        employeeId: {
            type: String,
            required: true,
            unique: true,
            trim: true,
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

        employmentStatus: {
            type: String,
            enum: ["Working", "Retired", "Deceased"],
            default: "Working",
        },

        pensionStatus: {
            type: String,
            enum: [
                "NotApplied",
                "Pending",
                "Approved",
                "Active",
                "TransferredToNominee"
            ],
            default: "NotApplied",
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Pensioner", pensionerSchema);