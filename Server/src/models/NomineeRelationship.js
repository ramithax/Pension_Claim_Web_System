import mongoose from "mongoose";

const nomineeRelationshipSchema = new mongoose.Schema(
    {
        pensionerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        nomineeId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        relationship: {
            type: String,
            required: true,
            trim: true
        },

        nomineeNumber: {
            type: Number,
            enum: [1, 2],
            required: true
        }
    },
    {
        timestamps: true
    }
);

nomineeRelationshipSchema.index(
    { pensionerId: 1, nomineeNumber: 1 },
    { unique: true }
);

const NomineeRelationship = mongoose.model(
    "NomineeRelationship",
    nomineeRelationshipSchema
);

export default NomineeRelationship;