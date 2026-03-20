"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import { TextReveal } from "./TextReveal";

const images = [
  "/images/hero/new1.jpeg",
  "/images/hero/new2.jpeg",
];

const slideVariants = {
  enter: { opacity: 0, scale: 1.06 },
  active: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.97,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const lineRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!lineRef.current) return;
    gsap.fromTo(
      lineRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        delay: 1.5,
        duration: 0.9,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image Slider */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          variants={slideVariants}
          initial="enter"
          animate="active"
          exit="exit"
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={images[current]}
            alt={`Hero background ${current + 1}`}
            fill
            priority={current === 0}
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Content — left center */}
      <div className="relative z-20 flex items-center h-full px-8 md:px-16 lg:px-24">
        <div>
          <h1
            className="font-bold tracking-[0.18em] uppercase leading-[1.05] flex flex-col"
            style={{
              fontSize: "clamp(3rem, 8vw, 7rem)",
              fontFamily: "var(--font-outfit)",
              color: "#ffffff",
            }}
          >
            <TextReveal
              splitType="chars"
              direction="up"
              duration={0.7}
              stagger={0.08}
              delay={0.5}
            >
              SKSSF
            </TextReveal>

            <TextReveal
              splitType="chars"
              direction="up"
              duration={0.7}
              stagger={0.08}
              delay={0.8}
            >
              PERODE
            </TextReveal>
          </h1>

          {/* Accent line */}
          <div
            ref={lineRef}
            className="h-[2px] w-32 mt-4 origin-left"
            style={{ backgroundColor: "#ffffff", transform: "scaleX(0)" }}
          />
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-8 md:left-16 lg:left-24 z-20 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="transition-all duration-500"
            aria-label={`Go to slide ${i + 1}`}
          >
            <span
              className="block h-[2px] rounded-full transition-all duration-500"
              style={{
                width: i === current ? "2.5rem" : "1rem",
                backgroundColor: i === current ? "#ffffff" : "rgba(255,255,255,0.3)",
              }}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
