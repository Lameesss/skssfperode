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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

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
                Let&apos;s Start A
              </TextReveal>
              <br />
              <TextReveal
                splitType="chars"
                direction="up"
                duration={0.7}
                stagger={0.06}
                delay={0.3}
              >
                Conversation.
              </TextReveal>
            </h2>
          </div>

          <p className="max-w-sm text-black/50 text-sm sm:text-base leading-relaxed md:text-right">
            Have a question or want to get involved? We&apos;d love to hear from you. Reach out and we&apos;ll get back to you shortly.
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
                href="mailto:hello@skssf.org"
                className="text-lg sm:text-xl md:text-2xl font-semibold text-black hover:text-[#05004c] transition-colors duration-300"
              >
                hello@skssf.org
              </a>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-black/30 font-medium mb-2">
                Phone
              </p>
              <a
                href="tel:+911234567890"
                className="text-lg sm:text-xl md:text-2xl font-semibold text-black hover:text-[#05004c] transition-colors duration-300"
              >
                +91 123 456 7890
              </a>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-black/30 font-medium mb-2">
                Office
              </p>
              <p className="text-base sm:text-lg text-black/70 leading-relaxed">
                SKSSF Headquarters,
                <br />
                Kerala, India
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-black/30 font-medium mb-4">
                Follow Us
              </p>
              <div className="flex gap-4">
                {["Facebook", "Instagram", "Twitter"].map((platform) => (
                  <span
                    key={platform}
                    className="text-sm font-medium text-black/50 hover:text-[#05004c] transition-colors duration-300 cursor-pointer"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6 sm:space-y-8"
          >
            <motion.div variants={itemVariants}>
              <label className="block text-xs sm:text-sm uppercase tracking-[0.15em] text-black/40 font-medium mb-2 sm:mb-3">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-black/15 text-black text-base sm:text-lg py-3 focus:outline-none focus:border-[#05004c] transition-colors duration-500 placeholder:text-black/20"
                placeholder="Your full name"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-xs sm:text-sm uppercase tracking-[0.15em] text-black/40 font-medium mb-2 sm:mb-3">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-black/15 text-black text-base sm:text-lg py-3 focus:outline-none focus:border-[#05004c] transition-colors duration-500 placeholder:text-black/20"
                placeholder="your@email.com"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-xs sm:text-sm uppercase tracking-[0.15em] text-black/40 font-medium mb-2 sm:mb-3">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-black/15 text-black text-base sm:text-lg py-3 focus:outline-none focus:border-[#05004c] transition-colors duration-500 placeholder:text-black/20"
                placeholder="What is this about?"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-xs sm:text-sm uppercase tracking-[0.15em] text-black/40 font-medium mb-2 sm:mb-3">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-transparent border-b border-black/15 text-black text-base sm:text-lg py-3 focus:outline-none focus:border-[#05004c] transition-colors duration-500 placeholder:text-black/20 resize-none"
                placeholder="Tell us more..."
              />
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4">
              <button
                type="submit"
                className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 rounded-full text-sm font-medium tracking-wide overflow-hidden transition-all duration-500 bg-[#05004c] text-white hover:shadow-lg hover:shadow-[#05004c]/20 cursor-pointer"
              >
                <span className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
                <span className="relative z-10">
                  {submitted ? "MESSAGE SENT ✓" : "SEND MESSAGE"}
                </span>
                {!submitted && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="relative z-10"
                  >
                    <path
                      d="M1 7h12M8 2l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
