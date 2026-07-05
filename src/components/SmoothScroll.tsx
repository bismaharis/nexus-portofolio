"use client";
import { useEffect } from "react";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    let lenis: any;
    (async () => {
      const Lenis = (await import("lenis")).default;
      lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
      const raf = (t: number) => {
        lenis.raf(t);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
    })();
    return () => {
      lenis?.destroy();
    };
  }, []);
  return <>{children}</>;
}
