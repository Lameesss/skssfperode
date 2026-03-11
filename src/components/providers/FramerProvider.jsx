"use client";

import { AnimatePresence } from "framer-motion";

export default function FramerProvider({ children }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      {children}
    </AnimatePresence>
  );
}
