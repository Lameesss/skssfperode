"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/TextReveal";

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Contact() {

  return (
    <section className="bg-white font-outfit relative overflow-hidden py-14 sm:py-28 md:py-36">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 mb-10 sm:mb-16 md:mb-20">
          <div>
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-black/40 font-medium mb-3 sm:mb-4">
              <TextReveal
                splitType="chars"
                direction="up"
                duration={0.6}
                stagger={0.04}
              >
                Get In Touch
              </TextReveal>
            </p>
            <h2 className="text-[2rem] sm:text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] font-bold leading-[1] tracking-tight text-[#05004c]">
              <TextReveal
                splitType="chars"
                direction="up"
                duration={0.7}
                stagger={0.06}
              >
                Take A Visit &
              </TextReveal>
              <br />
              <TextReveal
                splitType="chars"
                direction="up"
                duration={0.7}
                stagger={0.06}
                delay={0.3}
              >
                Connect.
              </TextReveal>
            </h2>
          </div>

          <p className="max-w-sm text-black/50 text-sm sm:text-base leading-relaxed md:text-right">
            Have a question, need support, or want to get involved? Reach out to our team using the contact details or visit our office in Perode.
          </p>
        </div>

        {/* Divider */}
        <motion.div
          className="h-[1px] bg-black/10 mb-10 sm:mb-16 md:mb-20 origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
          {/* Left - Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-10 sm:space-y-14"
          >
            <motion.div variants={itemVariants}>
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-black/30 font-medium mb-2">
                Email
              </p>
              <a
                href="mailto:Skssfperode786@gmail.com"
                className="text-lg sm:text-xl md:text-2xl font-semibold text-black hover:text-[#05004c] transition-colors duration-300 break-all"
              >
                Skssfperode786@gmail.com
              </a>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-black/30 font-medium mb-2">
                Phone
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col">
                  <span className="text-sm text-black/50 font-medium mb-1">President:</span>
                  <a
                    href="tel:+919645764901"
                    className="text-lg sm:text-xl md:text-2xl font-semibold text-black hover:text-[#05004c] transition-colors duration-300"
                  >
                    +91 96457 64901
                  </a>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-black/50 font-medium mb-1">Secretary:</span>
                  <a
                    href="tel:+919037171068"
                    className="text-lg sm:text-xl md:text-2xl font-semibold text-black hover:text-[#05004c] transition-colors duration-300"
                  >
                    +91 90371 71068
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-black/30 font-medium mb-2">
                Office
              </p>
              <p className="text-base sm:text-lg text-black/70 leading-relaxed">
                SKSSF Office Perode,
                <br />
                Kerala, India
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-black/30 font-medium mb-4">
                Follow Us
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/skssf.perode/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-black/50 hover:text-[#05004c] transition-colors duration-300 cursor-pointer"
                >
                  Instagram
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Location Map */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="w-full h-[400px] sm:h-[500px] lg:h-full min-h-[400px] rounded-2xl md:rounded-3xl overflow-hidden bg-[#f5f5f7] relative border border-black/5"
          >
            {/* Embedded Google Map */}
            <iframe
              src="https://maps.google.com/maps?q=SKSSF%20Office%20Perode&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale contrast-125 opacity-90 transition-all duration-700 hover:grayscale-0 hover:opacity-100"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
