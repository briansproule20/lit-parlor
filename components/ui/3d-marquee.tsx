"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";

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
        "mx-auto block h-[600px] overflow-x-visible overflow-y-hidden rounded-2xl max-sm:h-100",
        className,
      )}
    >
      <div className="flex size-full items-center justify-center">
        <div className="size-[1720px] shrink-0 scale-50 sm:scale-70 lg:scale-90">
          <div
            style={{
              transform: "rotateX(55deg) rotateY(0deg) rotateZ(-45deg)",
            }}
            className="relative top-40 left-[25%] grid size-full origin-center-top grid-cols-4 gap-12 transform-3d"
          >
            {chunks.map((subarray, colIndex) => (
              <motion.div
                animate={{ y: colIndex % 2 === 0 ? 100 : -100 }}
                transition={{
                  duration: colIndex % 2 === 0 ? 10 : 15,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                key={colIndex + "marquee"}
                className="flex flex-col items-stretch gap-8 w-full"
              >
                <GridLineVertical className="-left-4" offset="80px" />
                {subarray.map((book, bookIndex) => (
                  <div className="relative" key={book.id}>
                    <GridLineHorizontal className="-top-4" offset="20px" />
                    <Link href={book.href || `/${book.id}`} className="block">
                      <motion.div
                        whileHover={{
                          y: -10,
                        }}
                        transition={{
                          duration: 0.3,
                          ease: "easeInOut",
                        }}
                        className="group relative w-full h-64 rounded-lg overflow-hidden ring ring-gray-950/5 hover:shadow-2xl cursor-pointer"
                        style={{
                          background: book.id.includes('coming-soon') 
                            ? 'linear-gradient(135deg, #374151 0%, #4B5563 100%)'
                            : book.id === 'mobydick'
                            ? 'linear-gradient(135deg, #1E293B 0%, #334155 100%)'
                            : book.id === 'prideandprejudice'
                            ? 'linear-gradient(135deg, #BE185D 0%, #E11D48 100%)'
                            : book.id === 'thingsfallapart'
                            ? 'linear-gradient(135deg, #EA580C 0%, #DC2626 100%)'
                            : book.id === 'theireyeswerewatchinggod'
                            ? 'linear-gradient(135deg, #0F766E 0%, #0891B2 100%)'
                            : book.id === 'animalfarm'
                            ? 'linear-gradient(135deg, #7F1D1D 0%, #991B1B 50%, #C2410C 100%)'
                            : book.id === 'crimeandpunishment'
                            ? 'linear-gradient(135deg, #581C87 0%, #7C2D12 100%)'
                            : 'linear-gradient(135deg, #374151 0%, #4B5563 100%)'
                        }}
                      >
                      <div className="h-full flex flex-col p-4">
                        <div className="bg-gradient-to-br from-black/20 to-transparent p-3 rounded-lg mb-3 relative overflow-hidden flex-grow">
                          <div className="absolute top-2 right-2 w-4 h-4 bg-white opacity-20 rounded-full"></div>
                          <div className="absolute bottom-2 left-2 w-3 h-3 bg-white opacity-20 rounded-full"></div>
                          <h3 className="text-white font-bold text-base mb-2 text-center leading-tight font-garamond">
                            {book.title.toUpperCase()}
                          </h3>
                          {book.subtitle && (
                            <p className="text-amber-200 text-center font-serif italic text-sm">
                              {book.subtitle}
                            </p>
                          )}
                          <div className="text-center text-amber-300 text-sm font-serif mt-2">
                            {book.author}
                          </div>
                          <div className="mt-3 text-center">
                            <p className="text-white/90 text-xs font-serif leading-relaxed line-clamp-3">
                              {book.description}
                            </p>
                          </div>
                        </div>
                        <div className="text-center">
                          {book.id.includes('coming-soon') ? (
                            <span className="text-gray-400 text-base font-serif">🔒 Coming Soon</span>
                          ) : (
                            <span className="text-green-400 text-base font-serif">✓ Available</span>
                          )}
                        </div>
                                              </div>
                      </motion.div>
                    </Link>
                  </div>
                ))}
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