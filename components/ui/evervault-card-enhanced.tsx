"use client";
import { useMotionValue } from "motion/react";
import React, { useState, useEffect } from "react";
import { useMotionTemplate, motion } from "motion/react";
import { cn } from "@/lib/utils";

export const EvervaultCardEnhanced = ({
  children,
  className,
  onClick,
  gradientColors = "from-green-500 to-blue-700",
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  gradientColors?: string;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    let str = generateRandomString(1500);
    setRandomString(str);
  }, []);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    const str = generateRandomString(1500);
    setRandomString(str);
  }

  return (
    <div
      className={cn(
        "relative w-full h-full",
        className
      )}
    >
      <div
        onMouseMove={onMouseMove}
        onClick={onClick}
        className="group/card w-full h-full relative overflow-hidden cursor-pointer"
      >
        <CardPatternEnhanced
          mouseX={mouseX}
          mouseY={mouseY}
          randomString={randomString}
          gradientColors={gradientColors}
        />
        <div className="relative z-10 w-full h-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export function CardPatternEnhanced({ mouseX, mouseY, randomString, gradientColors }: any) {
  let maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none absolute inset-0 z-20">
      <div className="absolute inset-0 rounded-lg [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-30"></div>
      <motion.div
        className={`absolute inset-0 rounded-lg bg-gradient-to-r ${gradientColors} opacity-0 group-hover/card:opacity-40 backdrop-blur-sm transition duration-300`}
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-lg opacity-0 mix-blend-overlay group-hover/card:opacity-30"
        style={style}
      >
        <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-300 rounded-lg">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
export const generateRandomString = (length: number) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}; 