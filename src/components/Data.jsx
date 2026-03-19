"use client";

import { useRef, useEffect, useState } from "react";
import { TextReveal } from "@/components/TextReveal";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Static base (will be overridden by API)
const STATIC_STATS = [
  { key: "madrasa", value: 1, suffix: "", label: "Madrasa" },
  { key: "members", value: 0, suffix: "+", label: "Members" },
  { key: "masjid", value: 4, suffix: "", label: "Masjid" },
  { key: "houses", value: 0, suffix: "+", label: "Houses" },
  { key: "income", value: 0, suffix: "+", label: "Income" },
  { key: "expense", value: 0, suffix: "+", label: "Expense" },
  { key: "balance", value: 0, suffix: "", label: "Balance" },
];

function AnimatedCounter({ target, suffix, trigger }) {
  const countRef = useRef(null);

  useEffect(() => {
    if (!trigger) return;

    const obj = { val: 0 };

    gsap.to(obj, {
      val: target,
      duration: 2,
      ease: "power2.out",
      onUpdate: () => {
        if (countRef.current) {
          countRef.current.textContent =
            Math.floor(obj.val).toLocaleString() + suffix;
        }
      },
    });
  }, [trigger, target, suffix]);

  return <span ref={countRef}>0{suffix}</span>;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
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
  const [stats, setStats] = useState(STATIC_STATS);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch stats
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/public/stats"); // ✅ no CORS issue
        const json = await res.json();

        const apiData = json.data;

        setStats((prev) =>
          prev.map((item) => {
            switch (item.key) {
              case "members":
                return { ...item, value: apiData.members || 0 };
              case "houses":
                return { ...item, value: apiData.houses || 0 };
              case "income":
                return { ...item, value: apiData.income || 0 };
              case "expense":
                return { ...item, value: apiData.expense || 0 };
              case "balance":
                return { ...item, value: apiData.balance || 0 };
              default:
                return item;
            }
          })
        );
      } catch (err) {
        console.error("Failed to fetch stats:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  // ✅ Scroll trigger (only after data ready)
  useEffect(() => {
    if (loading) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 75%",
        onEnter: () => setIsVisible(true),
        once: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [loading]);

  // ✅ Prevent rendering before data
  if (loading) {
    return (
      <section className="py-20 text-center text-slate-500">
        Loading stats...
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="bg-white font-outfit relative overflow-hidden py-20 sm:py-28 md:py-36"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-14 sm:mb-20 md:mb-24">
          <motion.div
            className="flex flex-col gap-[5px] mb-4 origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="w-16 h-[2px] bg-[#05004c]" />
            <div className="w-16 h-[2px] bg-[#05004c]" />
            <div className="w-16 h-[2px] bg-[#05004c]" />
          </motion.div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#05004c]">
            <TextReveal>By the Numbers</TextReveal>
          </h2>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center md:text-left"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#05004c]/80">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  trigger={isVisible}
                />
              </div>

              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-black/50">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}