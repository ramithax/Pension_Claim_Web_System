import mongoose from "mongoose";

const nominationSchema = new mongoose.Schema(
    {
        employeeId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Pensioner",
            required: true,
        },

        nomineeUserId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: null,
        },

        nomineeName: {
            type: String,
            required: true,
            trim: true,
        },

        nomineeNic: {
            type: String,
            required: true,
            trim: true,
        },

        nomineePhone: {
            type: String,
            required: true,
            trim: true,
        },

        relationship: {
            type: String,
            required: true,
            trim: true,
        },

        status: {
            type: String,
            enum: ["Pending", "Linked", "Active"],
            default: "Pending",
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Nomination", nominationSchema);