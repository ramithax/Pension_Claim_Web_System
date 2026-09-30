import mongoose from "mongoose";

const documentSchema = new mongoose.Schema(
    {
        claimId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "PensionClaim",
            required: true
        },

        documentType: {
            type: String,
            enum: [
                "nic",
                "birth_certificate",
                "death_certificate",
                "service_letter",
                "relationship_document",
                "bank_passbook",
                "pension_document",
                "other"
            ],
            required: true
        },

        fileUrl: {
            type: String,
            required: true
        },

        status: {
            type: String,
            enum: [
                "pending",
                "verified",
                "rejected"
            ],
            default: "pending"
        },

        remarks: {
            type: String,
            trim: true
        },

        uploadedAt: {
            type: Date,
            default: Date.now
        }
    },
    {
        timestamps: true
    }
);

const Document = mongoose.model(
    "Document",
    documentSchema
);

export default Document;