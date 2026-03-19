"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
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
              <div className="flex-shrink-0 z-10">
                <Link href="/" className="flex items-center">
                  <Image 
                    src="/images/logo/logo.jpeg" 
                    alt="SKSSF Logo" 
                    width={150} 
                    height={150} 
                    className="object-contain w-16 h-16 md:w-20 md:h-20 rounded-full" 
                  />
                </Link>
              </div>

              {/* Center Text */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none text-center">
                <h1 className="text-sm sm:text-lg md:text-2xl font-bold tracking-[0.1em] sm:tracking-[0.15em] lg:tracking-[0.2em] text-[#05004c] font-[family-name:var(--font-outfit)] uppercase whitespace-nowrap">
                  SKSSF PERODE SHAKA
                </h1>
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
                <Link
                  href="/accounts"
                  className="text-sm font-medium tracking-wide hover:opacity-70 transition-opacity font-[family-name:var(--font-outfit)]"
                  style={{ color: "#000000" }}
                >
                  ACCOUNTS
                </Link>
              </div>

              {/* Right Side Actions removed as requested */}

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
              
              <Link
                href="/accounts"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between py-6 border-b border-gray-300 hover:opacity-70 transition-all duration-500 delay-150 font-[family-name:var(--font-outfit)] ${
                  mobileMenuOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-12"
                }`}
                style={{ color: "#000000" }}
              >
                <span className="text-sm font-medium tracking-wide">
                  ACCOUNTS
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

            {/* Get Started Button removed as requested */}
          </div>
        </div>
      </div>
    </>
  );
}
