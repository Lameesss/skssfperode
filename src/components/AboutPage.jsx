"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/TextReveal";

// ── Animation variants ──────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const lineVariant = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── Services data ───────────────────────────────────────────────
const SERVICES = [
  {
    number: "01",
    title: "വിദ്യാഭ്യാസ വികസനം",
    description:
      "വിദ്യാർത്ഥികളുടെ അറിവ് വളർത്താൻ പഠന ക്ലാസുകളും പരിശീലന പരിപാടികളും സംഘടിപ്പിക്കുന്നു.",
  },
  {
    number: "02",
    title: "യുവജന ശാക്തീകരണം",
    description:
      "നേതൃത്വ കഴിവുകളും വ്യക്തിത്വ വികസനവും പ്രോത്സാഹിപ്പിക്കുന്ന പ്രവർത്തനങ്ങൾ.",
  },
  {
    number: "03",
    title: "സാംസ്കാരിക പ്രവർത്തനങ്ങൾ",
    description:
      "കലയും സംസ്കാരവും സംരക്ഷിച്ച് വളർത്തുന്ന വിവിധ പരിപാടികൾ.",
  },
  {
    number: "04",
    title: "സാമൂഹിക സേവനം",
    description:
      "ദുരിതബാധിതർക്കുള്ള സഹായവും സമൂഹക്ഷേമ പ്രവർത്തനങ്ങളും.",
  },
  {
    number: "05",
    title: "ഡിജിറ്റൽ & കരിയർ മാർഗ്ഗനിർദ്ദേശം",
    description:
      "ആധുനിക വിദ്യാഭ്യാസവും കരിയർ സാധ്യതകളും പരിചയപ്പെടുത്തുന്ന പരിപാടികൾ.",
  },
  {
    number: "06",
    title: "ക്യാമ്പസ് പ്രവർത്തനങ്ങൾ",
    description:
      "സ്കൂൾ, കോളേജ് തലങ്ങളിൽ സജീവമായ വിദ്യാർത്ഥി പങ്കാളിത്തം ഉറപ്പാക്കുന്നു.",
  },
];

