import mongoose from "mongoose";

const nomineeClaimSchema = new mongoose.Schema(
    {
        pensionerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Pensioner",
            required: true,
        },

        nomineeId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Nominee",
            required: true,
        },

        nominationId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Nomination",
            required: true,
        },

        status: {
            type: String,
            enum: ["Draft", "Pending", "Approved", "Rejected"],
            default: "Draft",
        },

        submittedAt: {
            type: Date,
            default: null,
        },

        approvedAt: {
            type: Date,
            default: null,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("NomineeClaim", nomineeClaimSchema);