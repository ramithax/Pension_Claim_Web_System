import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { isLoggedIn, logout, getUserName } from "../utils/auth";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const [userInitial, setUserInitial] = useState("U");

    const profileRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const checkLoggedIn = () => {
            setLoggedIn(isLoggedIn());
            const name = getUserName();
            setUserInitial(name ? name.trim().charAt(0).toUpperCase() : "U");
        };

        checkLoggedIn();

        window.addEventListener("storage", checkLoggedIn);
        window.addEventListener("authChange", checkLoggedIn);

        return () => {
            window.removeEventListener("storage", checkLoggedIn);
            window.removeEventListener("authChange", checkLoggedIn);
        };
    }, [location]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                profileRef.current &&
                !profileRef.current.contains(event.target)
            ) {
                setProfileOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleLogout = () => {
        logout();

        setLoggedIn(false);
        setProfileOpen(false);
        setIsOpen(false);

        navigate("/");
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
                : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">

                    {/* Logo */}
                    <Link
                        to="/"
                        className="text-xl font-semibold text-black"
                    >
                        Pension Portal
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">

                        <Link
                            to="/"
                            className="text-black font-medium hover:text-gray-600 transition-colors"
                        >
                            Home
                        </Link>

                        <Link
                            to="/eligibility"
                            className="text-black font-medium hover:text-gray-600 transition-colors"
                        >
                            Eligibility
                        </Link>

                        <Link
                            to="/documents"
                            className="text-black font-medium hover:text-gray-600 transition-colors"
                        >
                            Documents
                        </Link>

                        <Link
                            to="/about"
                            className="text-black font-medium hover:text-gray-600 transition-colors"
                        >
                            About us
                        </Link>

                        {!loggedIn ? (
                            <Link
                                to="/login"
                                className="bg-black text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm"
                            >
                                Login
                            </Link>
                        ) : (
                            <div
                                ref={profileRef}
                                className="relative"
                            >
                                <button
                                    onClick={() =>
                                        setProfileOpen(!profileOpen)
                                    }
                                    className="w-9 h-9 rounded-full bg-gray-900 text-white flex items-center justify-center font-medium hover:bg-gray-800 transition-colors"
                                    aria-label="Profile menu"
                                >
                                    {userInitial}
                                </button>

                                {profileOpen && (
                                    <div className="absolute right-0 mt-3 w-44 rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden">
                                        <Link
                                            to="/profile"
                                            onClick={() =>
                                                setProfileOpen(false)
                                            }
                                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                                        >
                                            My Profile
                                        </Link>

                                        <button
                                            onClick={handleLogout}
                                            className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-black focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
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
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
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
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100">
                    <div className="px-4 py-4 space-y-4 flex flex-col">

                        <Link
                            to="/"
                            className="text-black font-medium hover:text-gray-600"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </Link>

                        <Link
                            to="/eligibility"
                            className="text-black font-medium hover:text-gray-600"
                            onClick={() => setIsOpen(false)}
                        >
                            Eligibility
                        </Link>

                        <Link
                            to="/documents"
                            className="text-black font-medium hover:text-gray-600"
                            onClick={() => setIsOpen(false)}
                        >
                            Documents
                        </Link>

                        <Link
                            to="/about"
                            className="text-black font-medium hover:text-gray-600"
                            onClick={() => setIsOpen(false)}
                        >
                            About us
                        </Link>

                        {!loggedIn ? (
                            <Link
                                to="/login"
                                className="bg-black text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm text-center"
                                onClick={() => setIsOpen(false)}
                            >
                                Login
                            </Link>
                        ) : (
                            <>
                                <Link
                                    to="/profile"
                                    className="text-black font-medium hover:text-gray-600"
                                    onClick={() => setIsOpen(false)}
                                >
                                    My Profile
                                </Link>

                                <button
                                    onClick={handleLogout}
                                    className="bg-black text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm text-center"
                                >
                                    Logout
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;