import mongoose from "mongoose";

const documentSchema = new mongoose.Schema(
    {
        claimId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "PensionClaim",
            required: true,
        },

        documentType: {
            type: String,
            required: true,
            trim: true,
        },

        fileUrl: {
            type: String,
            required: true,
        },

        status: {
            type: String,
            enum: ["Pending", "Approved", "Resubmit", "Rejected"],
            default: "Pending",
        },

        adminComment: {
            type: String,
            default: "",
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Document", documentSchema);