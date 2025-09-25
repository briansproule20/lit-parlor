"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const TracingBeam = ({
  className,
  currentSection,
  totalSections,
}: {
  className?: string;
  currentSection: number;
  totalSections: number;
}) => {
  // Calculate progress based on current section
  const sectionProgress = totalSections > 0 ? currentSection / (totalSections - 1) : 0;

  return (
    <div className={cn("fixed left-2 w-8 pointer-events-none", className)} style={{ top: '50%', transform: 'translateY(-50%)', height: '60vh', zIndex: 1000 }}>

      {/* Nice clean dot at top of line */}
      <div className="ml-1">
        <motion.div
          className="w-3 h-3 rounded-full border-2 border-white shadow-lg"
          animate={{
            backgroundColor: currentSection > 0 ? "#10b981" : "#3b82f6",
          }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Centered line */}
      <div className="ml-2 mt-1 relative" style={{ height: '100%' }}>
        {/* Background line - always visible */}
        <div
          className="w-1 bg-gray-600 opacity-30"
          style={{ height: '100%' }}
        />

        {/* Progress line - grows with section changes */}
        <motion.div
          className="w-1 absolute top-0"
          style={{
            height: '100%',
            background: 'linear-gradient(to bottom, #18CCFC, #6344F5, #AE48FF)',
            transformOrigin: 'top',
          }}
          animate={{
            scaleY: sectionProgress,
          }}
          initial={{ scaleY: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>

    </div>
  );
};