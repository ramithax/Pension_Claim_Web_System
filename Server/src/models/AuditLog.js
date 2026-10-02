import mongoose from "mongoose";

const auditLogSchema = new mongoose.Schema(
    {
        entityType: {
            type: String,
            enum: ["PensionClaim", "Document"],
            required: true,
        },

        entityId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },

        action: {
            type: String,
            required: true,
            trim: true,
        },

        previousStatus: {
            type: String,
            default: null,
        },

        newStatus: {
            type: String,
            default: null,
        },

        performedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        comment: {
            type: String,
            default: "",
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("AuditLog", auditLogSchema);