"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TextReveal } from "@/components/TextReveal";
import { motion } from "framer-motion";

const PREVIEW_MEMBERS = [
  { name: "Member 1", position: "Committee Member", image: "/images/team/member1 (2).jpg" },
  { name: "Member 2", position: "Committee Member", image: "/images/team/member1 (3).jpg" },
  { name: "Member 3", position: "Committee Member", image: "/images/team/member1 (4).jpg" },
  { name: "Member 4", position: "Committee Member", image: "/images/team/member1 (5).jpg" },
  { name: "Member 5", position: "Committee Member", image: "/images/team/member1 (6).jpg" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function TeamPreview() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="bg-white font-outfit relative overflow-hidden py-14 sm:py-28 md:py-36">
      {/* Header */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6 mb-8 sm:mb-16 md:mb-20">
          <div>
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-black/40 font-medium mb-3 sm:mb-4">
              <TextReveal
                splitType="chars"
                direction="up"
                duration={0.6}
                stagger={0.04}
              >
                Meet The Team
              </TextReveal>
            </p>
            <h2 className="text-[2rem] sm:text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] font-bold leading-[1] tracking-tight text-[#05004c]">
              <TextReveal
                splitType="chars"
                direction="up"
                duration={0.7}
                stagger={0.06}
              >
                The Minds Behind
              </TextReveal>
              <br />
              <TextReveal
                splitType="chars"
                direction="up"
                duration={0.7}
                stagger={0.06}
                delay={0.3}
              >
                The Vision.
              </TextReveal>
            </h2>
          </div>

          {/* Desktop CTA */}
          <motion.div
            className="hidden sm:block"
            variants={buttonVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link
              href="/team"
              className="group inline-flex items-center gap-3 text-sm font-medium tracking-wide text-[#05004c] hover:opacity-70 transition-opacity"
            >
              <span>VIEW ALL MEMBERS</span>
              <span className="w-10 h-10 rounded-full border border-[#05004c]/20 flex items-center justify-center group-hover:bg-[#05004c] group-hover:border-[#05004c] transition-all duration-500">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="group-hover:text-white text-[#05004c] transition-colors duration-500"
                >
                  <path
                    d="M1 7h12M8 2l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="h-[1px] bg-black/10 mb-8 sm:mb-16 md:mb-20 origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Team Grid - 5 members */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-5 sm:gap-8 sm:pb-0 sm:overflow-visible scrollbar-hide">
            {PREVIEW_MEMBERS.map((member, index) => (
              <motion.div
                key={member.name}
                variants={cardVariants}
                className="group cursor-pointer min-w-[70vw] snap-start sm:min-w-0"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-[#f5f5f7] aspect-[3/4]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className={`object-cover transition-all duration-700 ease-out ${
                      hoveredIndex === index
                        ? "scale-105"
                        : "scale-100"
                    }`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  />

                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-[#05004c]/60 via-transparent to-transparent transition-opacity duration-500 ${
                      hoveredIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  {/* Position reveal on hover */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 p-4 sm:p-5 transition-all duration-500 ${
                      hoveredIndex === index
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }`}
                  >
                    <p className="text-white/80 text-[10px] sm:text-xs tracking-widest uppercase font-light">
                      {member.position}
                    </p>
                  </div>
                </div>

                {/* Name & position */}
                <div className="mt-3 sm:mt-4">
                  <h3 className="text-sm sm:text-base font-semibold text-black tracking-tight leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-black/40 text-[10px] sm:text-xs mt-0.5 sm:mt-1 font-medium tracking-wide">
                    {member.position}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mobile CTA + View All Button */}
        <motion.div
          className="mt-8 sm:mt-16 md:mt-20 flex justify-center"
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Link
            href="/team"
            className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 rounded-full text-sm font-medium tracking-wide overflow-hidden transition-all duration-500 border border-[#05004c]/15 hover:border-[#05004c] text-[#05004c]"
          >
            <span className="absolute inset-0 bg-[#05004c] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <span className="relative z-10 group-hover:text-white transition-colors duration-500">
              VIEW FULL TEAM
            </span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 14 14"
              fill="none"
              className="relative z-10 group-hover:text-white text-[#05004c] transition-colors duration-500"
            >
              <path
                d="M1 7h12M8 2l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
