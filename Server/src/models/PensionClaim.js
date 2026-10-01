import mongoose from "mongoose";

const pensionClaimSchema = new mongoose.Schema(
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

        status: {
            type: String,
            enum: ["Pending", "Approved", "Rejected"],
            default: "Pending",
        },

        submittedAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("PensionClaim", pensionClaimSchema);