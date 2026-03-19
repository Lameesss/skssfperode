"use client";
import { useRef, useEffect, useState } from "react";
import { TextReveal } from "@/components/TextReveal";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: 1, suffix: "", label: "Madrasa" },
  { value: 5000, suffix: "+", label: "Members" },
  { value: 4, suffix: "", label: "Masjid" },
  { value: 400, suffix: "+", label: "Houses" },
  { value: 20000, suffix: "+", label: "Income" },
  { value: 3000, suffix: "+", label: "Expense" },
  { value: 17000, suffix: "", label: "Balance" },
];

function AnimatedCounter({ target, suffix, trigger }) {
  const countRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!trigger || hasAnimated.current) return;
    hasAnimated.current = true;

    const obj = { val: 0 };
    gsap.to(obj, {
      val: target,
      duration: 2,
      ease: "power2.out",
      onUpdate: () => {
        if (countRef.current) {
          countRef.current.textContent = Math.floor(obj.val).toLocaleString() + suffix;
        }
      },
    });
  }, [trigger, target, suffix]);

  return (
    <span ref={countRef} className="tabular-nums">
      0{suffix}
    </span>
  );
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Data() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 75%",
        onEnter: () => setIsVisible(true),
        once: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white font-outfit relative overflow-hidden py-20 sm:py-28 md:py-36"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
        {/* Header */}
        <div className="mb-14 sm:mb-20 md:mb-24">
          {/* Decorative lines */}
          <motion.div
            className="flex flex-col gap-[5px] mb-4 sm:mb-5 origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-16 sm:w-20 h-[2px] bg-[#05004c]" />
            <div className="w-16 sm:w-20 h-[2px] bg-[#05004c]" />
            <div className="w-16 sm:w-20 h-[2px] bg-[#05004c]" />
          </motion.div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#05004c] tracking-tight">
            <TextReveal
              splitType="chars"
              direction="up"
              duration={0.6}
              stagger={0.05}
            >
              By the Numbers
            </TextReveal>
          </h2>
        </div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12 sm:gap-x-10 sm:gap-y-16 md:gap-x-12 md:gap-y-20 lg:gap-x-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="group text-center md:text-left flex flex-col"
            >
              <div className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-bold leading-none text-[#05004c]/80 tracking-tight overflow-visible">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  trigger={isVisible}
                />
              </div>
              <div className="mt-3 sm:mt-4">
                <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold text-black/50">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
