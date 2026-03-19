"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TextReveal } from "@/components/TextReveal";

const FAQS = [
  {
    question: "SKSSF എന്താണ്?",
    answer:
      "Samastha Kerala Sunni Students Federation സമസ്ത കേരള ജംഇയ്യത്തുൽ ഉലമയുടെ വിദ്യാർത്ഥി വിഭാഗമാണ്. വിദ്യാർത്ഥികളുടെ മതപരവും ലൗകികവുമായ വളർച്ച ലക്ഷ്യമാക്കി പ്രവർത്തിക്കുന്ന ഒരു സജീവ സംഘടനയാണ് ഇത്.",
  },
  {
    question: "SKSSF-ന്റെ പ്രധാന ലക്ഷ്യം എന്താണ്?",
    answer:
      "വിദ്യാഭ്യാസമുള്ള, ശീലസമ്പന്നമായ, സമൂഹബോധമുള്ള ഒരു തലമുറയെ വളർത്തുകയാണ് SKSSF-ന്റെ പ്രധാന ലക്ഷ്യം. അറിവ്, മൂല്യബോധം, സേവന മനോഭാവം എന്നിവ വളർത്തുന്നതിലാണ് സംഘടന ശ്രദ്ധിക്കുന്നത്.",
  },
  {
    question: "SKSSF-ൽ ആരെല്ലാം അംഗങ്ങളാകാം?",
    answer:
      "സ്കൂൾ, കോളേജ്, മദ്റസ തുടങ്ങിയ വിദ്യാഭ്യാസ സ്ഥാപനങ്ങളിൽ പഠിക്കുന്ന വിദ്യാർത്ഥികൾക്ക് SKSSF-ൽ അംഗത്വം നേടാം. പ്രാദേശിക യൂണിറ്റുകൾ വഴി എളുപ്പത്തിൽ ചേർക്കാം.",
  },
  {
    question: "SKSSF എന്തെല്ലാം പ്രവർത്തനങ്ങൾ നടത്തുന്നു?",
    answer:
      "പഠന ക്ലാസുകൾ, സെമിനാറുകൾ, ക്യാമ്പുകൾ, കരിയർ മാർഗ്ഗനിർദ്ദേശം, സാമൂഹിക സേവന പ്രവർത്തനങ്ങൾ, സാംസ്കാരിക പരിപാടികൾ എന്നിവ SKSSF സ്ഥിരമായി സംഘടിപ്പിക്കുന്നു.",
  },
  {
    question: "SKSSF-യിൽ എങ്ങനെ ചേരാം?",
    answer:
      "താങ്കളുടെ പ്രദേശത്തെ SKSSF യൂണിറ്റുമായി ബന്ധപ്പെടുക അല്ലെങ്കിൽ പ്രാദേശിക ഭാരവാഹികളെ സമീപിക്കുക. അവർ അംഗത്വ നടപടികൾക്ക് ആവശ്യമായ സഹായം നൽകും.",
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
