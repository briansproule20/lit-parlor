"use client";
import React from "react";
import { motion } from "motion/react";
import dynamic from "next/dynamic";

const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
  ssr: false,
});

export default function GlobeDemo() {
  const globeConfig = {
    pointSize: 1.5,
    globeColor: "#1a365d",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#1a365d",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  // Literary locations with their proper colors
  const literaryArcs = [
    // Moby Dick - Nantucket, Massachusetts (41.2835, -70.0995) - Blue
    {
      order: 1,
      startLat: 41.2835,
      startLng: -70.0995,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.2,
      color: "#2563eb",
    },
    // Pride and Prejudice - England (51.5072, -0.1276) - Orange
    {
      order: 2,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 6.5244,
      endLng: 3.3792,
      arcAlt: 0.3,
      color: "#f97316",
    },
    // Things Fall Apart - Nigeria (6.5244, 3.3792) - Purple
    {
      order: 3,
      startLat: 6.5244,
      startLng: 3.3792,
      endLat: 59.9311,
      endLng: 30.3609,
      arcAlt: 0.4,
      color: "#9333ea",
    },
    // Crime and Punishment - St. Petersburg, Russia (59.9311, 30.3609) - Green
    {
      order: 4,
      startLat: 59.9311,
      startLng: 30.3609,
      endLat: 27.6648,
      endLng: -81.5158,
      arcAlt: 0.3,
      color: "#16a34a",
    },
    // Their Eyes Were Watching God - Florida (27.6648, -81.5158) - Green
    {
      order: 5,
      startLat: 27.6648,
      startLng: -81.5158,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.2,
      color: "#16a34a",
    },
    // Animal Farm - English Countryside (51.5072, -0.1276) - Red
    {
      order: 6,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 41.2835,
      endLng: -70.0995,
      arcAlt: 0.3,
      color: "#dc2626",
    },
  ];

  // Use only the arcs data - the points will be generated from the arcs
  const allLiteraryData = literaryArcs;

  return (
    <div className="flex flex-row items-center justify-center py-20 h-screen md:h-auto dark:bg-black bg-white relative w-full">
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="div"
        >
          <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
            Storytelling is a Global, Human Experience
          </h2>
        </motion.div>
        <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
        <div className="absolute w-full -bottom-20 h-72 md:h-full z-10">
          <World data={allLiteraryData} globeConfig={globeConfig} />
        </div>
      </div>
    </div>
  );
} 