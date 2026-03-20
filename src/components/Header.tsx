import React, { useState } from 'react'

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const navItems = [
        {
            name: "About",
            submenu: ["Our Mission", "Our Vision", "Core Values", "Locations"],
        },
        {
            name: "Next Steps",
            submenu: ["Salvation", "Water Baptism", "Small Groups", "Outreache"],
        },
        {
            name: "Events",
            submenu: null,
        },
        {
            name: "Care",
            submenu: ["Care", "Prayer Request", "Counseling"],
        },
        {
            name: "Give",
            submenu: null,
        },
        {
            name: "Sermons",
            submenu: ["Sermons", "Podcast", "Watch Live"],
            align: "right",
        },
    ];

    return (
        <nav className="w-full bg-gradient-to-b from-black/80 to-transparent fixed top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <h3 className='font-bold text-lg md:text-3xl text-white'>
                            A House of Champions
                        </h3>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex gap-2 lg:gap-10 items-center">
                        {navItems.map((item, index) => (
                            <li
                                key={item.name}
                                className="relative group"
                                onMouseEnter={() => setOpenDropdown(index)}
                                onMouseLeave={() => setOpenDropdown(null)}
                            >
                                {/* Main Link */}
                                <a
                                    href="#"
                                    className="
                                        relative font-medium text-white text-sm lg:text-base
                                        px-3 py-2 pb-1 transition-all duration-500

                                        after:content-[''] after:absolute after:left-0 after:-bottom-1
                                        after:h-[2px] after:w-full after:bg-white
                                        after:scale-x-0 after:origin-center
                                        after:transition-transform after:duration-500
                                        hover:after:scale-x-100
                                    "
                                >
                                    {item.name}
                                </a>

                                {/* Desktop Dropdown */}
                                {item.submenu && (
                                    <div
                                        className={`
                                            absolute top-full mt-3 w-48 bg-white shadow-lg rounded-md
                                            transition-all duration-500 border border-gray-200
                                            ${item.align === "right" ? "right-0" : "left-0"}
                                            ${
                                                openDropdown === index
                                                    ? "opacity-100 translate-y-0 visible"
                                                    : "opacity-0 translate-y-2 invisible"
                                            }
                                        `}
                                    >
                                        <ul className="py-2">
                                            {item.submenu.map((sub) => (
                                                <li key={sub}>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 transition"
                                                    >
                                                        {sub}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 transition"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {mobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <>
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 12h14"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M7 8h12"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 16h10"
                                    />
                                </>
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden border-t border-gray-700 py-4">
                        <ul className="space-y-2">
                            {navItems.map((item, index) => (
                                <li key={item.name}>
                                    <button
                                        onClick={() =>
                                            setOpenDropdown(
                                                openDropdown === index ? null : index
                                            )
                                        }
                                        className="w-full text-left px-3 py-2 rounded-md text-white hover:bg-white/40 transition flex items-center justify-between font-medium"
                                    >
                                        {item.name}
                                        {item.submenu && (
                                            <svg
                                                className={`h-4 w-4 transition-transform  duration-400 ${
                                                    openDropdown === index
                                                        ? 'rotate-180'
                                                        : ''
                                                }`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                                />
                                            </svg>
                                        )}
                                    </button>

                                    {/* Mobile Dropdown */}
                                    {item.submenu && openDropdown === index && (
                                        <ul className="pl-4 space-y-1 mt-1 transition duration-1000">
                                            {item.submenu.map((sub) => (
                                                <li key={sub}>
                                                    <a
                                                        href="#"
                                                        className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/40 rounded-md transition"
                                                    >
                                                        {sub}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Header
