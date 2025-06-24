"use client";
import React from "react";
import { motion } from "motion/react";

const transition = {
  type: "spring" as const,
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

type MenuItemProps = {
  setActive: (item: string | null) => void; // यहाँ null भी स्वीकार होगा
  active: string | null;
  item: string;
  children?: React.ReactNode;
};

export const MenuItem: React.FC<MenuItemProps> = ({
  setActive,
  active,
  item,
  children,
}) => {
  const isActive = active === item;

  return (
    <div
      onMouseEnter={() => setActive(item)}
      onMouseLeave={() => setActive(null)} // अब null देना सुरक्षित है
      className="relative"
    >
      <motion.p
        initial={false}
        animate={{ opacity: isActive ? 1 : 0.9 }}
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-white"
      >
        {item}
      </motion.p>

      {isActive && children && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
          className="absolute top-[calc(100%+1.2rem)] left-1/2 -translate-x-1/2 pt-4"
        >
          <motion.div
            layoutId="active"
            transition={transition}
            className="bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-white/[0.2] shadow-xl"
          >
            <motion.div layout className="p-4">
              {children}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

type MenuProps = {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
};

export const Menu: React.FC<MenuProps> = ({ setActive, children }) => (
  <nav
    onMouseLeave={() => setActive(null)}
    className="relative rounded-full border bg-black border-white/[0.2] shadow-input flex justify-center space-x-7 px-8 py-6"
  >
    {children}
  </nav>
);

type ProductItemProps = {
  title: string;
  description: string;
  href: string;
  src: string;
};

export const ProductItem: React.FC<ProductItemProps> = ({
  title,
  description,
  href,
  src,
}) => (
  <a href={href} className="flex space-x-2">
    <img
      src={src}
      width={140}
      height={70}
      alt={title}
      className="shrink-0 rounded-md shadow-2xl"
    />
    <div>
      <h4 className="text-xl font-bold mb-1 text-white">{title}</h4>
      <p className="text-sm max-w-[10rem] text-neutral-300">{description}</p>
    </div>
  </a>
);

type HoveredLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode;
};

export const HoveredLink: React.FC<HoveredLinkProps> = ({
  children,
  className = "",
  ...rest
}) => (
  <a {...rest} className={`text-neutral-200 hover:text-slate-200 ${className}`}>
    {children}
  </a>
);
