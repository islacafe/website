"use client";

import type { ReactNode } from "react";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { InnerRouteKey } from "@/lib/inner-routes";

type InnerShellProps = {
  children: ReactNode;
  activePage: InnerRouteKey;
};

export function InnerShell({ children, activePage }: InnerShellProps) {
  const reducedMotion = useReducedMotion();
  useScrollReveal(!reducedMotion);

  return (
    <SmoothScrollProvider>
      <div data-isla-root className="bg-cream text-ink">
        <Nav variant="inner" activePage={activePage} />
        <main>{children}</main>
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}
