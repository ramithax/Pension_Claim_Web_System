import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function PensionerDetails() {
    const navigate = useNavigate();
    const location = useLocation();

    const userId = location.state?.userId;

    const [formData, setFormData] = useState({
        employeeId: "",
        nic: "",
        dateOfBirth: "",
        address: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleNext = async (e) => {
        e.preventDefault();

        if (!userId) {
            alert("User information is missing. Please start again.");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch(
                "http://localhost:5000/api/pensioners",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        userId,
                        employeeId: formData.employeeId,
                        nic: formData.nic,
                        dateOfBirth: formData.dateOfBirth,
                        address: formData.address,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                alert(data.message);
                return;
            }

            navigate("/pensioner/documents", {
                state: {
                    userId,
                    pensionerId: data.pensionerId,
                },
            });
        } catch (error) {
            console.error(error);
            alert("Unable to save pensioner details.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-4 pt-12">
            <main className="w-full max-w-xl">
                <div className="text-center mb-6">
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-2">
                        Pension Claim
                    </p>

                    <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
                        Pensioner Details
                    </h1>

                    <p className="mt-2 text-sm text-gray-500">
                        Please provide your pension and personal information.
                    </p>
                </div>

                <form
                    onSubmit={handleNext}
                    className="border border-gray-200 rounded-2xl p-6"
                >
                    <div className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Employee ID
                            </label>

                            <input
                                type="text"
                                name="employeeId"
                                value={formData.employeeId}
                                onChange={handleChange}
                                placeholder="Enter your employee ID"
                                required
                                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-gray-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                NIC
                            </label>

                            <input
                                type="text"
                                name="nic"
                                value={formData.nic}
                                onChange={handleChange}
                                placeholder="Enter your NIC number"
                                required
                                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-gray-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Date of Birth
                            </label>

                            <input
                                type="date"
                                name="dateOfBirth"
                                value={formData.dateOfBirth}
                                onChange={handleChange}
                                required
                                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-gray-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Address
                            </label>

                            <textarea
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                placeholder="Enter your address"
                                required
                                rows="3"
                                className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-gray-400"
                            />
                        </div>
                    </div>

                    <div className="mt-6 pt-5 border-t border-gray-100 flex justify-center">
                        <button
                            type="submit"
                            disabled={loading}
                            className="rounded-full bg-gray-900 px-7 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800 disabled:opacity-50"
                        >
                            {loading ? "Saving..." : "Continue"}
                            {!loading && (
                                <span className="ml-2">→</span>
                            )}
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
}