import { useNavigate } from "react-router-dom";

export function Eligibility() {
    const navigate = useNavigate();

    const rules = [
        "This service is intended only for eligible government pension claims.",
        "The applicant must be a government employee or an authorized nominee eligible to claim pension benefits.",
        "All information provided in the application must be accurate and complete.",
        "The applicant must provide the required supporting documents for verification.",
        "Documents submitted must be valid, clear, and readable.",
        "Applications may be reviewed and verified by the relevant pension authority.",
        "Providing false or misleading information may result in the application being rejected.",
        "Additional information or documents may be requested during the verification process."
    ];

    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-4 py-10">
            <main className="w-full max-w-3xl">
                <div className="text-center mb-8">
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-2">
                        Pension Claim
                    </p>

                    <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
                        Eligibility Requirements
                    </h1>

                    <p className="text-lg text-gray-900 mb-5">
                        Before You Apply
                    </p>
                </div>

                <div className="border border-gray-200 rounded-2xl p-6 md:p-8">


                    <div className="space-y-4">
                        {rules.map((rule, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium text-gray-600">
                                    {index + 1}
                                </span>

                                <p className="text-sm text-gray-600 leading-relaxed pt-0.5">
                                    {rule}
                                </p>
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={() => navigate("/documents")}
                        className="mt-5 mx-auto block rounded-full bg-gray-900 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
                    >
                        Continue to Documents
                        <span className="ml-2">→</span>
                    </button>
                </div>
            </main>
        </div>
    );
}