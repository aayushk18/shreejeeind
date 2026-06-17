"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Why Choose Us", path: "/why-choose-us" },
  { name: "Industries", path: "/industries" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <img src="/logo.png" alt="Shree Jee Industries Logo" className="h-16 w-auto object-contain" />
              <div className="flex flex-col">
                {/* <span className="text-xl font-bold text-krishna-blue leading-tight">Shree Jee</span>
                <span className="text-sm font-semibold text-saffron tracking-wider">INDUSTRIES</span> */}
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="text-gray-700 hover:text-saffron font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/quote"
              className="bg-krishna-blue hover:bg-krishna-blue-light text-white px-6 py-2 rounded-full font-medium transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-krishna-blue focus:outline-none"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-saffron hover:bg-gray-50 rounded-md"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/quote"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center mt-4 bg-krishna-blue text-white px-6 py-3 rounded-md font-medium"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
