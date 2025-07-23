"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface BookCard {
  id: string;
  title: string;
  subtitle?: string;
  author: string;
  coverImage: string;
  description: string;
  href?: string;
  gradientFrom?: string;
  gradientTo?: string;
  coverGradientFrom?: string;
  coverGradientVia?: string;
  coverGradientTo?: string;
}

export const ThreeDMarquee = ({
  books,
  className,
}: {
  books: BookCard[];
  className?: string;
}) => {
  // Split the books array into 4 equal parts
  const chunkSize = Math.ceil(books.length / 4);
  const chunks = Array.from({ length: 4 }, (_, colIndex) => {
    const start = colIndex * chunkSize;
    return books.slice(start, start + chunkSize);
  });
  
  return (
    <div
      className={cn(
        "mx-auto block h-[600px] overflow-hidden rounded-2xl max-sm:h-100 relative",
        className,
      )}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d"
      }}
    >
      <div className="flex size-full items-center justify-center">
        <div className="size-[1200px] shrink-0 scale-75 relative z-10" style={{
          transformStyle: "preserve-3d"
        }}>
          <div
            style={{
              transform: "rotateX(45deg) rotateY(0deg) rotateZ(-30deg)",
            }}
            className="relative top-32 left-[-25%] grid size-full origin-center grid-cols-3 gap-8 transform-3d"
          >
            {books.map((book, bookIndex) => (
              <motion.div
                animate={{ y: bookIndex % 2 === 0 ? 50 : -50 }}
                transition={{
                  duration: bookIndex % 2 === 0 ? 8 : 12,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                key={book.id}
                whileHover={{
                  y: -20,
                  scale: 1.1,
                }}
                className="group relative aspect-[3/4] rounded-lg overflow-hidden ring ring-gray-950/5 hover:shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800"
              >
                <img
                  src={book.coverImage}
                  alt={`${book.title} by ${book.author}`}
                  className="w-full h-full object-cover"
                  width={300}
                  height={400}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-white font-bold text-sm mb-1 line-clamp-2">
                    {book.title}
                  </h3>
                  <p className="text-gray-300 text-xs">
                    {book.author}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const GridLineHorizontal = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "1px",
          "--width": "5px",
          "--fade-stop": "90%",
          "--offset": offset || "200px",
          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "absolute left-[calc(var(--offset)/2*-1)] h-[var(--height)] w-[calc(100%+var(--offset))]",
        "bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className,
      )}
    ></div>
  );
};

const GridLineVertical = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "5px",
          "--width": "1px",
          "--fade-stop": "90%",
          "--offset": offset || "150px",
          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-[var(--width)]",
        "bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className,
      )}
    ></div>
  );
}; 