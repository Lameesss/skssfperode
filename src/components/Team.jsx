"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { TextReveal } from "@/components/TextReveal";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const TEAM_MEMBERS = [
  {
    name: "Sanah K",
    position: "President",
    image: "/images/team/sanahk.jpg",
  },
  {
    name: "Basil T P",
    position: "Secretary",
    image: "/images/team/basiltp.jpg",
  },
  {
    name: "Rasin M",
    position: "Treasurer",
    image: "/images/team/rasinm.jpg",
  },
  {
    name: "Nujoom Hudavi",
    position: "Vice President",
    image: "/images/team/nujoomhudavi.jpg",
  },
  {
    name: "Ashfaq U K",
    position: "Working Secretary",
    image: "/images/team/ashfaquk.jpg",
  },
  {
    name: "Basith T",
    position: "Sahajari",
    image: "/images/team/basitht.jpg",
  },
  {
    name: "Inshad K",
    position: "Media Wing",
    image: "/images/team/inshadk.jpg",
  },
  {
    name: "Muhammed P",
    position: "Joint Secretary",
    image: "/images/team/muhammedp.jpg",
  },
  {
    name: "Mujthaba P",
    position: "Working Committee Member",
    image: "/images/team/mujthaba.jpg",
  },
  {
    name: "Muzammil",
    position: "Working Committee Member",
    image: "/images/team/muzammil.jpg",
  },
  {
    name: "Nisam K",
    position: "Working Committee Member",
    image: "/images/team/nisam.jpg",
  },
  {
    name: "Sayyid M",
    position: "Working Committee Member",
    image: "/images/team/sayyidm.jpg",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Team() {
  const sectionRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax on the heading
      gsap.to(".team-heading", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-white font-outfit relative overflow-hidden"
    >
      {/* Hero header */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 pt-24 pb-10 sm:pt-28 sm:pb-14 md:pt-44 md:pb-24">
        <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] text-black/40 font-medium mb-4 sm:mb-6">
          <TextReveal
            splitType="chars"
            direction="up"
            duration={0.7}
            stagger={0.05}
            delay={0.3}
          >
            ദർശനത്തിന് പിന്നിലെ ആളുകൾ
          </TextReveal>
        </p>

        <h1 className="team-heading text-[2.5rem] sm:text-[3.5rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] font-bold leading-[0.95] tracking-tight text-[#05004c]">
          <TextReveal
            splitType="chars"
            direction="up"
            duration={0.7}
            stagger={0.08}
            delay={0.5}
          >
            Our Team
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
          ആവേശവും പ്രതിബദ്ധതയും നിറഞ്ഞ ഒരുമിച്ചുള്ള സംഘമാണ് ഞങ്ങൾ. ഓരോരുത്തരും വ്യത്യസ്തമായ കാഴ്ചപ്പാടുകൾ കൊണ്ടുവന്ന്, പ്രചോദനവും മൂല്യവും നൽകുന്ന പ്രവർത്തനങ്ങൾ രൂപപ്പെടുത്തുന്നു.
        </motion.p>
      </div>

      {/* Team grid */}
      <motion.div
        className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 pb-20 sm:pb-32"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 gap-y-6 sm:gap-x-6 sm:gap-y-12 md:gap-x-8 md:gap-y-14">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.name}
              variants={cardVariants}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image container */}
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-[#f5f5f7] aspect-[4/5]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className={`object-cover transition-all duration-700 ease-out ${
                    hoveredIndex === index ? "scale-105" : "scale-100"
                  }`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-[#05004c]/60 via-transparent to-transparent transition-opacity duration-500 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* Reveal position on hover */}
                <div
                  className={`absolute bottom-0 left-0 right-0 p-3 sm:p-6 transition-all duration-500 ${
                    hoveredIndex === index
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                >
                  <p className="text-white/80 text-[10px] sm:text-sm tracking-widest uppercase font-light">
                    {member.position}
                  </p>
                </div>
              </div>

              {/* Name & role */}
              <div className="mt-3 sm:mt-5 flex items-center justify-between">
                <div>
                  <h3 className="text-sm sm:text-lg md:text-xl font-semibold text-black tracking-tight leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-black/40 text-[10px] sm:text-sm mt-0.5 sm:mt-1 font-medium tracking-wide">
                    {member.position}
                  </p>
                </div>

                {/* Animated arrow */}
                <div
                  className={`hidden sm:flex w-7 h-7 sm:w-10 sm:h-10 rounded-full border border-black/10 items-center justify-center transition-all duration-500 ${
                    hoveredIndex === index
                      ? "bg-[#05004c] border-[#05004c] rotate-0"
                      : "bg-transparent rotate-45"
                  }`}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className={`transition-all duration-500 ${
                      hoveredIndex === index
                        ? "-rotate-45 text-white"
                        : "text-black/30"
                    }`}
                  >
                    <path
                      d="M1 7h12M8 2l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
