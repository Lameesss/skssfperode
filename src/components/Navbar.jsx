"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <nav
          className={`w-full transition-all duration-500 ${
            scrolled ? "bg-white shadow-md" : "bg-transparent shadow-none"
          }`}
        >
          <div className="px-6 sm:px-8 lg:px-10">
            <div className="flex items-center justify-between h-16 md:h-20">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link href="/" className="flex items-center">
                  <span className="text-2xl font-bold tracking-widest font-[family-name:var(--font-outfit)]" style={{ color: "#05004c" }}>
                    SKSSF
                  </span>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {/* Navigation Links */}

                <Link
                  href="/"
                  className="text-sm font-medium tracking-wide hover:opacity-70 transition-opacity font-[family-name:var(--font-outfit)]"
                  style={{ color: "#000000" }}
                >
                  HOME
                </Link>
                <Link
                  href="/about"
                  className="text-sm font-medium tracking-wide hover:opacity-70 transition-opacity font-[family-name:var(--font-outfit)]"
                  style={{ color: "#000000" }}
                >
                  ABOUT
                </Link>
                <Link
                  href="/team"
                  className="text-sm font-medium tracking-wide hover:opacity-70 transition-opacity font-[family-name:var(--font-outfit)]"
                  style={{ color: "#000000" }}
                >
                  TEAM
                </Link>
                <Link
                  href="/events"
                  className="text-sm font-medium tracking-wide hover:opacity-70 transition-opacity font-[family-name:var(--font-outfit)]"
                  style={{ color: "#000000" }}
                >
                  EVENTS
                </Link>
              </div>

              {/* Right Side Actions */}
              <div className="hidden md:flex items-center space-x-6">
                <Link
                  href="/contact"
                  className="relative px-6 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300 font-[family-name:var(--font-outfit)] overflow-hidden group"
                  style={{
                    backgroundColor: "#05004c",
                    color: "white",
                  }}
                >
                  <span className="relative z-10 text-white transition-all duration-300 ease-out group-hover:translate-y-full group-hover:opacity-0">
                    CONTACT US →
                  </span>
                  <span
                    className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full"
                    style={{ backgroundColor: "#DC3F4D" }}
                  />
                  <span className="absolute inset-0 flex items-center justify-center -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out z-20 text-white">
                    CONTACT US →
                  </span>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setMobileMenuOpen(true)}
                  className="text-xs font-semibold tracking-widest hover:opacity-70 transition-opacity font-[family-name:var(--font-outfit)]"
                  style={{ color: "#000000" }}
                  aria-label="Open menu"
                >
                  MENU
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-500 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-[85%] max-w-md bg-[#F5F3ED] shadow-2xl rounded-l-3xl transition-transform duration-700 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Close Button - Positioned same as MENU button */}
            <div className="absolute top-4 left-4 right-4 z-10">
              <div className="max-w-[1500px] mx-auto">
                <div className="flex items-center justify-end px-6 sm:px-8 lg:px-10 h-20">
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-xs font-semibold tracking-widest hover:opacity-70 transition-all duration-500 delay-100 font-[family-name:var(--font-outfit)] ${
                      mobileMenuOpen
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-8"
                    }`}
                    style={{ color: "#000000" }}
                  >
                    CLOSE
                  </button>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <div className="flex-1 flex flex-col px-8 pt-24">
              {/* About */}
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between py-6 border-b border-gray-300 hover:opacity-70 transition-all duration-500 delay-300 font-[family-name:var(--font-outfit)] ${
                  mobileMenuOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-12"
                }`}
                style={{ color: "#000000" }}
              >
                <span className="text-sm font-medium tracking-wide">HOME</span>
                <span className="text-xl">→</span>
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between py-6 border-b border-gray-300 hover:opacity-70 transition-all duration-500 delay-100 font-[family-name:var(--font-outfit)] ${
                  mobileMenuOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-12"
                }`}
                style={{ color: "#000000" }}
              >
                <span className="text-sm font-medium tracking-wide">ABOUT</span>
                <span className="text-xl">→</span>
              </Link>

              {/* Team */}
              <Link
                href="/team"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between py-6 border-b border-gray-300 hover:opacity-70 transition-all duration-500 delay-150 font-[family-name:var(--font-outfit)] ${
                  mobileMenuOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-12"
                }`}
                style={{ color: "#000000" }}
              >
                <span className="text-sm font-medium tracking-wide">
                  TEAM
                </span>
                <span className="text-xl">→</span>
              </Link>

              {/* Events */}
              <Link
                href="/events"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between py-6 border-b border-gray-300 hover:opacity-70 transition-all duration-500 delay-200 font-[family-name:var(--font-outfit)] ${
                  mobileMenuOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-12"
                }`}
                style={{ color: "#000000" }}
              >
                <span className="text-sm font-medium tracking-wide">EVENTS</span>
                <span className="text-xl">→</span>
              </Link>

              {/* Supplements */}
            </div>

            {/* Get Started Button */}
            <div className="p-8">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`relative block w-full text-center py-4 rounded-full text-sm font-medium tracking-wide transition-all duration-500 delay-[400ms] font-[family-name:var(--font-outfit)] overflow-hidden group ${
                  mobileMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  backgroundColor: "#05004c",
                  color: "white",
                }}
              >
                <span className="relative z-10 text-white transition-all duration-300 ease-out group-hover:translate-y-full group-hover:opacity-0">
                  CONTACT US →
                </span>
                <span
                  className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full"
                  style={{ backgroundColor: "#DC3F4D" }}
                />
                <span className="absolute inset-0 flex items-center justify-center -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out z-20 text-white">
                  CONTACT US →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
