"use client";
import { useRef, useEffect, useContext, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { PROJECTS } from "@/constants/projects";
import Image from "next/image";
import { TextReveal } from "@/components/common/text-reveal";
import { DiagonalReveal } from "@/components/common/image-reveal";
import { LoadingContext } from "@/components/layout";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  // ========================================
  // MOBILE CARD SIZE CONFIGURATION
  // Adjust these values to change all mobile card sizes:
  // - Background width: col-span-10, col-span-11, col-span-12, etc.
  // - Background height: h-80, h-90, h-96, h-[400px], etc.
  // - Overlay width: w-[50%], w-[60%], w-[70%], etc.
  // - Overlay height: h-36, h-40, h-48, h-56, etc.
  // ========================================
  const MOBILE_BG_WIDTH = "col-span-12";  // Current: Full width (100%)
  const MOBILE_BG_HEIGHT = "h-90";        // Current: 360px
  const MOBILE_OVERLAY_WIDTH = "w-[60%]"; // Current: 60%
  const MOBILE_OVERLAY_HEIGHT = "h-50";   // Current: 160px

  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const { isLoading, animationComplete } = useContext(LoadingContext);



  useEffect(() => {
    if (!isLoading && animationComplete) {
      initializeGSAP();
    }
  }, [isLoading, animationComplete]);

  const initializeGSAP = () => {
    const ctx = gsap.context(() => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      ScrollTrigger.refresh();

      setTimeout(() => {
        // Simple fade-in animation
        gsap.to(contentRef.current, {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "top center",
            scrub: true,
          },
        });
      }, 100);
    }, sectionRef);

    return () => ctx.revert();
  };

  return (
    <section
      ref={sectionRef}
      className="bg-white min-h-screen perspective-section relative z-20 font-outfit"
    >
      <main ref={contentRef} className="transform-container">
        <header className="w-[90%] mx-auto max-w-[1440px] pt-[6rem] pb-[6rem] md:pb-[10rem] space-y-8">
          <div className="w-full overflow-hidden flex whitespace-nowrap">
            <div className="flex whitespace-nowrap items-center animate-marquee">
              {[...Array(4)].map((_, i) => (
                <h2
                  key={i}
                  className="text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[8rem] font-semibold -tracking-[0.02345rem] leading-[130%] text-[#05004c] pr-8 sm:pr-12 inline-block"
                >
                  SKSSF • Perode • Shaka • •
                </h2>
              ))}
            </div>
          </div>


        </header>

        {/* Asymmetric Project Grid */}
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 pb-24">
          {/* ========================================
              MOBILE CARD SIZE CONFIGURATION
              Adjust these values to change all mobile card sizes:
              - Background height: h-80, h-90, h-96, h-[400px], etc.
              - Overlay width: w-[50%], w-[60%], w-[70%], etc.
              - Overlay height: h-36, h-40, h-48, h-56, etc.
          ======================================== */}


          <>
            {/* Row 1: Two cards - Medium-Large left, Small right */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mb-12 md:mb-16">
              {/* Card 1 - Medium-Large */}
              <div className={`${MOBILE_BG_WIDTH} md:col-span-5 lg:col-span-6`}>
                <LayeredProjectCard
                  project={PROJECTS[0]}
                  index={0}
                  bgHeight={`${MOBILE_BG_HEIGHT} md:h-[400px] lg:h-[500px]`}
                  overlayWidth={`${MOBILE_OVERLAY_WIDTH} md:w-[35%]`}
                  overlayHeight={`${MOBILE_OVERLAY_HEIGHT} md:h-auto`}
                  variant="landscape"
                />
              </div>
              {/* Card 2 - Small, positioned higher on right */}
              <div className={`${MOBILE_BG_WIDTH} md:col-start-8 lg:col-start-9 md:col-span-5 lg:col-span-4 md:-mt-8 lg:-mt-16`}>
                <LayeredProjectCard
                  project={PROJECTS[1]}
                  index={1}
                  variant="landscape"
                  bgHeight={MOBILE_BG_HEIGHT}
                  overlayWidth={`${MOBILE_OVERLAY_WIDTH} md:w-[50%]`}
                  overlayHeight={`${MOBILE_OVERLAY_HEIGHT} md:h-44`}
                  objectPosition="object-top"
                />
              </div>
            </div>

            {/* Row 2: Medium-Small centered card */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mb-12 md:mb-40">
              <div className={`${MOBILE_BG_WIDTH} md:col-start-5 md:col-span-4`}>
                <LayeredProjectCard
                  project={PROJECTS[2]}
                  index={2}
                  bgHeight={`${MOBILE_BG_HEIGHT} md:h-140`}
                  overlayWidth={`${MOBILE_OVERLAY_WIDTH} md:w-[50%]`}
                  overlayHeight={`${MOBILE_OVERLAY_HEIGHT} md:h-70`}
                  variant="landscape"
                />
              </div>
            </div>

            {/* Row 3: Two cards - Small left, Medium-Small right */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
              {/* Card 4 - Small */}
              <div className={`${MOBILE_BG_WIDTH} md:col-span-4 md:mt-12`}>
                <LayeredProjectCard
                  project={PROJECTS[3]}
                  index={3}
                  variant="landscape"
                  bgHeight={MOBILE_BG_HEIGHT}
                  overlayWidth={`${MOBILE_OVERLAY_WIDTH} md:w-[40%]`}
                  overlayHeight={`${MOBILE_OVERLAY_HEIGHT} md:h-28`}
                />
              </div>
              {/* Card 5 - Medium-Small on far right */}
              <div className={`${MOBILE_BG_WIDTH} md:col-start-9 md:col-span-4`}>
                <LayeredProjectCard
                  project={PROJECTS[4]}
                  index={4}
                  bgHeight={`${MOBILE_BG_HEIGHT} md:h-auto`}
                  overlayWidth={`${MOBILE_OVERLAY_WIDTH} md:w-[45%]`}
                  overlayHeight={`${MOBILE_OVERLAY_HEIGHT} md:h-auto`}
                  variant="landscape"
                />
              </div>
            </div>
          </>
        </div>
      </main>
    </section>
  );
};

export default Projects;

const LayeredProjectCard = ({
  project,
  index,
  variant = "portrait",
  bgHeight = "h-auto",
  overlayHeight,
  overlayWidth,
  objectPosition = "object-center"
}) => {
    const isLandscape = variant === "landscape";

    // Default overlay dimensions based on variant
    const defaultOverlayWidth = overlayWidth || (isLandscape ? "w-[70%]" : "w-[45%]");
    const defaultOverlayHeight = overlayHeight || (isLandscape ? "h-48" : "h-auto");

    return (
      <article className="group cursor-pointer relative">
        <div className="relative overflow-hidden">
          {/* Background large card - can be video or image */}
          <DiagonalReveal className="overflow-hidden rounded-2xl" duration={0.7} delay={index * 0.05}>
            {typeof project.image === 'string' ? (
              // Render video if image is a string path
              <video
                src={project.image}
                autoPlay
                loop
                muted
                playsInline
                className={`object-cover w-full ${bgHeight} transition-transform duration-700 group-hover:scale-105`}
              />
            ) : (
              // Render image if it's StaticImageData
              <Image
                src={project.image}
                alt={project.name}
                className={`object-cover ${objectPosition} w-full ${bgHeight} transition-transform duration-700 group-hover:scale-105`}
              />
            )}
          </DiagonalReveal>

          {/* Overlapping smaller card - portrait or landscape (temporarily disabled) */}
          {/* <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 ${defaultOverlayWidth}`}>
            <DiagonalReveal className="overflow-hidden rounded-2xl shadow-2xl" duration={0.7} delay={index * 0.05 + 0.1}>
              <Image
                src={project.overlayImage}
                alt="Featured"
                className={`w-full object-cover ${defaultOverlayHeight} transition-transform duration-700 group-hover:scale-105`}
              />
            </DiagonalReveal>
          </div> */}

        </div>

        {/* Title below the layered cards */}
        <div className="p-4 flex items-center justify-between">
          <h4 className="text-base font-semibold leading-[140%] tracking-[-0.0625rem] text-black font-outfit">
            <TextReveal
              splitType="chars"
              direction="up"
              duration={0.7}
              stagger={0.08}
            >
              {project.name}
            </TextReveal>
          </h4>
          <p className="text-base text-black leading-[100%] font-semibold font-outfit">
            <TextReveal
              splitType="chars"
              direction="up"
              duration={0.7}
              stagger={0.08}
              delay={0.2}
            >
              {project.date}
            </TextReveal>
          </p>
        </div>
      </article>
    );
  };
