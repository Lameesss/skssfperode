"use client";

import LenisProvider from "./LenisProvider";
import FramerProvider from "./FramerProvider";

export default function Providers({ children }) {
  return (
    <LenisProvider>
      <FramerProvider>{children}</FramerProvider>
    </LenisProvider>
  );
}
