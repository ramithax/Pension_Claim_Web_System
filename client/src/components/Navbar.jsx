import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // Detect scroll to change navbar background
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/90 backdrop-blur-md shadow-sm py-3'
                : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">

                    {/* Logo */}
                    <a href="#" className="text-xl font-semibold text-black">
                        Pension Portal
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="/" className="text-black font-medium hover:text-gray-600 transition-colors">Home</a>
                        <a href="/eligibility" className="text-black font-medium hover:text-gray-600 transition-colors">Eligibility</a>
                        <a href="/documents" className="text-black font-medium hover:text-gray-600 transition-colors">Documents</a>
                        <a href="/about" className="text-black font-medium hover:text-gray-600 transition-colors">About us</a>

                        {/* CTA Button */}
                        <a href="/claim-type" className="bg-black text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm">
                            Apply Now
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-black focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100">
                    <div className="px-4 py-4 space-y-4 flex flex-col">
                        <a href="#home" className="text-black font-medium hover:text-gray-600 block" onClick={() => setIsOpen(false)}>Home</a>
                        <a href="#eligibility" className="text-black font-medium hover:text-gray-600 block" onClick={() => setIsOpen(false)}>Eligibility</a>
                        <a href="#documents" className="text-black font-medium hover:text-gray-600 block" onClick={() => setIsOpen(false)}>Documents</a>
                        <a href="#contact" className="text-black font-medium hover:text-gray-600 block" onClick={() => setIsOpen(false)}>Contact</a>
                        <a href="#apply" className="bg-black text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm text-center block" onClick={() => setIsOpen(false)}>
                            Apply Now
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;