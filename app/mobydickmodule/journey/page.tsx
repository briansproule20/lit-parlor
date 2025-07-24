'use client'
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { ScratchToReveal } from '@/components/ui/scratch-to-reveal'
import MobyDickNavbar from '@/components/ui/moby-dick-navbar'

interface ChapterData {
  id: number;
  title: string;
  chapter: string;
  quote: string;
  significance: string;
  themes: string[];
  characters: string[];
  symbols: string[];
  detailedAnalysis: string;
}

// Function to map chapter information to Project Gutenberg links
const getGutenbergLink = (chapter: string): string => {
  const baseUrl = "https://www.gutenberg.org/cache/epub/2701/pg2701-images.html";
  
  // Extract chapter number(s) from the chapter string
  if (chapter.includes("Chapter 1") && !chapter.includes("–")) {
    return `${baseUrl}#link2HCH0001`;
  } else if (chapter.includes("Chapters 3–4")) {
    return `${baseUrl}#link2HCH0003`;
  } else if (chapter.includes("Chapter 9")) {
    return `${baseUrl}#link2HCH0009`;
  } else if (chapter.includes("Chapter 19")) {
    return `${baseUrl}#link2HCH0019`;
  } else if (chapter.includes("Chapters 16–22")) {
    return `${baseUrl}#link2HCH0016`;
  } else if (chapter.includes("Chapter 28")) {
    return `${baseUrl}#link2HCH0028`;
  } else if (chapter.includes("Chapter 36")) {
    return `${baseUrl}#link2HCH0036`;
  } else if (chapter.includes("Chapter 38")) {
    return `${baseUrl}#link2HCH0038`;
  } else if (chapter.includes("Chapter 96")) {
    return `${baseUrl}#link2HCH0096`;
  } else if (chapter.includes("Chapters 110–111")) {
    return `${baseUrl}#link2HCH0110`;
  } else if (chapter.includes("Chapter 128")) {
    return `${baseUrl}#link2HCH0128`;
  } else if (chapter.includes("Chapter 131")) {
    return `${baseUrl}#link2HCH0131`;
  } else if (chapter.includes("Chapters 133–135")) {
    return `${baseUrl}#link2HCH0133`;
  } else if (chapter.includes("Epilogue")) {
    return `${baseUrl}#link2H_EPIL`;
  }
  
  // Default to the beginning if no specific match
  return baseUrl;
};

