"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TextReveal } from "@/components/TextReveal";

const FAQS = [
  {
    question: "What is SKSSF and what does it do?",
    answer:
      "SKSSF is a community-driven organization dedicated to social welfare, education, and cultural development. We work closely with local communities to uplift and empower people through various programs and initiatives.",
  },
  {
    question: "How can I become a member?",
    answer:
      "Becoming a member is simple. You can reach out through our contact page or visit any of our local offices. Our team will guide you through the registration process and help you get involved with our community activities.",
  },
  {
    question: "What programs and services do you offer?",
    answer:
      "We offer a wide range of programs including educational support through our madrasas, community welfare initiatives, youth development programs, cultural events, and social outreach services designed to strengthen community bonds.",
  },
  {
    question: "How is the organization funded?",
    answer:
      "Our organization is funded through community contributions, membership fees, charitable donations, and partnerships with like-minded organizations. Every contribution goes directly toward community programs and development.",
  },
  {
    question: "How can I contribute or volunteer?",
    answer:
      "There are many ways to get involved — from volunteering at local events, contributing to community projects, mentoring youth, or supporting our initiatives financially. Contact us to find the best way you can make a difference.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
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
                Got Questions?
              </TextReveal>
            </p>
            <h2 className="text-[2rem] sm:text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] font-bold leading-[1] tracking-tight text-[#05004c]">
              <TextReveal
                splitType="chars"
                direction="up"
                duration={0.7}
                stagger={0.06}
              >
                Frequently Asked
              </TextReveal>
              <br />
              <TextReveal
                splitType="chars"
                direction="up"
                duration={0.7}
                stagger={0.06}
                delay={0.3}
              >
                Questions.
              </TextReveal>
            </h2>
          </div>

          <p className="max-w-sm text-black/50 text-sm sm:text-base leading-relaxed md:text-right">
            Everything you need to know about our organization and how we serve the community.
          </p>
        </div>

        {/* Divider */}
        <motion.div
          className="h-[1px] bg-black/10 origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* FAQ Items */}
        <div>
          {FAQS.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between py-6 sm:py-8 border-b border-black/10 text-left group cursor-pointer"
              >
                <div className="flex items-center gap-4 sm:gap-8">
                  <span className="text-xs sm:text-sm font-medium text-black/25 tabular-nums min-w-[2rem]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className={`text-base sm:text-lg md:text-xl font-semibold tracking-tight transition-colors duration-400 ${
                      openIndex === index ? "text-[#05004c]" : "text-black"
                    }`}
                  >
                    {faq.question}
                  </h3>
                </div>

                {/* Toggle icon */}
                <div
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center flex-shrink-0 ml-4 transition-all duration-500 ${
                    openIndex === index
                      ? "bg-[#05004c] border-[#05004c] rotate-0"
                      : "bg-transparent border-black/15 rotate-0"
                  }`}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className={`transition-all duration-500 ${
                      openIndex === index ? "text-white" : "text-black/40"
                    }`}
                  >
                    {/* Horizontal line (always visible) */}
                    <line
                      x1="3"
                      y1="7"
                      x2="11"
                      y2="7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    {/* Vertical line (rotates to disappear) */}
                    <motion.line
                      x1="7"
                      y1="3"
                      x2="7"
                      y2="11"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      animate={{ rotate: openIndex === index ? 90 : 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      style={{ originX: "50%", originY: "50%", transformBox: "fill-box" }}
                    />
                  </svg>
                </div>
              </button>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      height: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                      opacity: { duration: 0.35, delay: 0.1 },
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pl-8 sm:pl-16 pr-4 sm:pr-20 pb-6 sm:pb-8">
                      <p className="text-sm sm:text-base text-black/60 leading-relaxed max-w-3xl">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
