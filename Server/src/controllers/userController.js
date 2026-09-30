import User from "../models/User.js";

export const createUser = async (req, res) => {
    try {
        const {
            fullName,
            nic,
            email,
            phone,
            dateOfBirth,
            address,
            role
        } = req.body;

        if (
            !fullName ||
            !nic ||
            !email ||
            !phone ||
            !dateOfBirth ||
            !address ||
            !role
        ) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        if (!["pensioner", "nominee"].includes(role)) {
            return res.status(400).json({
                message: "Invalid user role"
            });
        }

        const existingUser = await User.findOne({ nic });

        if (existingUser) {
            return res.status(409).json({
                message: "A user with this NIC already exists"
            });
        }

        const user = await User.create({
            fullName,
            nic,
            email,
            phone,
            dateOfBirth,
            address,
            role
        });

        res.status(201).json({
            message: "User created successfully",
            userId: user._id,
            user: {
                id: user._id,
                fullName: user.fullName,
                nic: user.nic,
                email: user.email,
                phone: user.phone,
                dateOfBirth: user.dateOfBirth,
                address: user.address,
                role: user.role
            }
        });
    } catch (error) {
        console.error("Create user error:", error);

        res.status(500).json({
            message: "Failed to create user"
        });
    }
};