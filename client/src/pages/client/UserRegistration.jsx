import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { isLoggedIn, login } from "../../utils/auth";

export function UserRegistration() {
    const [searchParams] = useSearchParams();

    const role = searchParams.get("role");

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (isLoggedIn()) {
            const loggedInRole = localStorage.getItem("role");

            if (loggedInRole === "Pensioner") {
                navigate("/pensioner/details", {
                    replace: true,
                });
            }
        }
    }, [navigate]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        setError("");
    };

    const handleNext = async (e) => {
        e.preventDefault();

        setError("");

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            setLoading(true);

            const response = await fetch(
                "http://localhost:5000/api/users/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: formData.name,
                        email: formData.email,
                        password: formData.password,
                        phone: formData.phone,
                        role: role,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setError(
                    data.message || "Unable to create account."
                );
                return;
            }

            login(
                data.token,
                data.userId,
                data.role,
                data.name
            );

            navigate("/pensioner/details");
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
        <div className="min-h-screen bg-white flex items-center justify-center px-4 pt-8">
            <main className="w-full max-w-2xl">
                <div className="text-center mb-6">
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-2">
                        Pension Claim
                    </p>

                    <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
                        New User Registration
                    </h1>

                    <p className="mt-2 text-sm text-gray-500">
                        Enter your details to continue with your pension claim.
                    </p>
                </div>

                <div className="border border-gray-200 rounded-2xl p-6">

                    {error && (
                        <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                            {error}
                        </div>
                    )}

                    <form
                        onSubmit={handleNext}
                        className="space-y-4"
                    >
                        <div>
                            <label className="text-sm font-medium text-gray-700">
                                Full Name
                            </label>

                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Enter your full name"
                                className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-400"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-gray-700">
                                Email Address
                            </label>

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Enter your email"
                                className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-400"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-gray-700">
                                Phone Number
                            </label>

                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                placeholder="Enter your phone number"
                                className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-400"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-medium text-gray-700">
                                    Password
                                </label>

                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    placeholder="Create a password"
                                    className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-400"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-700">
                                    Confirm Password
                                </label>

                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                    placeholder="Confirm your password"
                                    className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-400"
                                />
                            </div>
                        </div>

                        <div className="pt-4 border-t border-gray-100 flex justify-center">
                            <button
                                type="submit"
                                disabled={loading}
                                className="rounded-full bg-gray-900 px-7 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {loading ? "Creating..." : "Next"}

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