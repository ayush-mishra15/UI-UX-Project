// src/components/ui/flip-words.tsx
"use client";

import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/utils/cn";

interface FlipWordsProps {
  words: string[];
  duration?: number;
  className?: string;
}

export const FlipWords: React.FC<FlipWordsProps> = ({
  words,
  duration = 3000,
  className,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentWord = words[currentIndex];

  const startAnimation = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % words.length);
  }, [words.length]);

  useEffect(() => {
    const timeout = setTimeout(startAnimation, duration);
    return () => clearTimeout(timeout);
  }, [currentIndex, duration, startAnimation]);

  return (
    <AnimatePresence onExitComplete={() => {}}>
      <motion.div
        key={currentWord}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40, x: 40, filter: "blur(8px)", scale: 2, position: "absolute" }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className={cn("z-10 inline-block relative text-neutral-200 px-2", className)}
      >
        {currentWord.split(" ").map((word, wi) => (
          <motion.span
            key={`${word}-${wi}`}
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: wi * 0.3, duration: 0.3 }}
            className="inline-block whitespace-nowrap"
          >
            {word.split("").map((letter, li) => (
              <motion.span
                key={`${letter}-${li}`}
                initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: wi * 0.3 + li * 0.05, duration: 0.2 }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
            &nbsp;
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
