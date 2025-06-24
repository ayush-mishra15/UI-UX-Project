"use client";
import { cn } from "@/utils/cn";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

interface WavyBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}

export const WavyBackground: React.FC<WavyBackgroundProps> = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth = 50,
  backgroundFill = "black",
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const noise = createNoise3D();
  const [isSafari, setIsSafari] = useState(false);

  const getSpeed = () => (speed === "fast" ? 0.002 : 0.001);

  useEffect(() => {
    const ua = navigator.userAgent;
    setIsSafari(
      typeof window !== "undefined" &&
        ua.includes("Safari") &&
        !ua.includes("Chrome")
    );
  }, []);

  useEffect(() => {
    let ctx: CanvasRenderingContext2D;
    let w: number, h: number;
    let nt = 0;
    let animationId: number;

    const canvas = canvasRef.current;
    if (!canvas) return;
    ctx = canvas.getContext("2d")!;
    ctx.filter = `blur(${blur}px)`;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };

    window.addEventListener("resize", resize);
    resize();

    const waveColors = colors ?? [
      "#38bdf8",
      "#818cf8",
      "#c084fc",
      "#e879f9",
      "#22d3ee",
    ];

    const drawWave = (n: number) => {
      nt += getSpeed();
      for (let i = 0; i < n; i++) {
        ctx.beginPath();
        ctx.lineWidth = waveWidth;
        ctx.strokeStyle = waveColors[i % waveColors.length];
        for (let x = 0; x < w; x += 5) {
          const y = noise(x / 800, 0.3 * i, nt) * 100;
          ctx.lineTo(x, y + h / 2);
        }
        ctx.stroke();
      }
    };

    const render = () => {
      ctx.globalAlpha = waveOpacity;
      ctx.fillStyle = backgroundFill;
      ctx.fillRect(0, 0, w, h);
      drawWave(5);
      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, [blur, colors, waveWidth, backgroundFill, speed, waveOpacity, noise]);

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center overflow-hidden",
        containerClassName
      )}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={isSafari ? { filter: `blur(${blur}px)` } : undefined}
      />
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
