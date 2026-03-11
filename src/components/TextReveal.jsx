"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function TextReveal({
  children,
  splitType = "chars",
  direction = "up",
  duration = 0.7,
  stagger = 0.08,
  delay = 0,
  className = "",
}) {
  const containerRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;

    const container = containerRef.current;
    if (!container) return;

    const text = container.textContent;
    container.innerHTML = "";

    let elements = [];

    if (splitType === "chars") {
      text.split("").forEach((char) => {
        const wrapper = document.createElement("span");
        wrapper.style.display = "inline-block";
        wrapper.style.overflow = "hidden";
        wrapper.style.verticalAlign = "top";

        const inner = document.createElement("span");
        inner.style.display = "inline-block";
        inner.textContent = char === " " ? "\u00A0" : char;

        wrapper.appendChild(inner);
        container.appendChild(wrapper);
        elements.push(inner);
      });
    } else if (splitType === "words") {
      const words = text.split(/\s+/);
      words.forEach((word, i) => {
        const wrapper = document.createElement("span");
        wrapper.style.display = "inline-block";
        wrapper.style.overflow = "hidden";
        wrapper.style.verticalAlign = "top";

        const inner = document.createElement("span");
        inner.style.display = "inline-block";
        inner.textContent = word;

        wrapper.appendChild(inner);
        container.appendChild(wrapper);

        if (i < words.length - 1) {
          const space = document.createElement("span");
          space.innerHTML = "&nbsp;";
          container.appendChild(space);
        }

        elements.push(inner);
      });
    } else if (splitType === "lines") {
      const wrapper = document.createElement("span");
      wrapper.style.display = "inline-block";
      wrapper.style.overflow = "hidden";
      wrapper.style.verticalAlign = "top";

      const inner = document.createElement("span");
      inner.style.display = "inline-block";
      inner.textContent = text;

      wrapper.appendChild(inner);
      container.appendChild(wrapper);
      elements.push(inner);
    }

    const yFrom =
      direction === "up" ? "100%" : direction === "down" ? "-100%" : "0%";

    gsap.set(elements, { y: yFrom, opacity: 0 });

    if (delay > 0) {
      gsap.to(elements, {
        y: "0%",
        opacity: 1,
        duration,
        stagger,
        delay,
        ease: "power3.out",
      });
    } else {
      gsap.to(elements, {
        y: "0%",
        opacity: 1,
        duration,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    }

    hasAnimated.current = true;
  }, [splitType, direction, duration, stagger, delay]);

  return (
    <span ref={containerRef} className={className} style={{ display: "inline-block" }}>
      {children}
    </span>
  );
}
