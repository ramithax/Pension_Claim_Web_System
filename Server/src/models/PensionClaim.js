import mongoose from "mongoose";

const pensionClaimSchema = new mongoose.Schema(
    {
        pensionerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        applicantId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        claimType: {
            type: String,
            enum: ["pensioner", "nominee"],
            required: true
        },

        status: {
            type: String,
            enum: [
                "draft",
                "submitted",
                "under_review",
                "approved",
                "rejected"
            ],
            default: "draft"
        },

        pensionNumber: {
            type: String,
            trim: true
        },

        submittedAt: {
            type: Date
        }
    },
    {
        timestamps: true
    }
);

const PensionClaim = mongoose.model(
    "PensionClaim",
    pensionClaimSchema
);

export default PensionClaim;