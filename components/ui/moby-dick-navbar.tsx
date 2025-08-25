"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

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
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn(
      "fixed top-4 z-[80] transition-all duration-500",
      showVisualJourney 
        ? "right-4 max-w-md" 
        : "inset-x-0 max-w-4xl mx-auto",
      className
    )}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Visual Journey">
          <div className="flex flex-col space-y-4 text-sm">
            <button
              onClick={onBeginVisualJourney}
              disabled={isFading}
              className={`text-left w-full px-3 py-2 rounded-lg transition-all duration-300 ${
                isFading 
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              🎬 Begin Visual Journey
            </button>
            <HoveredLink href="/mobydickmodule/study-guide">
              📚 Study Guide
            </HoveredLink>
            <HoveredLink href="/mobydickmodule/quiz">
              🎯 Knowledge Quiz
            </HoveredLink>
          </div>
        </MenuItem>
        
        <MenuItem setActive={setActive} active={active} item="Audio Controls">
          <div className="flex flex-col space-y-4 text-sm">
            <button
              onClick={onToggleAudio}
              className={`text-left w-full px-3 py-2 rounded-lg transition-all duration-300 ${
                isAudioPlaying 
                  ? 'bg-green-600 hover:bg-green-700 text-white' 
                  : 'bg-amber-600 hover:bg-amber-700 text-white'
              }`}
            >
              {isAudioPlaying ? '⏸️ Pause Harbor Sounds' : '▶️ Play Harbor Sounds'}
            </button>
            <div className="space-y-2">
              <label className="block text-xs font-medium text-gray-700">Volume</label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="text-xs text-gray-600">{Math.round(volume * 100)}%</div>
            </div>
            <button
              onClick={onToggleMute}
              className={`text-left w-full px-3 py-2 rounded-lg transition-all duration-300 ${
                isMuted 
                  ? 'bg-red-600 hover:bg-red-700 text-white' 
                  : 'bg-gray-600 hover:bg-gray-700 text-white'
              }`}
            >
              {isMuted ? '🔊 Unmute' : '🔇 Mute'}
            </button>
          </div>
        </MenuItem>
        
        <MenuItem setActive={setActive} active={active} item="Reading Tools">
          <div className="flex flex-col space-y-4 text-sm">
            <button
              onClick={onToggleScreenReader}
              className={`text-left w-full px-3 py-2 rounded-lg transition-all duration-300 ${
                isScreenReaderActive 
                  ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                  : 'bg-purple-600 hover:bg-purple-700 text-white'
              }`}
            >
              🔊 {isScreenReaderActive ? 'Stop Reading Aloud' : 'Read With Me'}
            </button>
            <button
              onClick={onExploreFullText}
              className="text-left w-full px-3 py-2 rounded-lg transition-all duration-300 bg-green-600 hover:bg-green-700 text-white"
            >
              📖 Explore Full Text
            </button>
            <HoveredLink href="/mobydickmodule">
              ⚓ Return to Pequod
            </HoveredLink>
          </div>
        </MenuItem>
        
        <MenuItem setActive={setActive} active={active} item="Navigation">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">
            <HoveredLink href="/fullcollection">
              📚 Full Collection
            </HoveredLink>
            <HoveredLink href="/quests">
              🎯 Quests
            </HoveredLink>
          </div>
        </MenuItem>
        
        <MenuItem setActive={setActive} active={active} item="Help">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/pedagogy">
              📚 Pedagogy
            </HoveredLink>
            <HoveredLink href="/glossary">
              📖 Glossary
            </HoveredLink>
            <HoveredLink href="/socratic-forum">
              💭 Socratic Forum
            </HoveredLink>
            <HoveredLink href="/student-success">
              🎓 Student Success
            </HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
} 