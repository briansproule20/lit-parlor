"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
  onActiveCardChange,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
    dateRange?: string;
    countries?: string;
  }[];
  contentClassName?: string;
  onActiveCardChange?: (index: number) => void;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = ref.current;

    const handleScroll = () => {
      if (!container) return;

      // If scrolled to very top, always show first item
      if (container.scrollTop <= 50) {
        setActiveCard(0);
        onActiveCardChange?.(0);
        return;
      }

      // If scrolled to very bottom, show last item
      const isAtBottom = container.scrollTop >= (container.scrollHeight - container.clientHeight - 50);
      if (isAtBottom) {
        const lastIndex = itemRefs.current.length - 1;
        setActiveCard(lastIndex);
        onActiveCardChange?.(lastIndex);
        return;
      }

      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.top + containerRect.height / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      itemRefs.current.forEach((item, index) => {
        if (!item) return;

        const itemRect = item.getBoundingClientRect();
        const itemCenter = itemRect.top + itemRect.height / 2;
        const distance = Math.abs(itemCenter - containerCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveCard(closestIndex);
      onActiveCardChange?.(closestIndex);
    };

    if (container) {
      container.addEventListener('scroll', handleScroll);
      // Set initial state
      setTimeout(handleScroll, 100);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);


  return (
    <div
      className="relative flex h-[50rem] justify-center space-x-10 overflow-y-auto rounded-md p-10 bg-slate-900"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-4xl">
          {content.map((item, index) => (
            <div
              key={item.title + index}
              className="my-16 flex items-start"
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
            >
              {/* Date/Country Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="w-48 flex-shrink-0 mr-8 text-right"
              >
                <div className="text-sm font-semibold text-blue-400 mb-2">
                  {item.dateRange || "Date Unknown"}
                </div>
                <div className="text-xs text-slate-400">
                  {item.countries || "Location Unknown"}
                </div>
              </motion.div>

              {/* Movement Content */}
              <div className="flex-1">
                <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-2xl font-bold text-slate-100"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-kg mt-10 max-w-sm text-slate-300"
                >
                  {item.description}
                </motion.p>
              </div>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        className={cn(
          "sticky top-1/2 -translate-y-1/2 hidden overflow-hidden rounded-md lg:block",
          contentClassName,
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </div>
  );
};