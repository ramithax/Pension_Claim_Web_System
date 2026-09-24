

import heroImage from "../../assets/about-hero.png";

// Add these imports when you have the images:
// import purposeImage from "../../assets/about-purpose.png";
// import registerImage from "../../assets/register.png";
// import submitImage from "../../assets/submit.png";
// import reviewImage from "../../assets/review.png";
// import decisionImage from "../../assets/decision.png";

export function About() {
    return (
        <>

            <main className="bg-white">

                {/* Hero */}
                <section className="pt-32 pb-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

                            <div className="max-w-3xl">
                                <p className="text-sm font-semibold tracking-[0.2em] text-gray-500 uppercase mb-5">
                                    About the Portal
                                </p>

                                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-black leading-[1.05]">
                                    Supporting those who
                                    <span className="block text-gray-500">
                                        served our nation.
                                    </span>
                                </h1>

                                <p className="mt-8 max-w-2xl text-lg sm:text-xl text-gray-600 leading-8">
                                    The Pension Claim Portal provides a simple and
                                    transparent way for government employees and
                                    their eligible nominees to submit and manage
                                    pension-related applications.
                                </p>
                            </div>

                            {/* Hero Image */}
                            <div className="relative">
                                <div className="overflow-hidden rounded-3xl">
                                    <img
                                        src={heroImage}
                                        alt="Elderly couple representing pension and retirement"
                                        className="w-full h-[420px] sm:h-[500px] object-cover"
                                    />
                                </div>

                                <div className="absolute -bottom-5 -left-5 bg-white border border-gray-200 rounded-2xl px-6 py-5 shadow-sm">
                                    <p className="text-sm font-semibold text-black">
                                        A simpler pension experience
                                    </p>
                                    <p className="text-sm text-gray-500 mt-1">
                                        Built around people
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Mission */}
                <section className="bg-gray-50 py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                            {/* Purpose Image - Add later */}
                            {/*
                            <div className="order-2 lg:order-1">
                                <div className="overflow-hidden rounded-3xl">
                                    <img
                                        src={purposeImage}
                                        alt="Pension documents and application process"
                                        className="w-full h-[420px] object-cover"
                                    />
                                </div>
                            </div>
                            */}

                            <div className="lg:col-span-2">
                                <p className="text-sm font-semibold tracking-[0.2em] text-gray-500 uppercase mb-5">
                                    Our Purpose
                                </p>

                                <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-black leading-tight max-w-3xl">
                                    Making pension services
                                    <span className="text-gray-500">
                                        {" "}simpler and more accessible.
                                    </span>
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                                    <p className="text-lg text-gray-600 leading-8">
                                        Applying for a pension can involve important
                                        personal information, supporting documents,
                                        and an administrative review process.
                                    </p>

                                    <p className="text-lg text-gray-600 leading-8">
                                        This portal brings these steps together in
                                        one place, allowing applicants to submit
                                        their information digitally while giving
                                        administrators a structured way to review
                                        applications.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* What We Provide */}
                <section className="py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                        <div className="max-w-2xl mb-14">
                            <p className="text-sm font-semibold tracking-[0.2em] text-gray-500 uppercase mb-4">
                                What We Provide
                            </p>

                            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-black">
                                One place for the
                                <span className="text-gray-500">
                                    {" "}essential steps.
                                </span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                            {/* Pensioner */}
                            <div className="border border-gray-200 rounded-2xl p-8 hover:border-gray-400 transition-colors">
                                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-7">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15.75 6.75a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a7.5 7.5 0 0 1 15 0"
                                        />
                                    </svg>
                                </div>

                                <h3 className="text-xl font-semibold text-black mb-3">
                                    Pensioner Services
                                </h3>

                                <p className="text-gray-600 leading-7">
                                    Government employees can submit their
                                    pension application and provide the
                                    required information and documents.
                                </p>
                            </div>

                            {/* Nominee */}
                            <div className="border border-gray-200 rounded-2xl p-8 hover:border-gray-400 transition-colors">
                                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-7">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M18 18.75a6 6 0 0 0-12 0M12 12.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5ZM21 18.75a6 6 0 0 0-3.75-5.66M18 5.25a3.75 3.75 0 0 1 0 7.5"
                                        />
                                    </svg>
                                </div>

                                <h3 className="text-xl font-semibold text-black mb-3">
                                    Nominee Services
                                </h3>

                                <p className="text-gray-600 leading-7">
                                    Registered nominees can provide the
                                    necessary information and documents
                                    associated with a pension application.
                                </p>
                            </div>

                            {/* Review */}
                            <div className="border border-gray-200 rounded-2xl p-8 hover:border-gray-400 transition-colors">
                                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-7">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                        />
                                    </svg>
                                </div>

                                <h3 className="text-xl font-semibold text-black mb-3">
                                    Application Review
                                </h3>

                                <p className="text-gray-600 leading-7">
                                    Submitted applications are organized for
                                    administrative review, verification, and
                                    processing.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Process */}
                <section className="bg-gray-50 py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <p className="text-sm font-semibold tracking-[0.2em] text-gray-500 uppercase mb-4">
                                How It Works
                            </p>

                            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-black">
                                A straightforward process.
                            </h2>

                            <p className="mt-6 text-lg text-gray-600 leading-8">
                                From registration to a final decision, the
                                portal keeps each stage clear and organized.
                            </p>
                        </div>

                        {/* Timeline */}
                        <div className="relative">

                            {/* Connecting line */}
                            <div className="hidden md:block absolute top-5 left-[12%] right-[12%] h-px bg-gray-300" />

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">

                                {/* Step 01 */}
                                <div className="relative text-center">

                                    <div className="relative mx-auto w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-sm font-semibold z-10">
                                        01
                                    </div>

                                    <h3 className="text-xl font-semibold text-black mt-6 mb-3">
                                        Register
                                    </h3>

                                    <p className="text-gray-600 leading-7 max-w-xs mx-auto">
                                        Provide your basic information and
                                        create your application.
                                    </p>

                                    {/* Add image later */}
                                    {/*
                                    <img
                                        src={registerImage}
                                        alt="Register for pension services"
                                        className="w-full h-48 mt-6 rounded-2xl object-cover"
                                    />
                                    */}

                                </div>

                                {/* Step 02 */}
                                <div className="relative text-center">

                                    <div className="relative mx-auto w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-sm font-semibold z-10">
                                        02
                                    </div>

                                    <h3 className="text-xl font-semibold text-black mt-6 mb-3">
                                        Submit
                                    </h3>

                                    <p className="text-gray-600 leading-7 max-w-xs mx-auto">
                                        Add the required details and supporting
                                        documents.
                                    </p>

                                    {/* Add image later */}
                                    {/*
                                    <img
                                        src={submitImage}
                                        alt="Submit pension application documents"
                                        className="w-full h-48 mt-6 rounded-2xl object-cover"
                                    />
                                    */}

                                </div>

                                {/* Step 03 */}
                                <div className="relative text-center">

                                    <div className="relative mx-auto w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-sm font-semibold z-10">
                                        03
                                    </div>

                                    <h3 className="text-xl font-semibold text-black mt-6 mb-3">
                                        Review
                                    </h3>

                                    <p className="text-gray-600 leading-7 max-w-xs mx-auto">
                                        The submitted application is reviewed
                                        and verified by the administrator.
                                    </p>

                                    {/* Add image later */}
                                    {/*
                                    <img
                                        src={reviewImage}
                                        alt="Pension application review"
                                        className="w-full h-48 mt-6 rounded-2xl object-cover"
                                    />
                                    */}

                                </div>

                                {/* Step 04 */}
                                <div className="relative text-center">

                                    <div className="relative mx-auto w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-sm font-semibold z-10">
                                        04
                                    </div>

                                    <h3 className="text-xl font-semibold text-black mt-6 mb-3">
                                        Decision
                                    </h3>

                                    <p className="text-gray-600 leading-7 max-w-xs mx-auto">
                                        The application is processed and its
                                        status is updated accordingly.
                                    </p>

                                    {/* Add image later */}
                                    {/*
                                    <img
                                        src={decisionImage}
                                        alt="Pension application decision"
                                        className="w-full h-48 mt-6 rounded-2xl object-cover"
                                    />
                                    */}

                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-black rounded-3xl px-8 py-16 sm:px-16 text-center">

                            <h2 className="text-3xl sm:text-4xl font-semibold text-white">
                                Ready to get started?
                            </h2>

                            <p className="mt-5 max-w-xl mx-auto text-gray-300 leading-7">
                                Access our pension services and begin your
                                application through the portal.
                            </p>

                            <a
                                href="/services"
                                className="inline-flex items-center gap-2 mt-8 bg-white text-black px-6 py-3.5 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                            >
                                Explore Pension Services
                                <span className="text-lg">→</span>
                            </a>

                        </div>
                    </div>
                </section>

            </main>
        </>
    );
}