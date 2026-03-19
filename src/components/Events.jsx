"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/TextReveal";

const UPCOMING_EVENT = {
  title: "Iftar Meet",
  date: "റമളാൻ മാസം",
  time: "6:00 PM",
  location: "Perode School Ground, Perode",
  description:
    "കഴിഞ്ഞ രണ്ട് വർഷങ്ങളിലായി റമളാൻ മാസത്തിൽ നാട്ടിലുള്ള പ്രായവ്യത്യാസമില്ലാതെ മുഴുവൻ പുരുഷന്മാരെയും പങ്കെടുപ്പിച്ചു ഇഫ്താർ സംഗമം നടത്തുവാനും റമളാൻ സന്ദേശം നൽകുവാനും ശാഖ കമ്മിറ്റിക്ക് സാധിച്ചിട്ടുണ്ട്.",
  image: "/images/events/iftarmeet.jpg",
};

const PREVIOUS_EVENTS = [
  {
    id: 1,
    title: "Ishq Majilis",
    date: "December 10, 2025",
    description:
      "തിരുനബി (സ്വ)യുടെ മദ്ഹോടെ സമർപ്പിച്ച ഒരു ആത്മീയ ക്യാമ്പയിൻ — റബീഉൽ അവ്വൽ മാസത്തിൽ ശാഖ പ്രവർത്തകരുടെ വീടുകളിൽ മൗലിദ് സദസ്സുകൾ സംഘടിപ്പിച്ച് സ്നേഹവും വിശ്വാസവും പങ്കുവെച്ച അനുഭവം.",
    image: "/images/events/ishgmajilis.jpg",
  },
  {
    id: 2,
    title: "Greeting Student",
    date: "November 12, 2025",
    description:
      "മദ്റസയിലെ ഒന്നാം തരത്തിലേക്ക് പുതുതായി പ്രവേശിക്കുന്ന വിദ്യാർത്ഥികൾക്ക് ഓരോ വർഷവും സ്നേഹപൂർവ്വമായ വരവേൽപ്പ് ഒരുക്കി, അവരുടെ പഠനയാത്രയ്ക്ക് ആത്മവിശ്വാസവും പ്രചോദനവും നൽകുന്ന ഒരു പ്രത്യേക പരിപാടി.",
    image: "/images/events/greetingstudent.jpg",
  },
  {
    id: 3,
    title: "Relief Support Drive",
    date: "April 5, 2025",
    description:
      "വിലങ്ങാട് ഉരുൾപൊട്ടലിൽ വീടുകൾ നഷ്ടപ്പെട്ട് ക്യാമ്പിൽ കഴിയുന്നവർക്ക് വസ്ത്രങ്ങളും ഭക്ഷണങ്ങളും എത്തിച്ചു നൽകി, സഹാനുഭൂതിയും സേവന മനോഭാവവും പ്രകടിപ്പിച്ചൊരു പ്രവർത്തനം.",
    image: "/images/events/reliefsupport.jpg",
  },
  {
    id: 4,
    title: "Viqaya",
    date: "April 1, 2025",
    description:
      "അവർ സജ്ജരാണ് എവിടെയും, എപ്പോഴും — പ്രളയ സമയത്ത് പ്രയാസം അനുഭവിച്ചവർക്കായി SKSSF വിഖായ ടീം സജീവമായി രംഗത്തെത്തി, വെള്ളം കയറിയ വീടുകളും പള്ളികളും നാട്ടുകാരോടൊപ്പം ചേർന്ന് പൂർവസ്ഥിതിയിലേക്ക് പുനഃസ്ഥാപിച്ച സേവന പ്രവർത്തനം.",
    image: "/images/events/vaqaya.jpg",
  },
  {
    id: 5,
    title: "Tharbiyya Tutelage",
    date: "May 22, 2022",
    description:
      "പിഞ്ചു വിദ്യാർത്ഥികൾക്ക് മതപരവും ഭൗതികവുമായ വിദ്യാഭ്യാസത്തിന് അടിത്തറ പാകി നൽകുന്ന പരിശീലന പദ്ധതി — ശീലപരിപോഷണം, സാമൂഹിക ബോധം, ആത്മവിശ്വാസം എന്നിവ വളർത്തുന്ന ഒരു മാർഗ്ഗദർശക പ്രവർത്തനം.",
    image: "/images/events/Tharbiyyatutelage.jpg",
  },
];

