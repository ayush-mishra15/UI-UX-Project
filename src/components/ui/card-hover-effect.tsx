// src/components/ui/hover-effect.tsx
"use client";

import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";

interface HoverItem {
  title: string;
  description: string;
  link: string;
}

export const HoverEffect: React.FC<{
  items: HoverItem[];
  className?: string;
}> = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10", className)}>
      {items.map((item, idx) => (
        <a
          href={item.link}
          key={item.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                layoutId="hoverBackground"
                className="absolute inset-0 rounded-3xl bg-slate-800/[0.8]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
              />
            )}
          </AnimatePresence>

          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className, children }) => (
  <div
    className={cn(
      "relative z-20 rounded-2xl bg-gradient-to-br from-[#1a1a1a] via-[#0a0a0a] to-[#1a1a1a] p-4 h-full w-full overflow-hidden border border-white/20 group-hover:border-slate-700 shadow-inner shadow-black/50",
      className
    )}
  >
    <div className="relative z-50 p-4">{children}</div>
  </div>
);

export const CardTitle: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className, children }) => (
  <h4 className={cn("mt-4 text-zinc-100 font-semibold tracking-wide", className)}>
    {children}
  </h4>
);

export const CardDescription: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className, children }) => (
  <p className={cn("mt-2 text-zinc-400 leading-relaxed tracking-wide text-sm", className)}>
    {children}
  </p>
);
