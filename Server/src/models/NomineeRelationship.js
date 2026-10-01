import mongoose from "mongoose";

const nomineeRelationshipSchema = new mongoose.Schema(
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

        relationship: {
            type: String,
            required: true,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("NomineeRelationship", nomineeRelationshipSchema);