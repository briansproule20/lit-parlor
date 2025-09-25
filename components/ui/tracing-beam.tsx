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
    <div className={cn("fixed left-2 w-8 pointer-events-none", className)} style={{ top: '4rem', height: 'calc(100vh - 150px)', zIndex: 1000 }}>

      {/* Nice clean dot */}
      <div className="mt-10 ml-1">
        <motion.div
          className="w-3 h-3 rounded-full border-2 border-white shadow-lg"
          animate={{
            backgroundColor: currentSection > 0 ? "#10b981" : "#3b82f6",
          }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Simple line that stops above chat */}
      <div className="ml-2 mt-1" style={{ height: 'calc(100vh - 300px)' }}>
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