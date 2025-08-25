"use client";
import React from "react";

interface MobyDickNavbarProps {
  className?: string;
  onBeginVisualJourney: () => void;
  onToggleAudio: () => void;
  onVolumeChange: (volume: number) => void;
  onToggleMute: () => void;
  onToggleScreenReader: () => void;
  onExploreFullText: () => void;
  isAudioPlaying: boolean;
  isScreenReaderActive: boolean;
  volume: number;
  isMuted: boolean;
  isFading: boolean;
  showVisualJourney: boolean;
}

export default function MobyDickNavbar({
  className,
  onBeginVisualJourney,
  onToggleAudio,
  onVolumeChange,
  onToggleMute,
  onToggleScreenReader,
  onExploreFullText,
  isAudioPlaying,
  isScreenReaderActive,
  volume,
  isMuted,
  isFading,
  showVisualJourney
}: MobyDickNavbarProps) {
  return (
    <div className="fixed top-4 z-[80] p-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg">
      <div className="flex gap-4">
        <button
          onClick={onBeginVisualJourney}
          disabled={isFading}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
        >
          🎬 Begin Visual Journey
        </button>
        <button
          onClick={onToggleAudio}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          {isAudioPlaying ? '⏸️ Pause' : '▶️ Play'}
        </button>
        <button
          onClick={onToggleScreenReader}
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
        >
          🔊 {isScreenReaderActive ? 'Stop' : 'Read'}
        </button>
        <button
          onClick={onExploreFullText}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          📖 Full Text
        </button>
      </div>
    </div>
  );
} 