export default function Journey() {
  const [selectedChapter, setSelectedChapter] = useState<ChapterData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [isMuted, setIsMuted] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [fadeOpacity, setFadeOpacity] = useState(0);
  const [modalOpacity, setModalOpacity] = useState(0);
  const [showVisualJourney, setShowVisualJourney] = useState(false);
  const [sessionTime, setSessionTime] = useState(0);
  const [isChapter2Revealed, setIsChapter2Revealed] = useState(false);
  const [isScreenReaderActive, setIsScreenReaderActive] = useState(false);
  const [currentReadingText, setCurrentReadingText] = useState('');

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Navigation functions for modal
  const navigateToPrevious = () => {
    if (!selectedChapter) return;
    const currentIndex = chapterData.findIndex(chapter => chapter.id === selectedChapter.id);
    if (currentIndex > 0) {
      setSelectedChapter(chapterData[currentIndex - 1]);
    }
  };

  const navigateToNext = () => {
    if (!selectedChapter) return;
    const currentIndex = chapterData.findIndex(chapter => chapter.id === selectedChapter.id);
    if (currentIndex < chapterData.length - 1) {
      setSelectedChapter(chapterData[currentIndex + 1]);
    }
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isModalOpen) return;
      
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        navigateToPrevious();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        navigateToNext();
      } else if (event.key === 'Escape') {
        event.preventDefault();
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, selectedChapter]);

  const chapterData: ChapterData[] = [
    {
      id: 1,
      title: "Call me Ishmael",
      chapter: "Chapter 1",
      quote: "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      significance: "Establishes Ishmael's philosophical tone and central themes like isolation, existentialism, and man's search for meaning. The famous opening immediately draws us into the narrator's contemplative world-view.",
      themes: ["Isolation", "Existentialism", "Search for Meaning", "Wanderlust"],
      characters: ["Ishmael"],
      symbols: ["The Sea", "The Shore"],
      detailedAnalysis: "This iconic opening line sets the tone for the entire novel. Ishmael's casual, conversational tone belies the profound philosophical journey that lies ahead. The phrase 'never mind how long precisely' suggests both the narrator's unreliable memory and the timeless nature of the story. His decision to go to sea reflects a universal human desire to escape the mundane and seek adventure, while also introducing themes of isolation and the vastness of the natural world."
    },
    {
      id: 2,
      title: "Ishmael and Queequeg Bond",
      chapter: "Chapters 3–4",
      quote: "Thus, then, in our hearts' honeymoon, lay I and Queequeg—a cosy, loving pair.",
      significance: "Their deep, cross-cultural friendship is a rare human warmth in a novel filled with obsession and doom. This unexpected bond between the Christian narrator and the Polynesian harpooner introduces vital themes of unity, brotherhood, and tolerance.",
      themes: ["Friendship", "Cultural Unity", "Brotherhood", "Tolerance"],
      characters: ["Ishmael", "Queequeg"],
      symbols: ["The Bed", "The Pipe"],
      detailedAnalysis: "The relationship between Ishmael and Queequeg represents one of the novel's most hopeful themes. Their friendship transcends cultural, religious, and racial barriers, offering a model of human connection in a world often divided. The 'hearts' honeymoon' metaphor suggests the purity and intensity of their bond, while their shared bed becomes a symbol of their unity. This relationship provides emotional grounding for Ishmael throughout his journey."
    },
    {
      id: 3,
      title: "The Whaleman's Chapel Sermon",
      chapter: "Chapter 9",
      quote: "Shipmates, God has laid but one hand upon you; both his hands press upon me. I have read ye by what murky light may be mine the lesson that Jonah teaches to all sinful men.",
      significance: "The Jonah sermon foreshadows Ahab's doom while introducing religious and fatalistic themes central to the novel. Father Mapple's powerful preaching sets the moral and spiritual tone for the voyage ahead.",
      themes: ["Religion", "Fate", "Sin", "Redemption", "Prophecy"],
      characters: ["Father Mapple", "Jonah (Biblical)"],
      symbols: ["The Pulpit", "The Whale"],
      detailedAnalysis: "Father Mapple's sermon on Jonah serves as both a warning and a prophecy. The story of Jonah, who tried to flee from God's will and was swallowed by a whale, directly parallels the journey that lies ahead for the Pequod's crew. The 'murky light' suggests the uncertain nature of divine guidance, while the emphasis on sin and redemption sets up the moral framework for Ahab's later transgressions. This chapter establishes the novel's deep engagement with biblical themes and foreshadows the crew's fate."
    },
    {
      id: 4,
      title: "Meeting Elijah",
      chapter: "Chapter 19",
      quote: "Ye said true—ye haven't seen Old Thunder yet, have ye? Well, don't ye ever do it. Look here, when Captain Ahab is all right, then this left arm of mine will be all right; not before.",
      significance: "Elijah's cryptic warning about the Pequod and its captain adds ominous prophecy and tension. This mysterious encounter serves as a biblical warning that foreshadows the tragic fate awaiting the ship.",
      themes: ["Prophecy", "Warning", "Fate", "Biblical Allusion"],
      characters: ["Elijah", "Ishmael", "Queequeg"],
      symbols: ["Elijah's Arm", "The Pequod"],
      detailedAnalysis: "Elijah serves as a biblical prophet figure, warning of impending doom. His name directly references the Old Testament prophet Elijah, who was known for his warnings and miracles. The mysterious nature of his warnings—referring to Ahab as 'Old Thunder' and linking his own physical condition to the captain's fate—creates an atmosphere of supernatural foreboding. This encounter establishes the novel's pattern of prophetic warnings that go unheeded."
    },
    {
      id: 5,
      title: "Boarding the Pequod",
      chapter: "Chapters 16–22",
      quote: "She was a ship of the old school, rather small if anything; with an old-fashioned claw-footed look about her. Long seasoned and weather-stained in the typhoons and calms of all four oceans.",
      significance: "Finalizes Ishmael and Queequeg's entry into the voyage. First mentions of Ahab hint at mystery and danger, building suspense around the captain who remains hidden from view.",
      themes: ["Adventure", "Mystery", "The Sea", "Tradition"],
      characters: ["Ishmael", "Queequeg", "Captain Peleg", "Captain Bildad"],
      symbols: ["The Pequod", "The Wharf"],
      detailedAnalysis: "The Pequod itself becomes a character in the novel, representing both the tradition of whaling and the microcosm of human society. Its 'old-fashioned claw-footed look' suggests both tradition and the primitive nature of the hunt. The ship's weathered appearance from 'all four oceans' establishes its history and the vast scope of whaling. The gradual revelation of Ahab's character through others' descriptions builds suspense and mystery around the captain."
    },
    {
      id: 6,
      title: "First Sighting of Captain Ahab",
      chapter: "Chapter 28",
      quote: "Threading its way out from among his grey hairs, and continuing right down one side of his tawny scorched face and neck, till it disappeared in his clothing, you saw a slender rod-like mark, lividly whitish.",
      significance: "Ahab is revealed physically and symbolically as a scarred, monomaniacal figure. His ivory leg and burning gaze introduce his mythic stature and hint at the obsession that will doom them all.",
      themes: ["Obsession", "Scarring", "Leadership", "Mystery"],
      characters: ["Captain Ahab"],
      symbols: ["The Scar", "The Ivory Leg", "The Burning Gaze"],
      detailedAnalysis: "Ahab's physical appearance immediately establishes his mythic stature. The scar that runs from his hair to his clothing suggests a wound that has penetrated to his very soul. The 'lividly whitish' color of the scar contrasts with his 'tawny scorched' skin, emphasizing the unnatural nature of his injury. His ivory leg, made from whale bone, represents his literal and metaphorical connection to his nemesis, Moby Dick. This first appearance sets up Ahab as a figure of both awe and tragedy."
    },
    {
      id: 7,
      title: "Ahab's Gold Doubloon",
      chapter: "Chapter 36",
      quote: "Whosoever of ye raises me a white-headed whale with a wrinkled brow and a crooked jaw... he shall have this gold ounce, my boys!",
      significance: "Ahab offers a gold coin for the first sighting of Moby Dick. The crew's varying interpretations of the doubloon symbolize subjectivity, fate, and desire, showing how each person projects their own meaning onto symbols.",
      themes: ["Reward", "Subjectivity", "Symbolism", "Desire"],
      characters: ["Captain Ahab", "The Crew"],
      symbols: ["The Gold Doubloon", "Moby Dick"],
      detailedAnalysis: "The gold doubloon becomes a powerful symbol of subjectivity and interpretation. Each crew member who looks at the coin sees different meanings based on their own backgrounds and desires. This episode demonstrates how symbols can mean different things to different people, and how our interpretations reveal our inner nature. The doubloon also represents the material reward that contrasts with Ahab's spiritual quest for revenge."
    },
    {
      id: 8,
      title: "The Quarter-Deck Speech",
      chapter: "Chapter 36",
      quote: "Aye, aye! and I'll chase him round Good Hope, and round the Horn, and round the Norway Maelstrom, and round perdition's flames before I give him up!",
      significance: "Ahab declares his obsession and mission: revenge on Moby Dick. A pivotal thematic moment about man's struggle with fate and the divine, where Ahab reveals his complete commitment to his vendetta regardless of the cost.",
      themes: ["Revenge", "Obsession", "Defiance", "Fate"],
      characters: ["Captain Ahab", "The Crew"],
      symbols: ["The Quarter-Deck", "The Compass"],
      detailedAnalysis: "This speech marks Ahab's transformation from a commercial whaling captain to a figure of mythic proportions. His declaration to chase Moby Dick 'round perdition's flames' elevates his quest to a cosmic level, suggesting he would defy even hell itself. The speech reveals Ahab's complete abandonment of commercial concerns in favor of his personal vendetta. This moment establishes Ahab as a tragic hero whose flaw is his monomaniacal obsession."
    },
    {
      id: 9,
      title: "Starbuck Confronts Ahab",
      chapter: "Chapter 38",
      quote: "Vengeance on a dumb brute! cried Starbuck, that simply smote thee from blindest instinct! Madness! To be enraged with a dumb thing, Captain Ahab, seems blasphemous.",
      significance: "The novel's moral center, Starbuck pleads for reason and questions the wisdom of Ahab's quest. Ahab's rejection of his first mate's counsel marks his descent into full-blown vengeance, abandoning all moral restraint.",
      themes: ["Reason vs. Passion", "Morality", "Blasphemy", "Leadership"],
      characters: ["Captain Ahab", "Starbuck"],
      symbols: ["The Quarter-Deck", "The Compass"],
      detailedAnalysis: "Starbuck represents the voice of reason and morality in the novel. His argument that Moby Dick is merely a 'dumb brute' acting on instinct challenges Ahab's attribution of malice to the whale. The accusation of blasphemy suggests that Ahab's quest is not just foolish but morally wrong. This confrontation establishes the central conflict between rational, moral behavior and obsessive, destructive passion."
    },
    {
      id: 10,
      title: "The Try-Works",
      chapter: "Chapter 96",
      quote: "Look not too long in the face of the fire, O man! Never dream with thy hand on the helm! Turn not thy back to the compass; accept the first hint of the hitching tiller; believe not the artificial fire.",
      significance: "Ishmael's night shift at the blubber furnace becomes a hallucinatory meditation on darkness, madness, and industrial man's alienation. This haunting chapter explores the psychological toll of the voyage.",
      themes: ["Madness", "Industrialization", "Alienation", "Darkness"],
      characters: ["Ishmael"],
      symbols: ["The Try-Works", "The Fire", "The Compass"],
      detailedAnalysis: "The try-works episode represents one of the novel's most powerful meditations on the psychological effects of industrial labor. The fire becomes a metaphor for the destructive power of obsession and the dehumanizing effects of industrial work. Ishmael's near-madness while tending the furnace suggests how the voyage is affecting his mental state. The warning about not turning one's back to the compass becomes a metaphor for maintaining moral and spiritual direction."
    },
    {
      id: 11,
      title: "Queequeg's Coffin",
      chapter: "Chapters 110–111",
      quote: "A life-buoy of a coffin! Does it go further? Can it be that in some spiritual sense the coffin is, after all, but an immortality-preserver!",
      significance: "Queequeg becomes ill and commissions a coffin, which later becomes Ishmael's life buoy. This powerful symbol foreshadows death and salvation, showing how instruments of doom can become sources of life.",
      themes: ["Death", "Salvation", "Transformation", "Friendship"],
      characters: ["Queequeg", "Ishmael"],
      symbols: ["The Coffin", "The Life-Buoy"],
      detailedAnalysis: "The coffin episode represents one of the novel's most powerful symbolic reversals. What begins as a symbol of death becomes an instrument of salvation. This transformation suggests the novel's complex relationship with mortality and the possibility of transcendence. The coffin also represents the enduring bond between Queequeg and Ishmael, as Queequeg's gift ultimately saves his friend's life. This episode foreshadows the novel's ending while offering a glimmer of hope in the face of death."
    },
    {
      id: 12,
      title: "The Rachel",
      chapter: "Chapter 128",
      quote: "My boy, my own boy is among them. For God's sake—I beg, I conjure—here exclaimed the stranger Captain to Ahab, who thus far had but icily received his petition.",
      significance: "A captain begs Ahab for help finding his lost son, but Ahab refuses, showing his complete moral decay and tunnel-visioned obsession. This moment reveals how far Ahab has fallen from basic human compassion.",
      themes: ["Compassion", "Moral Decay", "Obsession", "Fatherhood"],
      characters: ["Captain Gardiner", "Captain Ahab"],
      symbols: ["The Rachel", "The Lost Son"],
      detailedAnalysis: "The Rachel episode represents Ahab's complete moral failure. His refusal to help a father find his lost son demonstrates how his obsession has destroyed his capacity for basic human compassion. The name 'Rachel' is significant, as Rachel in the Bible wept for her children who were no more. This biblical allusion emphasizes the tragedy of the lost son and Ahab's heartless response. This moment shows the human cost of Ahab's monomania."
    },
    {
      id: 13,
      title: "The Delight",
      chapter: "Chapter 131",
      quote: "The harpoon is not yet forged that will ever do that, answered the other, sadly glancing upon a rounded hammock on the deck, whose gathered sides some noiseless sailors were busy in sewing together.",
      significance: "The Pequod meets a ship already wounded by Moby Dick. The crew is terrified by this final warning, but Ahab ignores even this direct evidence of the White Whale's deadly power.",
      themes: ["Warning", "Fate", "Terror", "Hubris"],
      characters: ["Captain of the Delight", "Captain Ahab"],
      symbols: ["The Hammock", "The Harpoon"],
      detailedAnalysis: "The Delight episode provides the final warning before the Pequod's encounter with Moby Dick. The ship's name is ironic, as there is nothing delightful about their encounter with the white whale. The hammock being sewn together represents a shroud for a dead sailor, providing direct evidence of Moby Dick's deadly power. Ahab's refusal to heed this warning demonstrates his complete abandonment of reason and his fatal hubris."
    },
    {
      id: 14,
      title: "The Three-Day Chase",
      chapter: "Chapters 133–135",
      quote: "From hell's heart I stab at thee; for hate's sake I spit my last breath at thee. Sink all coffins and all hearses to one common pool!",
      significance: "The climax arrives. Ahab and crew engage Moby Dick in an epic three-day battle. Over three days, the whale systematically destroys the Pequod and kills nearly all aboard, fulfilling the prophecies of doom that have haunted the voyage.",
      themes: ["Revenge", "Destruction", "Fate", "Tragedy"],
      characters: ["Captain Ahab", "Moby Dick", "The Crew"],
      symbols: ["The White Whale", "The Pequod", "The Harpoon"],
      detailedAnalysis: "The three-day chase represents the climax of Ahab's quest and the fulfillment of all the prophecies of doom. The systematic destruction of the Pequod over three days suggests the inevitability of Ahab's fate. Ahab's final words, quoting from Moby Dick's perspective, suggest his complete identification with his nemesis. The destruction of the ship and the death of nearly all aboard represents the cost of human hubris and the power of nature over human ambition."
    },
    {
      id: 15,
      title: "Ishmael's Survival",
      chapter: "Epilogue",
      quote: "And I only am escaped alone to tell thee.",
      significance: "Ishmael survives by floating on Queequeg's coffin and is rescued by the Rachel. He becomes the lone witness to the catastrophe, emphasizing themes of fate, rebirth, and the power of storytelling to preserve memory and meaning.",
      themes: ["Survival", "Storytelling", "Memory", "Redemption"],
      characters: ["Ishmael"],
      symbols: ["Queequeg's Coffin", "The Rachel"],
      detailedAnalysis: "Ishmael's survival represents the novel's final paradox: out of destruction comes the possibility of renewal through storytelling. His survival on Queequeg's coffin suggests the enduring power of friendship and the possibility of transcendence. The fact that he is rescued by the Rachel, the ship whose captain Ahab had refused to help, suggests a kind of cosmic justice. Ishmael's role as the sole survivor and narrator emphasizes the importance of bearing witness and preserving memory."
    }
  ];

  const openModal = (chapter: ChapterData) => {
    setSelectedChapter(chapter);
    setIsModalOpen(true);
    setModalOpacity(1); // Immediately visible for normal modal opening
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedChapter(null);
    setModalOpacity(0);
    setShowVisualJourney(false);
  };

  // Audio control functions
  const toggleAudio = () => {
    if (audioRef.current) {
      if (isAudioPlaying) {
        audioRef.current.pause();
        setIsAudioPlaying(false);
      } else {
        audioRef.current.play().then(() => {
          setIsAudioPlaying(true);
          // Show a subtle notification
          const notification = document.createElement('div');
          notification.className = 'fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-fadeIn';
          notification.textContent = '🌊 Harbor sounds activated';
          document.body.appendChild(notification);
          setTimeout(() => {
            notification.remove();
          }, 3000);
        }).catch(error => {
          console.log('Audio play failed:', error);
        });
      }
    }
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const toggleMute = () => {
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);
    if (audioRef.current) {
      audioRef.current.muted = newMutedState;
    }
  };

  // Screen Reader Functions
  const toggleScreenReader = () => {
    if (isScreenReaderActive) {
      // Stop reading
      if (speechRef.current) {
        window.speechSynthesis.cancel();
        speechRef.current = null;
      }
      setIsScreenReaderActive(false);
      setCurrentReadingText('');
    } else {
      // Start reading
      setIsScreenReaderActive(true);
      
      // Test speech synthesis first
      if (!window.speechSynthesis) {
        alert('Speech synthesis not supported in this browser');
        setIsScreenReaderActive(false);
        return;
      }
      
      // Don't touch harbor sounds at all - let user control them manually
      
      // Start reading immediately
      setTimeout(() => {
        console.log('About to read content...');
        // Pass true to bypass the isScreenReaderActive check
        readCurrentContent(true);
      }, 100);
    }
  };

  const readCurrentContent = (forceRead = false) => {
    if (!isScreenReaderActive && !forceRead) return;

    // Get the current chapter content to read
    let textToRead = '';
    
    if (selectedChapter) {
      textToRead = `${selectedChapter.title}. ${selectedChapter.chapter}. ${selectedChapter.quote}. Significance: ${selectedChapter.significance}. Detailed Analysis: ${selectedChapter.detailedAnalysis}`;
    } else {
      // Read the journey introduction with title
      textToRead = "The Journey Begins. Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. This is the beginning of Moby Dick, Herman Melville's masterpiece of American literature.";
    }

    console.log('Reading text:', textToRead); // Debug log
    console.log('Screen reader active:', isScreenReaderActive); // Debug log

    // Cancel any existing speech
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }

    // Create new speech utterance - simplified like the test button
    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.rate = 0.9;
    utterance.pitch = 1.0;
    utterance.volume = 0.8;

    utterance.onend = () => {
      setIsScreenReaderActive(false);
      setCurrentReadingText('');
    };

    utterance.onerror = (event) => {
      console.error('Speech synthesis error:', event);
      setIsScreenReaderActive(false);
      setCurrentReadingText('');
    };

    utterance.onstart = () => {
      console.log('Speech started');
      console.log('Speaking text:', textToRead);
      setCurrentReadingText(textToRead.substring(0, 50) + '...');
    };

    speechRef.current = utterance;
    console.log('Calling speechSynthesis.speak...');
    window.speechSynthesis.speak(utterance);
    console.log('Speech synthesis called');
  };



  // Initialize audio when component mounts
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.muted = isMuted;
      audioRef.current.loop = true;
    }
  }, [volume, isMuted]);

  // Fade to black and ramp volume function
  const beginVisualJourney = () => {
    setIsFading(true);
    setShowVisualJourney(true);
    
    // Start audio if not playing
    if (!isAudioPlaying && audioRef.current) {
      audioRef.current.play().then(() => {
        setIsAudioPlaying(true);
      }).catch(error => {
        console.log('Audio play failed:', error);
      });
    }
    
    // Fade to black over 3 seconds
    const fadeDuration = 3000; // 3 seconds
    const fadeSteps = 60; // 60 steps for smooth animation
    const fadeInterval = fadeDuration / fadeSteps;
    let currentStep = 0;
    
    const fadeIntervalId = setInterval(() => {
      currentStep++;
      const newOpacity = (currentStep / fadeSteps);
      setFadeOpacity(newOpacity);
      
      // Ramp volume from current to max with exponential curve for more noticeable effect
      const progress = currentStep / fadeSteps;
      const volumeIncrease = Math.pow(progress, 0.7); // Exponential curve for more dramatic increase
      const newVolume = Math.min(1, volume + (1 - volume) * volumeIncrease);
      handleVolumeChange(newVolume);
      
      if (currentStep >= fadeSteps) {
        clearInterval(fadeIntervalId);
        // After fade completes, open Chapter 1 modal
        setTimeout(() => {
          const firstChapter = chapterData.find(chapter => chapter.id === 1);
          if (firstChapter) {
            setSelectedChapter(firstChapter);
            setIsModalOpen(true);
            setModalOpacity(0); // Start modal invisible
          }
          // Fade back in over 2 seconds for slower, more dramatic reveal
          setTimeout(() => {
            const fadeBackDuration = 2000; // 2 seconds
            const fadeBackSteps = 60;
            const fadeBackInterval = fadeBackDuration / fadeBackSteps;
            let fadeBackStep = 0;
            
            const fadeBackIntervalId = setInterval(() => {
              fadeBackStep++;
              const newOpacity = 1 - (fadeBackStep / fadeBackSteps);
              setFadeOpacity(newOpacity);
              
              // Start fading in modal halfway through the fade back
              if (fadeBackStep >= fadeBackSteps / 2) {
                const modalProgress = (fadeBackStep - fadeBackSteps / 2) / (fadeBackSteps / 2);
                setModalOpacity(modalProgress);
              }
              
              if (fadeBackStep >= fadeBackSteps) {
                clearInterval(fadeBackIntervalId);
                setIsFading(false);
                setFadeOpacity(0);
                setModalOpacity(1); // Ensure modal is fully visible
              }
            }, fadeBackInterval);
          }, 1000);
        }, 500);
      }
    }, fadeInterval);
  };

  // Auto-start audio when page loads (with user interaction)
  useEffect(() => {
    const handleUserInteraction = (event: Event) => {
      // Don't auto-start audio if clicking on screen reader or reading buttons
      const target = event.target as HTMLElement;
      if (target.closest('[data-screen-reader]') || target.closest('[data-reading-button]')) {
        return;
      }
      
      if (audioRef.current && !isAudioPlaying) {
        audioRef.current.play().catch(error => {
          console.log('Audio autoplay prevented:', error);
        });
      }
      // Remove the event listener after first interaction
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };

    // Add event listeners for user interaction
    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };
  }, [isAudioPlaying]);

  // Session timer
  useEffect(() => {
    const timer = setInterval(() => {
      setSessionTime(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen py-8 px-4 relative" style={{
        backgroundImage: 'url(/images/ship-storm.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}>
      
      {/* Audio Element */}
      <audio 
        ref={audioRef}
        src="/sounds/harbor-ambience.mp3"
        preload="auto"
        onPlay={() => setIsAudioPlaying(true)}
        onPause={() => setIsAudioPlaying(false)}
        onError={(e) => console.error('Audio error:', e)}
      />

      {/* Fade Overlay */}
      {isFading && (
        <div 
          className="fixed inset-0 bg-black z-50 transition-opacity duration-100"
          style={{ opacity: fadeOpacity, top: '80px' }}
        ></div>
      )}

      {/* Moby Dick Navbar */}
      <MobyDickNavbar
        onBeginVisualJourney={beginVisualJourney}
        onToggleAudio={toggleAudio}
        onVolumeChange={handleVolumeChange}
        onToggleMute={toggleMute}
        onToggleScreenReader={toggleScreenReader}
        onExploreFullText={() => {
          const gutenbergLink = getGutenbergLink("Chapter 1");
          window.open(gutenbergLink, '_blank');
        }}
        isAudioPlaying={isAudioPlaying}
        isScreenReaderActive={isScreenReaderActive}
        volume={volume}
        isMuted={isMuted}
        isFading={isFading}
      />
      
      {/* Main Content */}
      <div className="pt-20">

      <div className="max-w-4xl mx-auto">
        
        {/* Journey Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-8 shadow-2xl transform relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-3xl" style={{
            border: '4px solid #8B4513',
            borderRadius: '12px',
            boxShadow: `
              0 8px 32px rgba(0, 0, 0, 0.5),
              inset 0 4px 8px rgba(255, 255, 255, 0.3),
              inset 0 -4px 8px rgba(139, 69, 19, 0.6)
            `
          }}>
            {/* Parchment background */}
            <div className="absolute inset-0" style={{
              background: `
                radial-gradient(circle at 30% 20%, rgba(252, 248, 227, 0.95) 0%, transparent 70%),
                radial-gradient(circle at 70% 80%, rgba(245, 222, 179, 0.9) 0%, transparent 70%),
                radial-gradient(circle at 20% 70%, rgba(238, 203, 161, 0.8) 0%, transparent 60%),
                linear-gradient(135deg, #FEFBF0 0%, #F5DEB3 25%, #DEB887 50%, #F5DEB3 75%, #FEFBF0 100%)
              `
            }}></div>
            
            <div className="relative z-10">
              <h1 className="text-5xl font-bold text-amber-900 mb-4 font-serif" style={{
                textShadow: '3px 3px 6px rgba(0,0,0,0.4)',
                letterSpacing: '0.05em'
              }}>
                🧭 THE JOURNEY BEGINS
              </h1>
              <div className="w-full h-2 bg-amber-700 mb-4"></div>
              <p className="text-2xl text-amber-800 font-serif leading-relaxed">
                "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse..."
              </p>
            </div>
          </div>
        </div>

        {/* Journey Content - The 15 Key Moments */}
        <div className="space-y-8">
          {chapterData.map((chapter, idx) => (
            <div
              key={chapter.id}
              data-chapter={chapter.id}
              className="bg-amber-50/95 border-4 border-amber-600 rounded-xl p-8 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl cursor-pointer"
              onClick={() => openModal(chapter)}
            >
              <h2 className="text-3xl font-bold text-amber-900 mb-6 font-serif">
                {chapter.id}. {chapter.title} – {chapter.chapter}
              </h2>
              <div className="prose prose-lg font-serif text-amber-800 leading-relaxed">
                <div className="mb-6 p-4 bg-amber-100 rounded-lg border-l-4 border-amber-600">
                  <p className="italic text-lg">{chapter.quote}</p>
                </div>
                <p className="mb-4">
                  <strong>Significance:</strong> {chapter.significance}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Add study guide and quiz buttons at the bottom */}
        <div className="flex flex-wrap gap-4 justify-center mt-12">
          <Link 
            href="/mobydickmodule/study-guide"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
          >
            📚 Deepen Your Study
          </Link>
          <Link 
            href="/mobydickmodule/quiz"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
          >
            🎯 Test Your Knowledge
          </Link>
        </div>

      </div>

      {/* Modal */}
      {isModalOpen && selectedChapter && (
        <div className={`fixed inset-0 z-60 flex items-center ${showVisualJourney ? 'justify-start' : 'justify-center'} p-4`}>
          {/* Backdrop with blur */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeModal}
          ></div>
          
          {/* Visual Journey Element - Only shows when triggered by Visual Journey button */}
          {showVisualJourney && (
                          <div 
              className={`fixed top-1/2 transform -translate-y-1/2 z-60 transition-opacity duration-1000 ${selectedChapter.id === 3 ? 'left-1/2 translate-x-1/4' : selectedChapter.id === 5 ? 'left-1/2 translate-x-1/4' : selectedChapter.id === 6 ? 'left-1/2 translate-x-1/4' : selectedChapter.id === 7 ? 'left-1/2 translate-x-1/4' : selectedChapter.id === 8 ? 'left-1/2 translate-x-1/4' : selectedChapter.id === 9 ? 'left-1/2 translate-x-1/4' : selectedChapter.id === 10 ? 'left-1/2 translate-x-1/4' : selectedChapter.id === 11 ? 'left-1/2 translate-x-1/4' : selectedChapter.id === 15 ? 'left-1/2 translate-x-1/4' : 'right-8'}`}
              style={{ opacity: modalOpacity }}
            >
                            <div className="bg-gradient-to-br from-amber-800 to-amber-700 p-4 rounded-lg border-2 border-amber-500 shadow-inner">
                {selectedChapter.id === 2 ? (
                  <div className="w-full h-[28rem] object-cover rounded border border-amber-400 overflow-hidden">
                    <ScratchToReveal
                      width={800}
                      height={448}
                      minScratchPercentage={60}
                      className="w-full h-full"
                      gradientColors={["#8B4513", "#A0522D", "#CD853F"]}
                      onComplete={() => setIsChapter2Revealed(true)}
                    >
                      <img
                        src="/images/chapter2.png"
                        alt="Chapter 2 Visual Journey"
                        className="w-full h-full object-cover"
                      />
                    </ScratchToReveal>
                  </div>
                ) : (
                  <img
                    src={selectedChapter.id === 3 ? "/images/whalemanchapel.png" : selectedChapter.id === 4 ? "/images/elijah.png" : selectedChapter.id === 5 ? "/images/pequod.png" : selectedChapter.id === 6 ? "/images/ahab.png" : selectedChapter.id === 7 ? "/images/doubloon.png" : selectedChapter.id === 8 ? "/images/quarterdeck.png" : selectedChapter.id === 9 ? "/images/starbuck.png" : selectedChapter.id === 10 ? "/images/tryworks.png" : selectedChapter.id === 11 ? "/images/coffin.png" : selectedChapter.id === 12 ? "/images/therachel.png" : selectedChapter.id === 13 ? "/images/delight.png" : selectedChapter.id === 14 ? "/images/thechase.png" : selectedChapter.id === 15 ? "/images/survival.png" : "/images/ship-storm.png"}
                    alt={selectedChapter.id === 3 ? "Whaleman Chapel" : selectedChapter.id === 4 ? "Elijah" : selectedChapter.id === 5 ? "The Pequod" : selectedChapter.id === 6 ? "Captain Ahab" : selectedChapter.id === 7 ? "Doubloon" : selectedChapter.id === 8 ? "Quarterdeck" : selectedChapter.id === 9 ? "Starbuck" : selectedChapter.id === 10 ? "Tryworks" : selectedChapter.id === 11 ? "Coffin" : selectedChapter.id === 12 ? "The Rachel" : selectedChapter.id === 13 ? "Delight" : selectedChapter.id === 14 ? "The Chase" : selectedChapter.id === 15 ? "Survival" : "Ship in Storm"}
                    className={selectedChapter.id === 5 || selectedChapter.id === 6 || selectedChapter.id === 7 || selectedChapter.id === 8 || selectedChapter.id === 10 || selectedChapter.id === 11 || selectedChapter.id === 15 ? "w-full h-[90vh] object-cover rounded border border-amber-400" : "w-full h-[28rem] object-cover rounded border border-amber-400"}
                  />
                )}
              </div>
            </div>
          )}
          
          {/* Modal Content */}
          <div 
            className={`relative bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 max-h-[90vh] overflow-y-auto shadow-2xl border-4 border-amber-600 transition-opacity duration-500 ${
              showVisualJourney ? 'max-w-2xl ml-8' : 'max-w-4xl w-full'
            }`}
            style={{ opacity: modalOpacity }}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-amber-800 hover:text-amber-900 text-2xl font-bold bg-amber-200 hover:bg-amber-300 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              ×
            </button>

            {/* Quick Navigation Arrows - Top Corners */}
            <div className="absolute top-4 left-16 right-16 flex justify-between pointer-events-none">
              {/* Previous Button */}
              {(() => {
                const currentIndex = chapterData.findIndex(chapter => chapter.id === selectedChapter.id);
                const hasPrevious = currentIndex > 0;
                return (
                  <button
                    onClick={navigateToPrevious}
                    disabled={!hasPrevious}
                    className={`pointer-events-auto transition-all duration-300 rounded-lg px-3 py-2 flex items-center gap-1 text-sm font-medium shadow-md ${
                      hasPrevious 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white hover:scale-105 cursor-pointer' 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-50'
                    }`}
                    title={hasPrevious ? 'Previous Section (←)' : 'First Section'}
                  >
                    ← Prev
                  </button>
                );
              })()}

              {/* Next Button */}
              {(() => {
                const currentIndex = chapterData.findIndex(chapter => chapter.id === selectedChapter.id);
                const hasNext = currentIndex < chapterData.length - 1;
                return (
                  <button
                    onClick={navigateToNext}
                    disabled={!hasNext}
                    className={`pointer-events-auto transition-all duration-300 rounded-lg px-3 py-2 flex items-center gap-1 text-sm font-medium shadow-md ${
                      hasNext 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white hover:scale-105 cursor-pointer' 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-50'
                    }`}
                    title={hasNext ? 'Next Section (→)' : 'Last Section'}
                  >
                    Next →
                  </button>
                );
              })()}
            </div>

            {/* Modal Header */}
            <div className="text-center mb-8 mt-12">
              <h2 className="text-4xl font-bold text-amber-900 mb-2 font-serif">
                {selectedChapter.id}. {selectedChapter.title}
              </h2>
              <p className="text-xl text-amber-700 font-serif italic">
                {selectedChapter.chapter}
              </p>
            </div>

            {/* Quote Section */}
            <div className="mb-8 p-6 bg-amber-200/50 rounded-xl border-l-4 border-amber-600">
              <p className="text-lg text-amber-800 font-serif italic leading-relaxed">
                "{selectedChapter.quote}"
              </p>
            </div>

            {/* Significance */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-amber-900 mb-4 font-serif">Significance</h3>
              <p className="text-lg text-amber-800 font-serif leading-relaxed">
                {selectedChapter.significance}
              </p>
            </div>

            {/* Themes */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-amber-900 mb-4 font-serif">Key Themes</h3>
              <div className="flex flex-wrap gap-2">
                {selectedChapter.themes.map((theme, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-amber-200 text-amber-800 rounded-full text-sm font-medium"
                  >
                    {theme}
                  </span>
                ))}
              </div>
            </div>

            {/* Characters */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-amber-900 mb-4 font-serif">Characters</h3>
              <div className="flex flex-wrap gap-2">
                {selectedChapter.characters.map((character, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {character}
                  </span>
                ))}
              </div>
            </div>

            {/* Symbols */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-amber-900 mb-4 font-serif">Symbols</h3>
              <div className="flex flex-wrap gap-2">
                {selectedChapter.symbols.map((symbol, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-sm font-medium"
                  >
                    {symbol}
                  </span>
                ))}
              </div>
            </div>

                        {/* Detailed Analysis */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-amber-900 mb-4 font-serif">Detailed Analysis</h3>
              <p className="text-lg text-amber-800 font-serif leading-relaxed">
                {selectedChapter.detailedAnalysis}
              </p>
            </div>

            {/* Read More Section */}
            <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border-2 border-blue-300 shadow-lg mb-6">
              <div className="text-center">
                <h3 className="text-xl font-bold text-blue-900 mb-3 font-serif">📖 Read More</h3>
                <p className="text-blue-800 font-serif mb-4">
                  Dive deeper into the original text and discover more details
                </p>
                <a 
                  href={getGutenbergLink(selectedChapter.chapter)} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 hover:scale-105"
                >
                  🌊 Read Chapter on Project Gutenberg
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Journey Progress Navigation */}
            <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-4 rounded-xl border-2 border-amber-400 shadow-md">
              <div className="text-center mb-3">
                <h4 className="text-lg font-bold text-amber-900 font-serif">Journey Progress</h4>
                <p className="text-sm text-amber-700 font-serif">
                  Section {selectedChapter.id} of {chapterData.length} • Use ← → arrows to navigate
                </p>
              </div>
              
              {/* Progress Bar */}
              <div className="bg-amber-200 rounded-full h-3 mb-4 shadow-inner">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500 shadow-sm"
                  style={{
                    width: `${(selectedChapter.id / chapterData.length) * 100}%`
                  }}
                ></div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center">
                {(() => {
                  const currentIndex = chapterData.findIndex(chapter => chapter.id === selectedChapter.id);
                  const hasPrevious = currentIndex > 0;
                  const hasNext = currentIndex < chapterData.length - 1;
                  
                  return (
                    <>
                      <button
                        onClick={navigateToPrevious}
                        disabled={!hasPrevious}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                          hasPrevious 
                            ? 'bg-amber-600 hover:bg-amber-700 text-white hover:scale-105' 
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        ← Previous
                      </button>
                      
                      <div className="text-center">
                        <div className="text-sm text-amber-700 font-serif font-medium">
                          {hasPrevious && (
                            <div className="mb-1">← {chapterData[currentIndex - 1]?.title}</div>
                          )}
                          {hasNext && (
                            <div>{chapterData[currentIndex + 1]?.title} →</div>
                          )}
                        </div>
                      </div>
                      
                      <button
                        onClick={navigateToNext}
                        disabled={!hasNext}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                          hasNext 
                            ? 'bg-amber-600 hover:bg-amber-700 text-white hover:scale-105' 
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        Next →
                      </button>
                    </>
                  );
                })()}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Session Timer - Bottom Right */}
      <div className="fixed bottom-4 right-4 z-30">
        <div className="bg-black/20 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20">
          <div className="text-white/70 text-xs font-mono">
            {Math.floor(sessionTime / 60)}:{(sessionTime % 60).toString().padStart(2, '0')}
          </div>
        </div>
      </div>
      </div>
    </main>
  )
} 