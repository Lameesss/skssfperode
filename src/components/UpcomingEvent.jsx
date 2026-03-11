"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const UPCOMING_EVENT = {
  title: "Annual Community Gala 2026",
  date: "April 15, 2026",
  time: "6:00 PM onwards",
  location: "Mahallu Community Hall, Main Street",
  description:
    "Join us for a grand evening celebrating unity, culture, and community spirit. The Annual Community Gala brings together families and neighbours for an unforgettable night of food, entertainment, and heartfelt fellowship.",
  image: "/images/events/events (1).jpg",
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
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
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function UpcomingEvent() {
  return (
    <section className="bg-white font-[family-name:var(--font-outfit)] py-20 sm:py-28 md:py-36 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">

        {/* Section header */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-14"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="text-xs uppercase tracking-[0.3em] text-black/40 font-medium mb-3"
            >
              What&apos;s Next
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#05004c] leading-tight"
            >
              Upcoming Event
            </motion.h2>
          </div>

          {/* CTA — desktop */}
          <motion.div variants={fadeUp} className="hidden sm:block shrink-0">
            <Link
              href="/events"
              className="group inline-flex items-center gap-3 text-sm font-semibold tracking-wide text-[#05004c] border border-[#05004c]/20 rounded-full px-6 py-3 hover:bg-[#05004c] hover:text-white hover:border-[#05004c] transition-all duration-400"
            >
              View All Events
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-px bg-black/10 mb-10 sm:mb-14 origin-left"
          variants={lineVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        />

        {/* Featured event card */}
        <motion.div
          className="group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-black/[0.07] shadow-sm hover:shadow-xl transition-shadow duration-500"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <div className="flex flex-col lg:flex-row">

            {/* Poster image */}
            <div className="relative w-full lg:w-[55%] aspect-[4/3] lg:aspect-auto lg:min-h-[500px] overflow-hidden">
              <Image
                src={UPCOMING_EVENT.image}
                alt={UPCOMING_EVENT.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              {/* Gradient fade toward content panel */}
              <div className="hidden lg:block absolute inset-y-0 right-0 w-24 bg-gradient-to-r from-transparent to-white pointer-events-none" />
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center px-6 sm:px-10 py-8 sm:py-12 lg:py-16 lg:px-14 w-full lg:w-[45%]">

              {/* Live badge */}
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.25em] uppercase text-[#05004c] bg-[#05004c]/[0.07] px-3 py-1.5 rounded-full w-fit mb-6 sm:mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#05004c] animate-pulse" />
                Upcoming
              </span>

              <h3 className="text-2xl sm:text-3xl md:text-[2.25rem] font-bold text-[#05004c] leading-tight mb-4 sm:mb-5">
                {UPCOMING_EVENT.title}
              </h3>

              {/* Meta row */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-black/50 mb-3">
                <span>{UPCOMING_EVENT.date}</span>
                <span className="w-1 h-1 rounded-full bg-black/30" />
                <span>{UPCOMING_EVENT.time}</span>
              </div>

              {/* Location */}
              <div className="flex items-start gap-2 text-sm text-black/50 mb-6 sm:mb-8">
                <svg
                  className="w-4 h-4 mt-0.5 shrink-0"
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

              <p className="text-black/60 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10">
                {UPCOMING_EVENT.description}
              </p>

              {/* CTA button */}
              <Link
                href="/events"
                className="group/btn inline-flex items-center gap-3 self-start px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 overflow-hidden relative"
                style={{ backgroundColor: "#05004c", color: "white" }}
              >
                <span className="relative z-10 transition-all duration-300 ease-out group-hover/btn:translate-y-full group-hover/btn:opacity-0">
                  Explore All Events →
                </span>
                <span
                  className="absolute inset-0 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out rounded-full bg-black"
                />
                <span className="absolute inset-0 flex items-center justify-center -translate-y-full opacity-0 group-hover/btn:translate-y-0 group-hover/btn:opacity-100 transition-all duration-300 ease-out z-20 text-white text-sm font-semibold">
                  Explore All Events →
                </span>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* CTA — mobile */}
        <motion.div
          className="flex justify-center mt-8 sm:hidden"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          <Link
            href="/events"
            className="group inline-flex items-center gap-3 text-sm font-semibold tracking-wide text-[#05004c] border border-[#05004c]/20 rounded-full px-6 py-3 hover:bg-[#05004c] hover:text-white hover:border-[#05004c] transition-all duration-400"
          >
            View All Events
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
