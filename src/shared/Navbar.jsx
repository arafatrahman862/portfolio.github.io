import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    `px-4 py-1.5 rounded-full transition-all duration-200 ${isActive
      ? "bg-gradient-to-r from-violet-500 to-emerald-500 text-white shadow-lg shadow-violet-700/40"
      : "text-gray-200 hover:text-white hover:bg-white/10"
    }`;

  return (
    <div className="w-full flex justify-center">
      <nav
        className="
          mt-2 mb-4
          max-w-3xl w-full
          bg-white/10 backdrop-blur-md
          border border-white/20
          rounded-2xl lg:rounded-full
          shadow-[0_0_25px_rgba(0,0,0,0.3)]
          px-4 md:px-6 py-2 md:py-3
        "
      >
        {/* TOP ROW */}
        <div className="flex items-center justify-between lg:justify-center gap-4">
          {/* Brand (only on mobile) */}
          <span className="font-semibold tracking-[0.2em] text-violet-200 lg:hidden">
            Arafat
          </span>

          {/* Desktop nav */}
          <ul className="hidden lg:flex justify-center w-full gap-10 font-medium">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClasses}>
                {link.label}
              </NavLink>
            ))}
          </ul>

          {/* Hamburger (mobile only) */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-full text-white hover:bg-white/10 transition"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* MOBILE MENU (pushes content down, no overlap) */}
        <div
          className={`
            lg:hidden overflow-hidden transition-[max-height,opacity] duration-300
            ${isOpen ? "max-h-60 opacity-100 mt-2" : "max-h-0 opacity-0"}
          `}
        >
          <ul className="flex flex-col gap-1 py-2">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `block w-full text-left px-4 py-2 rounded-xl text-sm font-medium transition ${isActive
                      ? "bg-violet-600 text-white"
                      : "text-gray-200 hover:bg-white/10"
                    }`
                  }
                  onClick={() => setIsOpen(false)} // close menu after navigation
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
