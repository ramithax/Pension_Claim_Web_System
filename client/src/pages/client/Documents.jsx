import { useNavigate } from "react-router-dom";

export function Documents() {
    const navigate = useNavigate();

    const documents = [
        {
            title: "National Identity Card",
            description: "A clear copy of the applicant's valid NIC."
        },
        {
            title: "Pension or Service Details",
            description: "Relevant pension number, service information, or pension records."
        },
        {
            title: "Bank Account Details",
            description: "Valid bank account information for receiving pension payments."
        },
        {
            title: "Service / Employment Records",
            description: "Relevant documents confirming government service and employment details."
        },
        {
            title: "Supporting Certificates",
            description: "Any certificates or records required to support the pension claim."
        },
        {
            title: "Nominee Documents",
            description: "Required identification and supporting documents for nominee applications."
        }
    ];

    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-4">
            <main className="w-full max-w-3xl">
                <div className="text-center mb-6">
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-2">
                        Pension Claim
                    </p>

                    <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
                        Required Documents
                    </h1>

                    <p className="mt-2 text-sm text-gray-500">
                        Please have the following documents ready before continuing.
                    </p>
                </div>

                <div className="border border-gray-200 rounded-2xl p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {documents.map((document, index) => (
                            <div
                                key={index}
                                className="border border-gray-100 rounded-xl p-4 bg-gray-50"
                            >
                                <div className="flex items-start gap-3">
                                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center text-xs font-medium text-gray-600">
                                        {index + 1}
                                    </span>

                                    <div>
                                        <h2 className="text-sm font-semibold text-gray-900">
                                            {document.title}
                                        </h2>

                                        <p className="mt-1 text-xs text-gray-500 leading-relaxed">
                                            {document.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-5 pt-4 border-t border-gray-100 flex justify-center">
                        <button
                            onClick={() => navigate("/claim-type")}
                            className="rounded-full bg-gray-900 px-7 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
                        >
                            Start Application
                            <span className="ml-2">→</span>
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}
