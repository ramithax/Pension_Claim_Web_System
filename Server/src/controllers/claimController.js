import PensionClaim from "../models/PensionClaim.js";
import User from "../models/User.js";

export const createClaim = async (req, res) => {
    try {
        const {
            applicantId,
            claimType
        } = req.body;

        if (!applicantId || !claimType) {
            return res.status(400).json({
                message: "Applicant ID and claim type are required"
            });
        }

        if (!["pensioner", "nominee"].includes(claimType)) {
            return res.status(400).json({
                message: "Invalid claim type"
            });
        }

        const applicant = await User.findById(applicantId);

        if (!applicant) {
            return res.status(404).json({
                message: "Applicant not found"
            });
        }

        if (applicant.role !== claimType) {
            return res.status(400).json({
                message: "User role does not match claim type"
            });
        }

        const claimData = {
            applicantId: applicant._id,
            claimType,
            status: "draft"
        };

        if (claimType === "pensioner") {
            claimData.pensionerId = applicant._id;
        }

        const claim = await PensionClaim.create(claimData);

        res.status(201).json({
            message: "Claim created successfully",
            claimId: claim._id
        });
    } catch (error) {
        console.error("Create claim error:", error);

        res.status(500).json({
            message: "Failed to create claim"
        });
    }
};