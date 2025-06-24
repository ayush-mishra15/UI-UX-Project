"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "motion/react";
import { cn } from "@/utils/cn";

type ContentItem = {
  title: string;
  description: string;
  content?: React.ReactNode;
};

interface StickyScrollProps {
  content: ContentItem[];
  contentClassName?: string;
}

export const StickyScroll: React.FC<StickyScrollProps> = ({
  content,
  contentClassName,
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    container: containerRef,
    offset: ["start start", "end start"],
  });

  const cardCount = content.length;

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const breakpoints = content.map((_, i) => i / cardCount);
    let closest = 0;
    let minDiff = Infinity;
    breakpoints.forEach((bp, idx) => {
      const diff = Math.abs(value - bp);
      if (diff < minDiff) {
        minDiff = diff;
        closest = idx;
      }
    });
    setActiveCard(closest);
  });

  const colors = ["#0f172a", "#000000", "#171717"];
  const images = [
    "/images/img1.png",
    "/images/img2.webp",
    "/images/img3.jpg",
    "/images/img4.jpg",
    "/images/img5.avif",
  ];

  const [bgImage, setBgImage] = useState(images[0]);
  useEffect(() => {
    setBgImage(images[activeCard % images.length]);
  }, [activeCard]);

  return (
    <motion.div
      ref={containerRef}
      animate={{
        backgroundColor: colors[activeCard % colors.length],
      }}
      className="relative flex h-[30rem] justify-center overflow-y-auto rounded-md p-10 sm:space-x-6 md:space-x-10 lg:space-x-32"
    >
      {/* Text side */}
      <div className="relative flex items-start px-10">
        <div className="max-w-screen">
          {content.map((item, idx) => (
            <div key={`${item.title}-${idx}`} className="my-12">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === idx ? 1 : 0.3 }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === idx ? 1 : 0.3 }}
                className="mt-10 max-w-sm text-slate-300"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>

      {/* Sticky image/content side */}
      <div
        className={cn(
          "sticky top-10 hidden h-60 w-80 mt-12 overflow-hidden rounded-2xl lg:block",
          contentClassName
        )}
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
          filter: "brightness(1.3)",
          transition: "background-image 0.5s ease",
        }}
      >
        {content[activeCard]?.content ?? null}
      </div>
    </motion.div>
  );
};
