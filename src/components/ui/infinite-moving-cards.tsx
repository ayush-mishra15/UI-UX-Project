"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";

export interface MovingCardItem {
  quote: string;
  name: string;
  title: string;
}

interface InfiniteMovingCardsProps {
  items: MovingCardItem[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

export const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [animated, setAnimated] = useState(false);

  // Sets CSS vars and clones items once
  useEffect(() => {
    const container = containerRef.current;
    const scroller = scrollerRef.current;
    if (!container || !scroller) return;

    // clone items to create infinite scroll
    Array.from(scroller.children).forEach((item) => {
      const clone = item.cloneNode(true);
      scroller.appendChild(clone);
    });

    // update animation direction
    container.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );

    // update animation duration
    const duration = speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
    container.style.setProperty("--animation-duration", duration);

    setAnimated(true);
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full flex-nowrap gap-4 py-4",
          animated && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={`${item.name}-${idx}`}
            className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 px-8 py-6 md:w-[450px] border-zinc-700 bg-[linear-gradient(180deg,#27272a,#18181b)]"
          >
            <blockquote>
              <span className="relative z-20 block text-sm leading-[1.6] font-normal text-gray-100">
                {item.quote}
              </span>
              <footer className="relative z-20 mt-6 text-sm leading-[1.6] font-normal text-gray-400">
                <strong>{item.name}</strong>, {item.title}
              </footer>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
