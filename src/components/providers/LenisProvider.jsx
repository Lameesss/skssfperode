"use client";

import { ReactLenis } from "lenis/react";

export default function LenisProvider({ children }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,          // smoothness (0 = instant, 1 = never arrives)
        duration: 1.2,      // scroll duration multiplier
        smoothWheel: true,  // smooth mouse wheel
        syncTouch: false,   // native touch on mobile
      }}
    >
      {children}
    </ReactLenis>
  );
}
