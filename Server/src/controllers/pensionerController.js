import Pensioner from "../models/Pensioner.js";
import User from "../models/User.js";

export const createPensioner = async (req, res) => {
    try {
        const {
            userId,
            employeeId,
            nic,
            dateOfBirth,
            address,
        } = req.body;

        if (
            !userId ||
            !employeeId ||
            !nic ||
            !dateOfBirth ||
            !address
        ) {
            return res.status(400).json({
                message: "All fields are required.",
            });
        }

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({
                message: "User not found.",
            });
        }

        const existingPensioner = await Pensioner.findOne({
            userId,
        });

        if (existingPensioner) {
            return res.status(409).json({
                message: "Pensioner details already exist.",
            });
        }

        const existingEmployee = await Pensioner.findOne({
            employeeId,
        });

        if (existingEmployee) {
            return res.status(409).json({
                message: "Employee ID already exists.",
            });
        }

        const existingNic = await Pensioner.findOne({
            nic,
        });

        if (existingNic) {
            return res.status(409).json({
                message: "NIC already exists.",
            });
        }

        const pensioner = await Pensioner.create({
            userId,
            employeeId,
            nic,
            dateOfBirth,
            address,
        });

        return res.status(201).json({
            message: "Pensioner details saved successfully.",
            pensionerId: pensioner._id,
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Something went wrong.",
        });
    }
};