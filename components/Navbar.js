"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaUserTie } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/About2" },
    { label: "Services", href: "/Services" },
    { label: "FeedBack", href: "/comments" },
    { label: "AI Chatbot", href: "/chatbot" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2">
          <FaUserTie className="text-blue-700 text-2xl" />
          <span
            className="text-2xl text-gray-900 font-semibold tracking-wide"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Reval Rafifasya JR
          </span>
        </Link>

        {/* Toggle Button (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium text-gray-800">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className="hover:text-blue-600 transition">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-sm">
          <ul className="flex flex-col items-center space-y-4 py-4 font-medium text-gray-800">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-blue-600 transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
