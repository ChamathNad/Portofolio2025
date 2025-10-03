"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function ClientTransitionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement | null>(null);


  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 500); // minimum loader
    return () => clearTimeout(timer);
  }, [pathname]);

  
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
      {isLoading ? (
          <div className="flex m-auto items-center justify-center w-[50vw] h-[50vh] align-middle">
            <div className="border-t-transparent rounded-full animate-spin border-Primary-500 w-[50%] max-w-[400px] aspect-square border-[1vw] lg:border-8 "></div>
          </div>
        ) : (children)}
    </div>
  );
}
