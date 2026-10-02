import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function PensionerDetails() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        employeeId: "",
        nic: "",
        dateOfBirth: "",
        gender: "",
        address: "",
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        setError("");
    };

    const validateForm = () => {
        const employeeId = formData.employeeId.trim();
        const nic = formData.nic.trim();
        const dateOfBirth = formData.dateOfBirth;
        const gender = formData.gender;
        const address = formData.address.trim();

        if (!employeeId) {
            return "Employee ID is required.";
        }

        if (!/^\d{6}$/.test(employeeId)) {
            return "Employee ID must contain exactly 6 digits.";
        }

        if (!nic) {
            return "NIC number is required.";
        }

        const oldNicPattern = /^\d{9}[VXvx]$/;
        const newNicPattern = /^\d{12}$/;

        if (
            !oldNicPattern.test(nic) &&
            !newNicPattern.test(nic)
        ) {
            return "Please enter a valid NIC number.";
        }

        if (!dateOfBirth) {
            return "Date of birth is required.";
        }

        const selectedDate = new Date(dateOfBirth);
        const today = new Date();

        selectedDate.setHours(0, 0, 0, 0);
        today.setHours(0, 0, 0, 0);

        if (selectedDate > today) {
            return "Date of birth cannot be in the future.";
        }

        if (!gender) {
            return "Please select your gender.";
        }

        if (!address) {
            return "Address is required.";
        }

        if (address.length < 10) {
            return "Please enter a complete address.";
        }

        return "";
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");

        const validationError = validateForm();

        if (validationError) {
            setError(validationError);
            return;
        }

        setLoading(true);

        try {
            const token = localStorage.getItem("token");

            if (!token) {
                navigate("/login");
                return;
            }

            const response = await fetch(
                "http://localhost:5000/api/pensioners",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        employeeId: formData.employeeId.trim(),
                        nic: formData.nic.trim().toUpperCase(),
                        dateOfBirth: formData.dateOfBirth,
                        gender: formData.gender,
                        address: formData.address.trim(),
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setError(
                    data.message ||
                    "Unable to save pensioner details."
                );
                return;
            }

            navigate("/pensioner/documents");
        } catch (error) {
            console.error(error);

            setError(
                "Unable to connect to the server."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-4 py-8">
            <main className="w-full max-w-2xl">

                {/* Header */}
                <div className="text-center mb-6">
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-2">
                        Pension Claim
                    </p>

                    <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
                        Pensioner Details
                    </h1>

                    <p className="mt-2 text-sm text-gray-500">
                        Enter your personal and employment details to continue.
                    </p>
                </div>

                {/* Form Card */}
                <div className="border border-gray-200 rounded-2xl p-6">

                    {error && (
                        <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                            {error}
                        </div>
                    )}

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-4"
                    >

                        {/* Employee ID + NIC */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                            <div>
                                <label
                                    htmlFor="employeeId"
                                    className="text-sm font-medium text-gray-700"
                                >
                                    Employee ID
                                </label>

                                <input
                                    id="employeeId"
                                    type="text"
                                    name="employeeId"
                                    value={formData.employeeId}
                                    onChange={handleChange}
                                    required
                                    maxLength={6}
                                    inputMode="numeric"
                                    placeholder="6-digit employee ID"
                                    className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-400"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="nic"
                                    className="text-sm font-medium text-gray-700"
                                >
                                    National Identity Card
                                </label>

                                <input
                                    id="nic"
                                    type="text"
                                    name="nic"
                                    value={formData.nic}
                                    onChange={handleChange}
                                    required
                                    maxLength={12}
                                    placeholder="Enter NIC number"
                                    className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm uppercase outline-none focus:border-gray-400"
                                />
                            </div>

                        </div>

                        {/* DOB + Gender */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                            <div>
                                <label
                                    htmlFor="dateOfBirth"
                                    className="text-sm font-medium text-gray-700"
                                >
                                    Date of Birth
                                </label>

                                <input
                                    id="dateOfBirth"
                                    type="date"
                                    name="dateOfBirth"
                                    value={formData.dateOfBirth}
                                    onChange={handleChange}
                                    required
                                    max={new Date()
                                        .toISOString()
                                        .split("T")[0]}
                                    className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-400"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="gender"
                                    className="text-sm font-medium text-gray-700"
                                >
                                    Gender
                                </label>

                                <select
                                    id="gender"
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-gray-400"
                                >
                                    <option value="">
                                        Select gender
                                    </option>

                                    <option value="Male">
                                        Male
                                    </option>

                                    <option value="Female">
                                        Female
                                    </option>
                                </select>
                            </div>

                        </div>

                        {/* Address */}
                        <div>
                            <label
                                htmlFor="address"
                                className="text-sm font-medium text-gray-700"
                            >
                                Address
                            </label>

                            <textarea
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                                rows="2"
                                placeholder="Enter your residential address"
                                className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none resize-none focus:border-gray-400"
                            />
                        </div>

                        {/* Button */}
                        <div className="pt-4 border-t border-gray-100 flex justify-center">
                            <button
                                type="submit"
                                disabled={loading}
                                className="rounded-full bg-gray-900 px-7 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800 disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {loading ? "Saving..." : "Continue"}

                                {!loading && (
                                    <span className="ml-2">
                                        →
                                    </span>
                                )}
                            </button>
                        </div>

                    </form>
                </div>
            </main>
        </div>
    );
}