// ── Component ────────────────────────────────────────────────────
export default function AboutPage() {
  const sectionRef = useRef(null);

  return (
    <article
      ref={sectionRef}
      className="bg-white font-[family-name:var(--font-outfit)] overflow-hidden"
    >
      {/* ── PAGE HEADER ───────────────────────────────────────── */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 pt-24 pb-10 sm:pt-28 sm:pb-14 md:pt-44 md:pb-24">
        <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-black/40 font-medium mb-4 sm:mb-6">
          <TextReveal
            splitType="chars"
            direction="up"
            duration={0.7}
            stagger={0.05}
            delay={0.3}
          >
            Who We Are
          </TextReveal>
        </p>

        <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] font-bold leading-[0.95] tracking-tight text-[#05004c]">
          <TextReveal
            splitType="chars"
            direction="up"
            duration={0.7}
            stagger={0.08}
            delay={0.5}
          >
            About Us
          </TextReveal>
        </h1>

        <motion.div
          className="h-[1px] sm:h-[2px] bg-black/10 mt-6 sm:mt-10 md:mt-16 origin-left"
          variants={lineVariant}
          initial="hidden"
          animate="visible"
        />

        <motion.p
          className="max-w-2xl text-black/60 text-sm sm:text-base md:text-lg leading-relaxed mt-5 sm:mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          വിശ്വാസത്തിലും അറിവിലും സേവനത്തിലും ഉറച്ച അടിത്തറയോടെ, വിദ്യാർത്ഥികളെ ശീലസമ്പന്നരായ ഉത്തരവാദിത്തമുള്ള വ്യക്തികളായി വളർത്താൻ പ്രതിജ്ഞാബദ്ധമായ ഒരു സജീവ പ്രസ്ഥാനം.
        </motion.p>
      </div>

      {/* ── ABOUT INTRO ───────────────────────────────────────── */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 pb-20 sm:pb-28 md:pb-36">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 xl:gap-24 items-center">

          {/* Text side */}
          <motion.div
            className="w-full lg:w-[45%]"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-black/40 font-medium mb-4">
              Our Story
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#05004c] leading-tight mb-6">
              Serving the Students <br className="hidden sm:block" />
              for Generations
            </h2>
            <div className="space-y-4 text-black/65 text-sm sm:text-base leading-relaxed">
              <p>

                  നിരവധി പ്രവർത്തനങ്ങളുമായി നാടിന്റെ ഹൃദയങ്ങളിൽ ഈ വിദ്യാർത്ഥി പ്രസ്ഥാനം നിറഞ്ഞു നിന്നെങ്കിലും ഏറെ കാലത്തെ ആഗ്രഹമായിരുന്നു ശാഖയ്ക്കൊരു ഓഫീസ് എന്നത്. നാട്ടുകാരുടെ അതിരുകളില്ലാത്ത പിന്തുണയോടെ 2021 നവംബർ 28 ന് ബഹുമാനപ്പെട്ട പാണക്കാട് സയ്യിദ് അബ്ബാസലി ശിഹാബ് തങ്ങളുടെ കരങ്ങളാൽ SKSSF പേരോട് ശാഖ ഓഫീസ് നാടിന് വേണ്ടി സമർപ്പിക്കപ്പെട്ടു. ഇന്നത് നിരവധി ദീനി പ്രവർത്തനങ്ങളുമായും ലൈബ്രറി,സഹചാരി,മറ്റു വിദ്യാഭ്യാസ പ്രവർത്തനങ്ങൾ നടത്തി കൊണ്ട് ഉപയോഗപ്പെടുത്തുന്നു
                
              </p>
              <p>
                പഠനവൃത്തങ്ങളും സെമിനാറുകളും മുതൽ സാമൂഹിക സേവന പ്രവർത്തനങ്ങളും കരിയർ മാർഗ്ഗനിർദ്ദേശവും വരെ, ഓരോ പ്രവർത്തനവും വിദ്യാർത്ഥികളുടെ സമഗ്ര വികസനത്തിനായി രൂപകൽപ്പന ചെയ്തതാണ്.
              </p>
              <p>
                ഇന്നും, നൂതന സാധ്യതകളെ ഉൾക്കൊണ്ട്, പാരമ്പര്യ മൂല്യങ്ങളെ നിലനിർത്തിക്കൊണ്ട് മുന്നേറുന്ന ഒരു ശക്തമായ വിദ്യാർത്ഥി പ്രസ്ഥാനമായി SKSSF തുടരുന്നു.
              </p>
            </div>

            {/* Stats row */}
            <div className="flex gap-8 sm:gap-12 mt-10 pt-8 border-t border-black/10">
              {[
                { value: "35+", label: "Years of Service" },
                { value: "1000+", label: "Units Across Kerala" },
                { value: "100K+", label: "Students Connected" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl sm:text-3xl font-bold text-[#05004c]">
                    {stat.value}
                  </p>
                  <p className="text-xs text-black/40 mt-1 tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image side */}
          <motion.div
            className="w-full lg:w-[55%]"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3]">
              <Image
                src="/images/about/about1.jpg"
                alt="About SKSSF"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── SERVICES ──────────────────────────────────────────── */}
      <div className="bg-[#05004c] py-20 sm:py-28 md:py-36">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">

          {/* Header */}
          <motion.div
            className="mb-12 sm:mb-16 md:mb-20"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.p
              variants={fadeUp}
              className="text-xs uppercase tracking-[0.3em] font-medium mb-4"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              What We Do
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-2xl"
              style={{ color: "white" }}
            >
              Our Services &amp; Commitments
            </motion.h2>
          </motion.div>

          {/* Services grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {SERVICES.map((service) => (
              <motion.div
                key={service.number}
                variants={cardVariant}
                className="group bg-[#05004c] p-7 sm:p-9 hover:bg-white/5 transition-colors duration-300"
              >
                <p className="text-[11px] font-semibold tracking-[0.3em] mb-5" style={{ color: "rgba(255,255,255,0.3)" }}>
                  {service.number}
                </p>
                <h3 className="text-base sm:text-lg font-bold mb-3 leading-snug" style={{ color: "white" }}>
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── GALLERY / VISUAL SECTION ──────────────────────────── */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 py-20 sm:py-28 md:py-36">

        <motion.div
          className="mb-10 sm:mb-14"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.p
            variants={fadeUp}
            className="text-xs uppercase tracking-[0.3em] text-black/40 font-medium mb-4"
          >
            Our Community
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#05004c] leading-tight"
          >
            Moments That Define Us
          </motion.h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-4 sm:gap-6">

          {/* Large image */}
          <motion.div
            className="w-full md:w-[60%] relative rounded-2xl overflow-hidden aspect-[4/3] md:aspect-auto md:min-h-[480px]"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <Image
              src="/images/about/about2.jpg"
              alt="വിദ്യാർത്ഥി സംഗമങ്ങൾ"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </motion.div>

          {/* Right col — small image + text card */}
          <div className="w-full md:w-[40%] flex flex-col gap-4 sm:gap-6">

            <motion.div
              className="relative rounded-2xl overflow-hidden aspect-[4/3]"
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              <Image
                src="/images/about/about3.jpg"
                alt="സേവന പ്രവർത്തനങ്ങൾ"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </motion.div>

            <motion.div
              className="rounded-2xl border border-black/[0.07] bg-white p-6 sm:p-8 flex flex-col justify-between"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              <p className="text-xs uppercase tracking-[0.25em] text-black/40 font-medium mb-3">
                Our Mission
              </p>
              <p className="text-black/70 text-sm sm:text-base leading-relaxed">
                വിദ്യാഭ്യാസമുള്ള, ശീലസമ്പന്നരായ, സമൂഹബോധമുള്ള ഒരു തലമുറയെ വളർത്തി, വിശ്വാസത്തിലും മൂല്യങ്ങളിലും അധിഷ്ഠിതമായ ഒരു ഉന്നത സമൂഹം സൃഷ്ടിക്കുക.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </article>
  );
}