// ── Animation variants ──────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardFadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── Component ────────────────────────────────────────────────────
export default function Events() {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-white font-[family-name:var(--font-outfit)] relative overflow-hidden"
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
            Community Milestones
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
            Our Events
          </TextReveal>
        </h1>

        <motion.div
          className="h-[1px] sm:h-[2px] bg-black/10 mt-6 sm:mt-10 md:mt-16 origin-left"
          variants={lineVariants}
          initial="hidden"
          animate="visible"
        />

        <motion.p
          className="max-w-2xl text-black/60 text-sm sm:text-base md:text-lg leading-relaxed mt-5 sm:mt-8"
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
        >
          From community gatherings to celebratory milestones — every event is
          a testament to our shared values and the spirit that unites us.
        </motion.p>
      </div>

      {/* ── UPCOMING EVENT ────────────────────────────────────── */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 pb-16 sm:pb-24">
        {/* Section label */}
        <motion.div
          className="flex items-center gap-4 mb-8 sm:mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.3em] uppercase text-[#05004c]">
            <span className="w-2 h-2 rounded-full bg-[#05004c] animate-pulse" />
            Upcoming Event
          </span>
          <div className="flex-1 h-px bg-black/10" />
        </motion.div>

        {/* Featured card */}
        <motion.div
          className="group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-black/[0.07] shadow-sm hover:shadow-lg transition-shadow duration-500 bg-white"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="flex flex-col lg:flex-row">
            {/* Poster image */}
            <div className="relative w-full lg:w-[58%] aspect-[4/3] lg:aspect-auto lg:min-h-[540px] overflow-hidden">
              <Image
                src={UPCOMING_EVENT.image}
                alt={UPCOMING_EVENT.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 58vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Event details */}
            <div className="flex flex-col justify-center px-6 sm:px-10 py-8 sm:py-12 lg:py-16 lg:px-14 w-full lg:w-[42%]">
              {/* Badge */}
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.25em] uppercase text-[#05004c] bg-[#05004c]/[0.07] px-3 py-1.5 rounded-full w-fit mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#05004c] animate-pulse" />
                Happening Soon
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#05004c] leading-tight mb-4">
                {UPCOMING_EVENT.title}
              </h2>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-black/50 mb-4">
                <span>{UPCOMING_EVENT.date}</span>
                <span className="w-1 h-1 rounded-full bg-black/30" />
                <span>{UPCOMING_EVENT.time}</span>
              </div>

              <div className="flex items-start gap-2 text-sm text-black/50 mb-6">
                <svg
                  className="w-4 h-4 mt-0.5 shrink-0 opacity-50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>{UPCOMING_EVENT.location}</span>
              </div>

              <p className="text-black/70 text-sm sm:text-base leading-relaxed">
                {UPCOMING_EVENT.description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── PREVIOUS EVENTS ───────────────────────────────────── */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 pb-24 sm:pb-32">
        {/* Section label */}
        <motion.div
          className="flex items-center gap-4 mb-8 sm:mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.3em] uppercase text-black/40">
            <span className="w-2 h-2 rounded-full bg-black/25" />
            Previous Events
          </span>
          <div className="flex-1 h-px bg-black/10" />
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {PREVIOUS_EVENTS.map((event) => (
            <motion.div
              key={event.id}
              variants={cardFadeUp}
              className="group bg-white border border-black/[0.07] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-500"
            >
              {/* Poster image */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                {/* Subtle dark overlay on hover */}
                <div className="absolute inset-0 bg-[#05004c]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="px-5 sm:px-7 py-5 sm:py-6">
                <p className="text-[11px] uppercase tracking-[0.2em] text-black/40 font-medium mb-2">
                  {event.date}
                </p>
                <h3 className="text-lg sm:text-xl font-bold text-[#05004c] mb-2 leading-snug">
                  {event.title}
                </h3>
                <p className="text-sm text-black/60 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
