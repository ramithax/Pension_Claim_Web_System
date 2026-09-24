import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-gray-50 border-t border-gray-200 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Column 1: Brand & Description */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-black tracking-tight">Pension Portal</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Empowering our senior citizens with a secure, transparent, and dignified retirement. Your trusted partner for government pension claims.
                        </p>
                        {/* Social Icons (Optional) */}
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="text-gray-500 hover:text-black transition-colors" aria-label="Facebook">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-black transition-colors" aria-label="Twitter">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-black uppercase tracking-wider mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            {['Home', 'Eligibility Criteria', 'Required Documents', 'Track Application', 'Contact Us'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-gray-600 hover:text-black text-sm transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Legal & Help */}
                    <div>
                        <h4 className="text-sm font-semibold text-black uppercase tracking-wider mb-4">Help & Legal</h4>
                        <ul className="space-y-3">
                            {['FAQs', 'Privacy Policy', 'Terms of Service', 'Accessibility', 'Sitemap'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-gray-600 hover:text-black text-sm transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div>
                        <h4 className="text-sm font-semibold text-black uppercase tracking-wider mb-4">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <svg className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                <span className="text-gray-600 text-sm">Department of Pensions, <br />Colombo 07, Sri Lanka</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="w-5 h-5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                <span className="text-gray-600 text-sm">+94 11 234 5678</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="w-5 h-5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                <span className="text-gray-600 text-sm">support@pensionportal.lk</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar: Copyright & Disclaimer */}
                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-gray-500 text-xs text-center md:text-left">
                        &copy; {currentYear} Department of Pensions, Sri Lanka. All rights reserved.
                    </p>
                    <p className="text-gray-400 text-xs text-center md:text-right max-w-md">
                        This is an official government service portal. For emergencies, please contact the relevant authorities directly.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;