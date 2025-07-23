"use client";
 
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

// Gradient color mapping
const gradientColors = {
  'slate-800': '#1e293b',
  'slate-700': '#334155',
  'blue-900': '#1e3a8a',
  'blue-800': '#1e40af',
  'slate-900': '#0f172a',
  'rose-800': '#9f1239',
  'rose-700': '#be123c',
  'rose-900': '#881337',
  'pink-900': '#831843',
  'orange-800': '#9a3412',
  'orange-700': '#c2410c',
  'orange-900': '#7c2d12',
  'red-900': '#7f1d1d',
  'purple-900': '#581c87',
  'purple-800': '#6b21a8',
  'purple-950': '#2e1065',
  'red-950': '#450a0a',
  'teal-800': '#115e59',
  'teal-700': '#0f766e',
  'teal-900': '#134e4a',
  'cyan-900': '#164e63',
  'red-800': '#991b1b',
  'red-700': '#b91c1c'
};

export const ThreeDMarquee = ({
  books,
  className,
}: {
  books: Array<{
    id: string;
    title: string;
    subtitle: string;
    author: string;
    description: string;
    href: string;
    gradientFrom: string;
    gradientTo: string;
    coverGradientFrom: string;
    coverGradientVia: string;
    coverGradientTo: string;
  }>;
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
        "mx-auto block h-[600px] overflow-hidden rounded-2xl max-sm:h-100",
        className,
      )}
    >
      <div className="flex size-full items-center justify-center">
        <div className="size-[1720px] shrink-0 scale-50 sm:scale-75 lg:scale-100">
          <div
            style={{
              transform: "rotateX(55deg) rotateY(0deg) rotateZ(-45deg)",
            }}
            className="relative top-20 left-20 grid size-full origin-top-left grid-cols-4 gap-8 transform-3d"
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
                className="flex flex-col items-start gap-8"
              >
                <GridLineVertical className="-left-4" offset="80px" />
                {subarray.map((book, bookIndex) => (
                  <div className="relative" key={bookIndex + book.id}>
                    <GridLineHorizontal className="-top-4" offset="20px" />
                    <motion.div
                      whileHover={{
                        y: -10,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                      className="aspect-[970/700] rounded-lg ring ring-gray-950/5 hover:shadow-2xl overflow-hidden"
                    >
                      <div 
                        className="p-6 h-full flex flex-col"
                        style={{
                          background: `linear-gradient(to right, ${gradientColors[book.gradientFrom as keyof typeof gradientColors] || '#1e293b'}, ${gradientColors[book.gradientTo as keyof typeof gradientColors] || '#334155'})`
                        }}
                      >
                        {/* Book Cover */}
                        <div 
                          className="p-6 rounded-lg mb-4 relative overflow-hidden min-h-[160px]"
                          style={{
                            background: `linear-gradient(to bottom right, ${gradientColors[book.coverGradientFrom as keyof typeof gradientColors] || '#1e3a8a'}, ${gradientColors[book.coverGradientVia as keyof typeof gradientColors] || '#1e40af'}, ${gradientColors[book.coverGradientTo as keyof typeof gradientColors] || '#0f172a'})`
                          }}
                        >
                          {/* Decorative elements */}
                          <div className="absolute top-2 right-2 w-8 h-8 bg-blue-300 opacity-20 rounded-full"></div>
                          <div className="absolute bottom-2 left-2 w-6 h-6 bg-slate-300 opacity-20 rounded-full"></div>
                          
                          <h3 className="text-2xl font-bold text-amber-100 mb-2 font-serif text-center">
                            {book.title}
                          </h3>
                          <p className="text-amber-200 text-center font-serif italic mb-3">
                            {book.subtitle}
                          </p>
                          <div className="text-center text-amber-300 text-sm font-serif">
                            {book.author}
                          </div>
                          
                          {/* Vintage decoration */}
                          <div className="mt-4 flex justify-center">
                            <div className="w-20 h-0.5 bg-amber-400"></div>
                          </div>
                        </div>
                        
                        {/* Book Description */}
                        <p className="text-amber-100 text-sm leading-relaxed font-serif flex-grow">
                          {book.description}
                        </p>
                        
                        {/* Reading Status */}
                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-green-400 text-xs font-serif">✓ Interactive Edition</span>
                          <span className="text-amber-400 text-xs font-serif">→ Enter</span>
                        </div>
                      </div>
                    </motion.div>
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
          "--offset": offset || "200px", //-100px if you want to keep the line inside
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
          "--offset": offset || "150px", //-100px if you want to keep the line inside
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