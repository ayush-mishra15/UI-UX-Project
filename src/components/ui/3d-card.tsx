"use client";
import { cn } from "@/utils/cn";
import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";

// Context definition
type MouseEnterContextType = [boolean, React.Dispatch<React.SetStateAction<boolean>>];
const MouseEnterContext = createContext<MouseEnterContextType | undefined>(undefined);

// Container with mouse tracking
export const CardContainer: React.FC<{
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}> = ({ children, className, containerClassName }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    el.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = () => setIsMouseEntered(true);
  const handleMouseLeave = () => {
    setIsMouseEntered(false);
    containerRef.current?.style.setProperty("transform", "rotateY(0deg) rotateX(0deg)");
  };

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div className={cn("py-20 flex items-center justify-center", containerClassName)} style={{ perspective: "1000px" }}>
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn("flex items-center justify-center relative transition-all duration-200 ease-linear", className)}
          style={{ transformStyle: "preserve-3d" }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

// Body wrapper
export const CardBody: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <div className={cn("h-96 w-96 [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]", className)}>
    {children}
  </div>
);

// Generic item with dynamic HTML element support
type CardItemProps<T extends React.ElementType> = {
  as?: T;
  translateX?: number;
  translateY?: number;
  translateZ?: number;
  rotateX?: number;
  rotateY?: number;
  rotateZ?: number;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>;

export function CardItem<T extends React.ElementType = "div">({
  as,
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: CardItemProps<T>) {
  const Tag = as || "div";
  const ref = useRef<HTMLElement>(null);
  const [isMouseEntered] = useContext(MouseEnterContext)!;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const transform = isMouseEntered
      ? `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
      : "none";
    el.style.transform = transform;
  }, [isMouseEntered, translateX, translateY, translateZ, rotateX, rotateY, rotateZ]);

  return (
    <Tag
      ref={ref as React.Ref<null>}
      className={cn("w-fit transition duration-200 ease-linear", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
