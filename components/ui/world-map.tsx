"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import DottedMap from "dotted-map";

import { useTheme } from "next-themes";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string } | { x: number; y: number; label?: string };
    end: { lat: number; lng: number; label?: string } | { x: number; y: number; label?: string };
  }>;
  lineColor?: string;
  useManualPositioning?: boolean;
  locationData?: Array<{
    id: string;
    title: string;
    author: string;
    location: string;
    description: string;
    color: string;
  }>;
}

export default function WorldMap({
  dots = [],
  lineColor = "#0ea5e9",
  useManualPositioning = false,
  locationData = [],
}: MapProps) {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const map = new DottedMap({ height: 100, grid: "diagonal" });

  const { theme } = useTheme();

  const svgMap = map.getSVG({
    radius: 0.22,
    color: theme === "dark" ? "#FFFFFF40" : "#00000040",
    shape: "circle",
    backgroundColor: theme === "dark" ? "black" : "white",
  });

  const projectPoint = (lat: number, lng: number) => {
    // Standard projection
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const getPoint = (point: any) => {
    if ('x' in point && 'y' in point) {
      return { x: point.x, y: point.y };
    } else if ('lat' in point && 'lng' in point) {
      return projectPoint(point.lat, point.lng);
    }
    return { x: 0, y: 0 };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 60;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div className="w-full aspect-[2/1] dark:bg-black bg-white rounded-lg  relative font-sans">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full pointer-events-none select-none"
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox="50 50 700 300"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        {dots.map((dot, i) => {
          const startPoint = getPoint(dot.start);
          const endPoint = getPoint(dot.end);
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="1"
                initial={{
                  pathLength: 0,
                }}
                animate={{
                  pathLength: 1,
                }}
                transition={{
                  duration: 1,
                  delay: 0.5 * i,
                  ease: "easeOut",
                }}
                key={`start-upper-${i}`}
              ></motion.path>
            </g>
          );
        })}

        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {dots.map((dot, i) => {
          const startPoint = getPoint(dot.start);
          const endPoint = getPoint(dot.end);
          
          // Map specific locations to specific coordinates
          let startLocation: typeof locationData[0] | undefined, endLocation: typeof locationData[0] | undefined;
          
          // Nantucket (251, 153) - Moby Dick
          if (startPoint.x === 251 && startPoint.y === 153) {
            startLocation = locationData.find(loc => loc.id === "moby-dick-nantucket");
          }
          // England (394, 98) - Pride and Prejudice
          else if (startPoint.x === 394 && startPoint.y === 98) {
            startLocation = locationData.find(loc => loc.id === "pride-prejudice-england");
          }
          // Nigeria (420, 220) - Things Fall Apart
          else if (startPoint.x === 420 && startPoint.y === 220) {
            startLocation = locationData.find(loc => loc.id === "things-fall-apart-nigeria");
          }
          // St. Petersburg (500, 100) - Crime and Punishment
          else if (startPoint.x === 500 && startPoint.y === 100) {
            startLocation = locationData.find(loc => loc.id === "crime-punishment-russia");
          }
          // Florida (240, 180) - Their Eyes Were Watching God
          else if (startPoint.x === 240 && startPoint.y === 180) {
            startLocation = locationData.find(loc => loc.id === "their-eyes-florida");
          }
          // English Countryside (400, 110) - Animal Farm
          else if (startPoint.x === 400 && startPoint.y === 110) {
            startLocation = locationData.find(loc => loc.id === "animal-farm-england");
          }
          
          // Same logic for end points
          if (endPoint.x === 251 && endPoint.y === 153) {
            endLocation = locationData.find(loc => loc.id === "moby-dick-nantucket");
          }
          else if (endPoint.x === 394 && endPoint.y === 98) {
            endLocation = locationData.find(loc => loc.id === "pride-prejudice-england");
          }
          else if (endPoint.x === 420 && endPoint.y === 220) {
            endLocation = locationData.find(loc => loc.id === "things-fall-apart-nigeria");
          }
          else if (endPoint.x === 500 && endPoint.y === 100) {
            endLocation = locationData.find(loc => loc.id === "crime-punishment-russia");
          }
          else if (endPoint.x === 240 && endPoint.y === 180) {
            endLocation = locationData.find(loc => loc.id === "their-eyes-florida");
          }
          else if (endPoint.x === 400 && endPoint.y === 110) {
            endLocation = locationData.find(loc => loc.id === "animal-farm-england");
          }
          
          return (
            <g key={`points-group-${i}`}>
              <g key={`start-${i}`}>
                <circle
                  cx={startPoint.x}
                  cy={startPoint.y}
                  r="4"
                  fill={startLocation?.color || lineColor}
                  style={{ cursor: 'pointer' }}
                  onMouseEnter={() => setHoveredLocation(startLocation?.id || `start-${i}`)}
                  onMouseLeave={() => setHoveredLocation(null)}
                />
                <circle
                  cx={startPoint.x}
                  cy={startPoint.y}
                  r="4"
                  fill={startLocation?.color || lineColor}
                  opacity="0.3"
                  style={{ cursor: 'pointer' }}
                  onMouseEnter={() => setHoveredLocation(startLocation?.id || `start-${i}`)}
                  onMouseLeave={() => setHoveredLocation(null)}
                >
                  <animate
                    attributeName="r"
                    from="4"
                    to="12"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.3"
                    to="0"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
              <g key={`end-${i}`}>
                <circle
                  cx={endPoint.x}
                  cy={endPoint.y}
                  r="4"
                  fill={endLocation?.color || lineColor}
                  style={{ cursor: 'pointer' }}
                  onMouseEnter={() => setHoveredLocation(endLocation?.id || `end-${i}`)}
                  onMouseLeave={() => setHoveredLocation(null)}
                />
                <circle
                  cx={endPoint.x}
                  cy={endPoint.y}
                  r="4"
                  fill={endLocation?.color || lineColor}
                  opacity="0.3"
                  style={{ cursor: 'pointer' }}
                  onMouseEnter={() => setHoveredLocation(endLocation?.id || `end-${i}`)}
                  onMouseLeave={() => setHoveredLocation(null)}
                >
                  <animate
                    attributeName="r"
                    from="4"
                    to="12"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.3"
                    to="0"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            </g>
          );
        })}
      </svg>
      
      {/* Hover Modals */}
      {hoveredLocation && (
        <div className="absolute pointer-events-none z-10">
          {locationData.map((location) => {
            if (location.id === hoveredLocation) {
              const dotIndex = locationData.indexOf(location);
              const dot = dots[Math.floor(dotIndex / 2)];
              const point = dotIndex % 2 === 0 ? getPoint(dot.start) : getPoint(dot.end);
              
              return (
                <motion.div
                  key={location.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="bg-white/95 border-2 border-gray-300 rounded-lg p-4 shadow-xl max-w-xs"
                  style={{
                    left: `${point.x + 20}px`,
                    top: `${point.y - 60}px`,
                    position: 'absolute',
                    transform: 'translateX(-50%)',
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: location.color }}
                    ></div>
                    <h3 className="font-bold text-gray-900 text-sm">{location.title}</h3>
                  </div>
                  <p className="text-gray-600 text-xs mb-1">
                    <span className="font-semibold">Author:</span> {location.author}
                  </p>
                  <p className="text-gray-600 text-xs mb-2">
                    <span className="font-semibold">Location:</span> {location.location}
                  </p>
                  <p className="text-gray-700 text-xs leading-relaxed">
                    {location.description}
                  </p>
                </motion.div>
              );
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
}
