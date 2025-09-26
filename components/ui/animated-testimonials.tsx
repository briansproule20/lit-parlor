"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";

import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};
export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
  componentId,
  activeComponentId,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
  componentId?: string;
  activeComponentId?: string | null;
}) => {
  const [active, setActive] = useState(0);
  const isActiveComponent = componentId === activeComponentId;

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Only add keyboard navigation if this is the active component
  useEffect(() => {
    if (!isActiveComponent) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        handlePrev();
        event.preventDefault();
      } else if (event.key === 'ArrowRight') {
        handleNext();
        event.preventDefault();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isActiveComponent]);

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);


  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  // Safety check to prevent errors
  if (!testimonials || testimonials.length === 0) {
    return <div className="mx-auto max-w-sm px-4 py-8">No testimonials available</div>;
  }

  return (
    <div className="mx-auto max-w-sm px-4 py-8 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col justify-between py-4 md:ml-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            {testimonials[active] && (
              <>
                <h3 className="text-2xl font-bold text-black dark:text-white">
                  {testimonials[active].name}
                </h3>
                <div className="mt-1">
                  <p className="text-sm text-gray-600 dark:text-neutral-400">
                    {testimonials[active].designation.split(' • ')[0]}
                  </p>
                  <p className="text-base font-semibold text-amber-700 dark:text-amber-400 mt-1">
                    {testimonials[active].designation.split(' • ')[1]}
                  </p>
                </div>
                <motion.blockquote className="mt-3 relative">
                  <motion.p className="text-base italic text-gray-700 dark:text-neutral-300 relative leading-relaxed max-w-none">
                    {testimonials[active].quote.split(" ").map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{
                        filter: "blur(10px)",
                        opacity: 0,
                        y: 5,
                      }}
                      animate={{
                        filter: "blur(0px)",
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                        delay: 0.02 * index,
                      }}
                      className="inline-block"
                    >
                        {word}&nbsp;
                      </motion.span>
                    ))}
                  </motion.p>
                </motion.blockquote>
              </>
            )}
          </motion.div>
          <div className="flex gap-4 pt-16 md:pt-4">
            <button
              onClick={handlePrev}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};