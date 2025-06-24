// src/components/ui/hover-border-gradient.tsx
"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "@/utils/cn";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

export interface HoverBorderGradientProps {
  as?: React.ElementType;
  containerClassName?: string;
  className?: string;
  duration?: number;
  clockwise?: boolean;
}

export const HoverBorderGradient: React.FC<
  React.PropsWithChildren<HoverBorderGradientProps>
> = ({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 0.4,
  clockwise = true,
  ...props
}) => {
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  const rotateDirection = (current: Direction): Direction => {
    const directions: Direction[] = ["TOP", "RIGHT", "BOTTOM", "LEFT"];
    const idx = directions.indexOf(current);
    const next = clockwise
      ? (idx + 1) % directions.length
      : (idx - 1 + directions.length) % directions.length;
    return directions[next];
  };

  const movingMap: Record<Direction, string> = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, #22d3ee 0%, rgba(34, 211, 238, 0) 100%)",
    RIGHT: "radial-gradient(16.2% 41.2% at 100% 50%, #22d3ee 0%, rgba(34, 211, 238, 0) 100%)",
    BOTTOM: "radial-gradient(20.7% 50% at 50% 100%, #22d3ee 0%, rgba(34, 211, 238, 0) 100%)",
    LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, #22d3ee 0%, rgba(34, 211, 238, 0) 100%)",
  };

  const highlight =
    "radial-gradient(90% 200% at 50% 50%, #06b6d4 0%, rgba(6, 182, 212, 0) 100%)";

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prev) => rotateDirection(prev));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered, duration, clockwise]);

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative rounded-full items-center justify-center overflow-visible p-px w-fit hover:bg-black/10 transition duration-500",
        "flex content-center flex-nowrap gap-10 h-min bg-white/20",
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn(
          "z-10 bg-black px-4 py-2 rounded-full text-white",
          className
        )}
      >
        {children}
      </div>

      {hovered && (
        <motion.div
          className="absolute inset-0 z-0 overflow-hidden rounded-full"
          style={{ filter: "blur(4px)" }}
          initial={{ background: movingMap[direction] }}
          animate={{ background: [movingMap[direction], highlight] }}
          transition={{ ease: "linear", duration }}
        />
      )}

      <div className="absolute inset-[2px] bg-black z-1 rounded-full" />
    </Tag>
  );
};
