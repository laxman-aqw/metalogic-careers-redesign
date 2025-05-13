import React, { useState } from "react";
import metalogo from "../assets/metalogo.png";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isHoveringServices, setIsHoveringServices] = useState(false);

  return (
    <nav className="fixed top-0 z-[1000] w-full bg-white  border-b border-gray-200 shadow-sm px-4 py-3 transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-3 group transition-all duration-300"
        >
          <img
            src={metalogo}
            alt="MetaLogic Logo"
            className="h-10 w-10 transition-transform duration-300 group-hover:scale-110"
          />
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              MetaLogic
            </h1>
            <p className="text-xs text-gray-500 -mt-1">
              Innovate. Create. Elevate.
            </p>
          </div>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6 font-medium text-gray-700">
          <li>
            <a
              href="/"
              className={`relative px-3 py-2 hover:text-blue-600 transition-colors duration-300 group   ${
                location.pathname === "/"
                  ? "text-blue-700 font-medium before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:bg-blue-600 before:rounded-full"
                  : "text-gray-600 hover:text-blue-600 hover:before:absolute hover:before:inset-x-2 hover:before:bottom-0 hover:before:h-0.5 hover:before:bg-blue-100 hover:before:rounded-full"
              }`}
            >
              Home
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-3/4"></span>
            </a>
          </li>

          <li
            className="relative"
            onMouseEnter={() => setIsHoveringServices(true)}
            onMouseLeave={() => setIsHoveringServices(false)}
          >
            <button className="flex items-center gap-1 px-3 py-2 hover:text-blue-600 transition-colors duration-300 group">
              Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 transition-transform duration-200 ${
                  isHoveringServices ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <ul
              className={`absolute top-full left-0 mt-1 w-[40rem] bg-white rounded-lg shadow-xl p-4 grid grid-cols-2 md:grid-cols-3 gap-4 transition-all duration-300 origin-top z-50 ${
                isHoveringServices
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              {[
                {
                  href: "/services/custom-software",
                  title: "Custom Software Development",
                  desc: "Tailored software solutions for your needs.",
                  iconColor: "text-blue-600",
                  iconPath: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18",
                },
                {
                  href: "/services/web",
                  title: "Web Development",
                  desc: "Websites that work on all devices.",
                  iconColor: "text-green-500",
                  iconPath:
                    "M3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4z",
                },
                {
                  href: "/services/mobile-app",
                  title: "Mobile App Development",
                  desc: "Apps for phones and tablets.",
                  iconColor: "text-purple-500",
                  iconPath:
                    "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
                },
                {
                  href: "/services/cloud",
                  title: "Cloud Computing Services",
                  desc: "Use the internet to improve your business.",
                  iconColor: "text-sky-500",
                  iconPath:
                    "M3 15a4 4 0 014-4h1a4 4 0 017.9-.6A3.5 3.5 0 0120 14.5 3.5 3.5 0 0116.5 18H7a4 4 0 01-4-3z",
                },
                {
                  href: "/services/qa-testing",
                  title: "Quality Assurance and Testing",
                  desc: "Checking software for reliability.",
                  iconColor: "text-amber-500",
                  iconPath:
                    "M9 12l2 2 4-4M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z",
                },
                {
                  href: "/services/ui-ux",
                  title: "UI/UX Designing",
                  desc: "Creating user-friendly interfaces.",
                  iconColor: "text-pink-500",
                  iconPath: "M4 6h16M4 12h16M4 18h7",
                },
                {
                  href: "/services/maintenance",
                  title: "Maintenance and Support",
                  desc: "Keeping your software running smoothly.",
                  iconColor: "text-gray-500",
                  iconPath: "M4 4v16h16V4H4zm4 4h8v2H8V8zm0 4h8v2H8v-2z",
                },
                {
                  href: "/services/devops",
                  title: "Dev Ops",
                  desc: "Faster and safer software delivery.",
                  iconColor: "text-red-500",
                  iconPath:
                    "M3 12h3m3 0h4m4 0h3M9 16l-3 4m0-4l3 4M15 8l3-4m0 4l-3-4",
                },
                {
                  href: "/services/blockchain",
                  title: "Blockchain Solutions",
                  desc: "Secure technology for your business.",
                  iconColor: "text-indigo-500",
                  iconPath: "M9 12l2 2 4-4M4 6h16M4 12h16M4 18h16",
                },
              ].map(({ href, title, desc, iconColor, iconPath }) => (
                <li key={href}>
                  <a
                    href={href}
                    className={`flex items-start gap-3 p-3 rounded-lg hover:bg-gray-100 transition-all duration-200 ${
                      location.pathname === href
                        ? "text-blue-700 font-medium"
                        : "text-gray-700"
                    }`}
                  >
                    <svg
                      className={`w-6 h-6 ${iconColor}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={iconPath}
                      />
                    </svg>
                    <div>
                      <p className="font-medium">{title}</p>
                      <p className="text-xs text-gray-500">{desc}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <a
              href="/careers"
              className={`relative px-3 py-2 hover:text-blue-600 transition-colors duration-300 group   ${
                location.pathname === "/careers"
                  ? "text-blue-700 font-medium before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:bg-blue-600 before:rounded-full"
                  : "text-gray-600 hover:text-blue-600 hover:before:absolute hover:before:inset-x-2 hover:before:bottom-0 hover:before:h-0.5 hover:before:bg-blue-100 hover:before:rounded-full"
              }`}
            >
              Careers
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-3/4"></span>
            </a>
          </li>
          <li>
            <a
              href="/blogs"
              className={`relative px-3 py-2 hover:text-blue-600 transition-colors duration-300 group   ${
                location.pathname === "/blogs"
                  ? "text-blue-700 font-medium before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:bg-blue-600 before:rounded-full"
                  : "text-gray-600 hover:text-blue-600 hover:before:absolute hover:before:inset-x-2 hover:before:bottom-0 hover:before:h-0.5 hover:before:bg-blue-100 hover:before:rounded-full"
              }`}
            >
              Blog
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-3/4"></span>
            </a>
          </li>
          <li>
            <a
              href="/about"
              className={`relative px-3 py-2 hover:text-blue-600 transition-colors duration-300 group   ${
                location.pathname === "/about"
                  ? "text-blue-700 font-medium before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:bg-blue-600 before:rounded-full"
                  : "text-gray-600 hover:text-blue-600 hover:before:absolute hover:before:inset-x-2 hover:before:bottom-0 hover:before:h-0.5 hover:before:bg-blue-100 hover:before:rounded-full"
              }`}
            >
              About
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-3/4"></span>
            </a>
          </li>
        </ul>

        {/* Desktop CTA Button */}
        <div className="hidden lg:block">
          <a
            href="/contact"
            className="relative inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full overflow-hidden group transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <span className="relative z-10">Get in Touch</span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none transition-colors duration-200"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen
            ? "max-h-screen opacity-100 mt-4"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white rounded-lg shadow-md p-4 space-y-2">
          <a
            href="/"
            className={`block px-4 py-3 rounded-md hover:bg-gray-50 transition-colors duration-200 font-medium text-gray-800 ${
              location.pathname === "/"
                ? "text-blue-700 font-medium before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:bg-blue-600 before:rounded-full"
                : "text-gray-600 hover:text-blue-600 hover:before:absolute hover:before:inset-x-2 hover:before:bottom-0 hover:before:h-0.5 hover:before:bg-blue-100 hover:before:rounded-full"
            }`}
          >
            Home
          </a>

          <div className="space-y-1">
            <div className="lg:hidden mt-4">
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="flex justify-between w-full px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition"
              >
                <span>Services</span>
                <svg
                  className={`w-5 h-5 transform transition-transform ${
                    isMobileServicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <ul
                className={`transition-all duration-300 ease-in-out overflow-hidden px-4 ${
                  isMobileServicesOpen
                    ? "max-h-[1000px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {[
                  {
                    href: "/services/custom-software",
                    title: "Custom Software Development",
                  },
                  {
                    href: "/services/web",
                    title: "Web Development",
                  },
                  {
                    href: "/services/mobile-app",
                    title: "Mobile App Development",
                  },
                  {
                    href: "/services/cloud",
                    title: "Cloud Computing Services",
                  },
                  {
                    href: "/services/qa-testing",
                    title: "Quality Assurance and Testing",
                  },
                  {
                    href: "/services/ui-ux",
                    title: "UI/UX Designing",
                  },
                  {
                    href: "/services/maintenance",
                    title: "Maintenance and Support",
                  },
                  {
                    href: "/services/devops",
                    title: "Dev Ops",
                  },
                  {
                    href: "/services/blockchain",
                    title: "Blockchain Solutions",
                  },
                ].map(({ href, title }) => (
                  <li key={href}>
                    <a
                      href={href}
                      className={`block px-4 py-2 text-sm rounded-md transition hover:bg-gray-100 ${
                        location.pathname === href
                          ? "text-blue-600 font-medium"
                          : "text-gray-700"
                      }`}
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <a
            href="/careers"
            className={`block px-4 py-3 rounded-md hover:bg-gray-50 transition-colors duration-200 font-medium text-gray-800 ${
              location.pathname === "/careers"
                ? "text-blue-700 font-medium before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:bg-blue-600 before:rounded-full"
                : "text-gray-600 hover:text-blue-600 hover:before:absolute hover:before:inset-x-2 hover:before:bottom-0 hover:before:h-0.5 hover:before:bg-blue-100 hover:before:rounded-full"
            }`}
          >
            Careers
          </a>
          <a
            href="/blogs"
            className={`block px-4 py-3 rounded-md hover:bg-gray-50 transition-colors duration-200 font-medium text-gray-800 ${
              location.pathname === "/blogs"
                ? "text-blue-700 font-medium before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:bg-blue-600 before:rounded-full"
                : "text-gray-600 hover:text-blue-600 hover:before:absolute hover:before:inset-x-2 hover:before:bottom-0 hover:before:h-0.5 hover:before:bg-blue-100 hover:before:rounded-full"
            }`}
          >
            Blog
          </a>
          <a
            href="/about"
            className={`block px-4 py-3 rounded-md hover:bg-gray-50 transition-colors duration-200 font-medium text-gray-800 ${
              location.pathname === "/about"
                ? "text-blue-700 font-medium before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:bg-blue-600 before:rounded-full"
                : "text-gray-600 hover:text-blue-600 hover:before:absolute hover:before:inset-x-2 hover:before:bottom-0 hover:before:h-0.5 hover:before:bg-blue-100 hover:before:rounded-full"
            }`}
          >
            About
          </a>

          <a
            href="/contact"
            className="block mt-2 text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
