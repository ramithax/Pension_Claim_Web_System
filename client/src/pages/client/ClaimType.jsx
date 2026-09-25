import { useNavigate } from "react-router-dom";

export function ClaimType() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <main className="flex-1 flex items-center">
                <section className="w-full px-4">
                    <div className="text-center mb-7">
                        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-2">
                            Pension Claim
                        </p>

                        <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
                            How would you like to apply?
                        </h1>

                        <p className="mt-2 text-sm text-gray-500">
                            Select the option that best describes your application.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-xl mx-auto">

                        {/* Pensioner */}
                        <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                            <div className="h-52 overflow-hidden bg-gray-100">
                                <img
                                    src="/pensioner.png"
                                    alt="Pensioner"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="p-5">

                                <h2 className="text-lg font-semibold text-gray-900 flex justify-center">
                                    I am a Pensioner
                                </h2>

                                <p className="mt-2 text-sm text-gray-500 leading-relaxed ">
                                    Apply for your own pension and benefits.
                                </p>

                                <button
                                    onClick={() => navigate("/pensioner")}
                                    className="mt-5 w-full rounded-full bg-gray-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
                                >
                                    Continue
                                    <span className="ml-2">→</span>
                                </button>
                            </div>
                        </div>

                        {/* Nominee */}
                        <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                            <div className="h-52 overflow-hidden bg-gray-100">
                                <img
                                    src="/nominee.png"
                                    alt="Nominee"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="p-5">

                                <h2 className="text-lg font-semibold text-gray-900 flex justify-center">
                                    I am a Nominee
                                </h2>

                                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                                    Apply for pension benefits as a nominee.
                                </p>

                                <button
                                    onClick={() => navigate("/nominee")}
                                    className="mt-5 w-full rounded-full bg-gray-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
                                >
                                    Continue
                                    <span className="ml-2">→</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
        </div>
    );
}


