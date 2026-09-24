
export function Homepage() {
    return (
        <>

            <main>
                <section
                    id="home"
                    className="relative min-h-screen flex items-center overflow-hidden"
                >
                    {/* Hero Image */}
                    <img
                        src="../../src/assets/hero.png"
                        alt="Elderly couple enjoying a peaceful retirement"
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-white/40"></div>

                    {/* Content */}
                    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-xl pt-20">
                            <p className="text-sm font-semibold tracking-[0.2em] text-gray-600 uppercase mb-5">
                                Pension Services
                            </p>

                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-black leading-[1.05]">
                                Your Service Deserves
                                <span className="block text-gray-600">
                                    a Secure Future.
                                </span>
                            </h1>

                            <p className="mt-7 max-w-lg text-lg leading-8 text-gray-600">
                                After years of dedicated service, your future deserves
                                care and security. Our pension portal makes it easier
                                to submit your claim and stay informed throughout the process.
                            </p>

                            <div className="mt-9">
                                <a
                                    href="/services"
                                    className="inline-flex items-center gap-2 bg-black text-white px-6 py-3.5 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                                >
                                    Explore Pension Services
                                    <span className="text-lg">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-white py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                        {/* Section Heading */}
                        <div className="max-w-2xl mb-14">
                            <p className="text-sm font-semibold tracking-[0.2em] text-gray-500 uppercase mb-4">
                                A Simple Experience
                            </p>

                            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-black leading-tight">
                                Designed to make your
                                <span className="text-gray-500"> pension journey easier.</span>
                            </h2>
                        </div>

                        {/* Information Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                            {/* Card 1 */}
                            <div className="group border border-gray-200 rounded-2xl p-8 hover:border-gray-400 hover:shadow-lg transition-all duration-300">
                                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-7">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6 text-gray-700"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                        />
                                    </svg>
                                </div>

                                <h3 className="text-xl font-semibold text-black mb-3">
                                    Simple Process
                                </h3>

                                <p className="text-gray-600 leading-7">
                                    Submit your pension information through a clear and
                                    straightforward application process.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="group border border-gray-200 rounded-2xl p-8 hover:border-gray-400 hover:shadow-lg transition-all duration-300">
                                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-7">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6 text-gray-700"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9 12.75 11.25 15 15 9.75m-3-9.75a9 9 0 1 0 9 9 9 9 0 0 0-9-9Z"
                                        />
                                    </svg>
                                </div>

                                <h3 className="text-xl font-semibold text-black mb-3">
                                    Secure & Reliable
                                </h3>

                                <p className="text-gray-600 leading-7">
                                    Your submitted information is handled through a secure
                                    digital process designed to protect your details.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="group border border-gray-200 rounded-2xl p-8 hover:border-gray-400 hover:shadow-lg transition-all duration-300">
                                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-7">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6 text-gray-700"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                        />
                                    </svg>
                                </div>

                                <h3 className="text-xl font-semibold text-black mb-3">
                                    Stay Informed
                                </h3>

                                <p className="text-gray-600 leading-7">
                                    Keep track of your application and stay informed as your
                                    pension claim moves through the review process.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>


            </main>

        </>
    );
}
