"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { BiUser, BiShoppingBag, BiCart } from "react-icons/bi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Function to handle the scroll event
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsSticky(true); // Set the sticky state when scroll position > 50px
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    // Add event listener on component mount
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-transparent fixed top-0 left-0 w-full z-50 transition-all py-2 ${
        isSticky ? "bg-white shadow-lg bg-primary" : ""
      }`}
    >
      <div className="max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={150}
              height={50}
              className="h-auto"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/about" className="nav-link">
              About
            </Link>
            <Link href="/services" className="nav-link">
              Services
            </Link>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </div>

          {/* buttons */}
          <div className="hidden lg:flex flex-row gap-3">
            <BiShoppingBag />
            <BiCart />
          </div>

          {/* icons */}
          <div className="hidden lg:flex flex-row gap-8">
            <div className="p-2 bg-transparent border-2 border-orange text-text text-[14px] rounded-[30px] flex flex-row gap-3 justify-center items-center w-50">
              <BiUser />
              <div>Sign in</div>
            </div>

            <div className="p-2 bg-orange border border-1 text-white text-[14px] rounded-[30px] flex flex-row gap-3 justify-center items-center w-50">
              <BiUser />
              <div>Sign in</div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden text-gray-600 hover:text-blue-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-4 py-4">
            <Link
              href="/"
              className="nav-link-mobile"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="nav-link-mobile"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="nav-link-mobile"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="nav-link-mobile"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
