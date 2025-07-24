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
  isFading
}: MobyDickNavbarProps) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed top-4 inset-x-0 max-w-4xl mx-auto z-[80]", className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Visual Journey">
          <div className="flex flex-col space-y-4 text-sm">
            <button
              onClick={onBeginVisualJourney}
              disabled={isFading}
              className={`text-left w-full px-3 py-2 rounded-lg transition-all duration-300 ${
                isFading 
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                  : 'bg-blue-100 hover:bg-blue-200 text-blue-800 hover:text-blue-900'
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
                  ? 'bg-green-100 hover:bg-green-200 text-green-800' 
                  : 'bg-amber-100 hover:bg-amber-200 text-amber-800'
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
                  ? 'bg-red-100 hover:bg-red-200 text-red-800' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
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
                  ? 'bg-purple-100 hover:bg-purple-200 text-purple-800' 
                  : 'bg-purple-100 hover:bg-purple-200 text-purple-800'
              }`}
            >
              🔊 {isScreenReaderActive ? 'Stop Reading Aloud' : 'Read With Me'}
            </button>
            <button
              onClick={onExploreFullText}
              className="text-left w-full px-3 py-2 rounded-lg transition-all duration-300 bg-green-100 hover:bg-green-200 text-green-800"
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
              🏠 Return to Parlor
            </HoveredLink>
            <HoveredLink href="/mobydickmodule">
              📖 Moby Dick Module
            </HoveredLink>
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