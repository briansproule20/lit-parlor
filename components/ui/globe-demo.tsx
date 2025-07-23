"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import dynamic from "next/dynamic";
import { LoaderOne } from "@/components/ui/loader";

const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
  ssr: false,
  loading: () => <LoaderOne size="lg" className="mx-auto" />
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

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for the globe component
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 second loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-row items-center justify-center py-8 h-screen md:h-auto relative w-full">
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4">
        {isLoading ? (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <LoaderOne size="lg" className="mx-auto mb-4" />
              <p className="text-amber-800 font-serif text-lg">Loading Literary Globe...</p>
            </div>
          </div>
        ) : (
          <div className="w-full h-full z-10">
            <World data={allLiteraryData} globeConfig={globeConfig} />
          </div>
        )}
      </div>
    </div>
  );
} 