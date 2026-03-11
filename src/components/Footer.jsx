"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { label: "Instagram", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export default function Footer() {
  return (
    <footer
      className="font-[family-name:var(--font-outfit)]"
      style={{ backgroundColor: "#05004c" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 py-10 sm:py-12 md:py-14">
        {/* 4-Column Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 mb-10 md:mb-12"
        >
          {/* Navigation */}
          <motion.div variants={itemVariants}>
            <h4 className="text-[11px] uppercase tracking-[0.3em] font-medium mb-4" style={{ color: "#ffffff" }}>
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white hover:text-white/70 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div variants={itemVariants}>
            <h4 className="text-[11px] uppercase tracking-[0.3em] font-medium mb-4" style={{ color: "#ffffff" }}>
              Social
            </h4>
            <ul className="space-y-2.5">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className="text-sm text-white hover:text-white/70 transition-colors duration-300"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="text-[11px] uppercase tracking-[0.3em] font-medium mb-4" style={{ color: "#ffffff" }}>
              Contact
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:info@skssf.org"
                  className="text-sm text-white hover:text-white/70 transition-colors duration-300"
                >
                  info@skssf.org
                </a>
              </li>
              <li>
                <a
                  href="tel:+910000000000"
                  className="text-sm text-white hover:text-white/70 transition-colors duration-300"
                >
                  +91 000 000 0000
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Location */}
          <motion.div variants={itemVariants}>
            <h4 className="text-[11px] uppercase tracking-[0.3em] font-medium mb-4" style={{ color: "#ffffff" }}>
              Location
            </h4>
            <p className="text-sm leading-relaxed" style={{ color: "#ffffff" }}>
              Kerala, India
            </p>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-[1px] bg-white/10 origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6">
          <p className="text-xs tracking-wide" style={{ color: "#ffffff" }}>
            &copy; {new Date().getFullYear()} SKSSF. All rights reserved.
          </p>
          <p className="text-xs tracking-wide" style={{ color: "#ffffff" }}>
            SKSSF Perode Shaka
          </p>
        </div>
      </div>
    </footer>
  );
}
