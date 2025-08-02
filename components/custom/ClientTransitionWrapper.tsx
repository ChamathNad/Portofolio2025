"use client";

import { useEffect, useRef } from "react";

export default function ClientTransitionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Apply page-enter animation on mount
    el.classList.add("page-enter");

    const cleanup = setTimeout(() => {
      el.classList.remove("page-enter");
    }, 200); // Match animation duration

    return () => clearTimeout(cleanup);
  }, []);

  return (
    <div ref={ref} className="mainContainer">
      {children}
    </div>
  );
}
