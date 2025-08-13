"use client"

import * as React from 'react';
import { LogIn, MessageSquare, Bot, Sparkles, BookOpen, Users, Award, Globe, Brain, Code, Database, Zap, Target, Lightbulb, Shield, TrendingUp, Palette, Music, Eye, Heart, Star, GraduationCap, FileText, Languages, CheckCircle, AlertTriangle, Upload, Send, RefreshCw, ChevronDown, ChevronUp, Globe as GlobeIcon, User, CreditCard, LogOut } from 'lucide-react';
import { useLanguage } from '@/components/chat/language-context';
import { LanguageProvider } from '@/components/chat/language-context';
import { useEcho, EchoSignIn, EchoTokenPurchase } from '@zdql/echo-react-sdk';
import ELATutorChatbot from '@/components/chat/ELATutorChatbot';

// Famous author last names for random selection
const famousAuthors: string[] = [
  'Hemingway', 'Fitzgerald', 'Dickens', 'Austen', 'Tolstoy', 'Dostoevsky', 
  'Shakespeare', 'Poe', 'Twain', 'Steinbeck', 'Faulkner', 'Joyce', 
  'Woolf', 'Orwell', 'Bradbury', 'Vonnegut', 'Salinger', 'Kerouac',
  'Ginsberg', 'Plath', 'Angelou', 'Morrison', 'King', 'Rowling',
  'Tolkien', 'Lewis', 'Wilde', 'Bronte', 'Eliot', 'Yeats'
];

function ChatPageContent() {
  const { currentLanguage, setCurrentLanguage, languageOptions } = useLanguage();
  const { isAuthenticated, isLoading, user, balance, signOut } = useEcho();
  
  // Use state to track if component has mounted
  const [mounted, setMounted] = React.useState(false);
  const [selectedAuthor, setSelectedAuthor] = React.useState<string>('Hemingway'); // Default fallback
  
  // Set author after component mounts to avoid hydration mismatch
  React.useEffect(() => {
    const randomIndex = Math.floor(Math.random() * famousAuthors.length);
    setSelectedAuthor(famousAuthors[randomIndex]);
    setMounted(true);
  }, []);

  const getLanguageText = () => {
    switch (currentLanguage) {
      case 'es':
        return {
          title: 'ELA Tutor Chatbot',
          subtitle: 'Tutor de ELA con IA y Asistente Literario',
          mission: 'Proporcionar tutoría personalizada de ELA con IA que ayude a los estudiantes a desarrollar habilidades de pensamiento crítico, mejorar sus habilidades de escritura y fomentar el amor por la literatura mientras mantiene los más altos estándares de integridad académica.',
          cta: '¿Listo para Transformar tus Habilidades de ELA?',
          ctaSubtitle: 'Únete a miles de estudiantes que están mejorando sus habilidades de lectura, escritura y análisis con ELA Tutor Chatbot, tu tutor de ELA con IA.',
          startButton: 'Comenzar a Aprender con ELA Tutor Chatbot',
          // Hero section
          heroDescription: 'Tu tutor de Artes del Lenguaje Inglés con IA, inspirado en autores famosos y diseñado para la excelencia educativa. Obtén ayuda personalizada con comprensión de lectura, habilidades de escritura, gramática, vocabulario, análisis literario y más.',
          aiLearning: 'Aprendizaje con IA',
          multiLanguage: 'Soporte Multi-idioma',
          academicIntegrity: 'Integridad Académica',
          // Mission section
          missionTitle: 'Nuestra Misión',
          // Core Features
          coreFeaturesTitle: 'Características Principales',
          readingComprehension: 'Lectura y Comprensión',
          writingGrammar: 'Escritura y Gramática',
          literatureAnalysis: 'Literatura y Análisis',
          testPrep: 'Preparación de Exámenes',
          publicSpeaking: 'Oratoria Pública',
          ellSupport: 'Apoyo para ELL',
          vocabularyBuilding: 'Construcción de Vocabulario',
          researchSkills: 'Habilidades de Investigación',
          // Feature descriptions
          textAnalysis: 'Estrategias de Análisis de Texto',
          mainIdea: 'Identificación de Ideas Principales',
          criticalThinking: 'Habilidades de Pensamiento Crítico',
          literaryDevices: 'Reconocimiento de Dispositivos Literarios',
          comprehensionAssessment: 'Evaluación de Comprensión',
          essayStructure: 'Estructura y Organización de Ensayos',
          grammarMechanics: 'Gramática y Mecánica',
          styleVoice: 'Desarrollo de Estilo y Voz',
          documentUpload: 'Carga de Documentos y Retroalimentación',
          revisionStrategies: 'Estrategias de Revisión',
          characterAnalysis: 'Análisis de Personajes',
          thematicExploration: 'Exploración Temática',
          literaryCriticism: 'Crítica Literaria',
          classicLiterature: 'Estudio de Literatura Clásica',
          literaryAnalysisSkills: 'Habilidades de Análisis Literario',
          satActStrategies: 'Estrategias de Lectura SAT/ACT',
          essayTechniques: 'Técnicas de Escritura de Ensayos',
          criticalReading: 'Habilidades de Lectura Crítica',
          grammarUsage: 'Revisión de Gramática y Uso',
          practiceStrategies: 'Estrategias de Práctica',
          speechWriting: 'Escritura y Estructura de Discursos',
          deliveryTechniques: 'Técnicas de Entrega',
          persuasiveSpeaking: 'Oratoria Persuasiva',
          presentationSkills: 'Habilidades de Presentación',
          confidenceBuilding: 'Desarrollo de Confianza',
          englishLearning: 'Aprendizaje del Idioma Inglés',
          grammarELL: 'Gramática para Estudiantes ELL',
          academicWriting: 'Apoyo de Escritura Académica',
          conversationalEnglish: 'Inglés Conversacional',
          culturalContext: 'Comprensión del Contexto Cultural',
          contextClues: 'Estrategias de Pistas Contextuales',
          wordRootAnalysis: 'Análisis de Raíces de Palabras',
          academicVocabulary: 'Vocabulario Académico',
          satActWords: 'Listas de Palabras SAT/ACT',
          vocabularyRetention: 'Retención de Vocabulario',
          researchPaper: 'Escritura de Documentos de Investigación',
          sourceEvaluation: 'Evaluación de Fuentes',
          citationFormatting: 'Citación y Formato',
          criticalAnalysis: 'Análisis Crítico',
          academicWritingSkills: 'Escritura Académica',
          // Advanced Features
          advancedFeaturesTitle: 'Características Avanzadas',
          multiLanguageDesc: 'Inglés, Español, Criollo Haitiano',
          documentUploadDesc: 'Obtén retroalimentación sobre tu escritura',
          academicIntegrityDesc: 'Aprendizaje guiado, no trampa',
          smartSuggestionsDesc: 'Sugerencias de aprendizaje con IA',
          progressTrackingDesc: 'Monitorea tu viaje de aprendizaje',
          realtimeChatDesc: 'Respuestas instantáneas de IA',
          topicSelectionDesc: 'Elige tu enfoque de aprendizaje',
          errorPreventionDesc: 'Orientación sobre errores comunes',
          immediateInterventionDesc: 'Apoyo instantáneo cuando lo necesites',
          extraScaffoldingDesc: 'Apoyo para estudiantes con dificultades',
          extraExamplesDesc: 'Múltiples ejemplos para claridad',
          conversationalApproachDesc: 'Pregunta lo que no sabes',
          // How It Works
          howItWorksTitle: 'Cómo Funciona ELA Tutor Chatbot',
          signInConnect: 'Inicia Sesión y Conecta',
          signInDesc: 'Autentícate con Echo para acceder a tu tutor de IA personalizado',
          chooseFocus: 'Elige tu Enfoque',
          chooseFocusDesc: 'Selecciona entre lectura, escritura, gramática, vocabulario o literatura',
          getHelp: 'Obtén Ayuda Personalizada',
          getHelpDesc: 'Recibe orientación y retroalimentación adaptada a tus necesidades específicas',
          uploadDocuments: 'Carga Documentos',
          uploadDesc: 'Obtén retroalimentación detallada sobre tus ensayos y tareas de escritura',
          trackProgress: 'Rastrea el Progreso',
          trackDesc: 'Monitorea tu mejora y celebra tus logros',
          learnGrow: 'Aprende y Crece',
          learnDesc: 'Desarrolla habilidades de ELA más fuertes a través de práctica guiada',
          // Academic Integrity
          academicIntegrityTitle: 'Compromiso de Integridad Académica',
          whatWeDoTitle: 'Lo Que Hacemos',
          whatWeDontTitle: 'Lo Que No Hacemos',
          guideWriting: 'Te guiamos a través del proceso de escritura',
          developIdeas: 'Te ayudamos a desarrollar tus propias ideas',
          provideFeedback: 'Proporcionamos retroalimentación sobre estructura y claridad',
          teachGrammar: 'Te enseñamos gramática y técnicas de escritura',
          supportJourney: 'Apoyamos tu viaje de aprendizaje',
          writeEssays: 'Escribir ensayos o tareas por ti',
          completeHomework: 'Completar tareas en tu lugar',
          provideAnswers: 'Proporcionar respuestas listas',
          enableDishonesty: 'Habilitar deshonestidad académica',
          bypassLearning: 'Evadir el proceso de aprendizaje',
          replaceTeachers: 'Reemplazar maestros',
          giveTeachersTools: 'Dar a los maestros las herramientas para llegar a más estudiantes',
          // Footer
          footerQuote: '"La educación no es llenar una olla sino encender un fuego"',
          footerAuthor: '— W.B. Yeats'
        };
      case 'ht':
        return {
          title: 'ELA Tutor Chatbot',
          subtitle: 'Pwofesè ELA ak Asistan Literè ki Pouse pa IA',
          mission: 'Bay titoraj ELA pèsonalize ki pouse pa IA ki ede elèv yo devlope konpetans panse kritik, amelyore kapasite ekriti yo, ak fèmè lanmou pou literati pandan y ap kenbe pi wo estanda entegrite akademik.',
          cta: 'Ou Pare pou Transfòme Konpetans ELA Ou yo?',
          ctaSubtitle: 'Antre nan dè milye elèv ki ap amelyore konpetans lekti, ekriti, ak analiz yo ak ELA Tutor Chatbot, pwofesè ELA ou ki pouse pa IA.',
          startButton: 'Kòmanse Aprann ak ELA Tutor Chatbot',
          // Hero section
          heroDescription: 'Pwofesè ELA ou ki pouse pa IA, enspire pa otè selyè yo ak fèt pou ekselans edikatif. Jwenn èd pèsonalize ak konpreyansyon lekti, konpetans ekriti, gramè, vokabilè, analiz literè, ak plis ankò.',
          aiLearning: 'Aprantisaj ak IA',
          multiLanguage: 'Sipò Plizyè Lang',
          academicIntegrity: 'Entegrite Akademik',
          // Mission section
          missionTitle: 'Misyon Nou',
          // Core Features
          coreFeaturesTitle: 'Karakteristik Prensipal',
          readingComprehension: 'Lekti ak Konpreyansyon',
          writingGrammar: 'Ekriti ak Gramè',
          literatureAnalysis: 'Literati ak Analiz',
          testPrep: 'Preparasyon Egzamen',
          publicSpeaking: 'Diskou Piblik',
          ellSupport: 'Sipò pou ELL',
          vocabularyBuilding: 'Bati Vokabilè',
          researchSkills: 'Konpetans Rechèch',
          // Feature descriptions
          textAnalysis: 'Estrateji Analiz Tèks',
          mainIdea: 'Idantifikasyon Ide Prensipal',
          criticalThinking: 'Konpetans Panse Kritik',
          literaryDevices: 'Rekonèt Dispozitif Literè',
          comprehensionAssessment: 'Evalyasyon Konpreyansyon',
          essayStructure: 'Estrikti ak Òganizasyon Redaksyon',
          grammarMechanics: 'Gramè ak Mekanik',
          styleVoice: 'Devlopman Estil ak Vwa',
          documentUpload: 'Telechaje Dokiman ak Retwou',
          revisionStrategies: 'Estrateji Revizyon',
          characterAnalysis: 'Analiz Karaktè',
          thematicExploration: 'Eksplorasyon Tematik',
          literaryCriticism: 'Kritik Literè',
          classicLiterature: 'Etid Literati Klasik',
          literaryAnalysisSkills: 'Konpetans Analiz Literè',
          satActStrategies: 'Estrateji Lekti SAT/ACT',
          essayTechniques: 'Teknik Redaksyon',
          criticalReading: 'Konpetans Lekti Kritik',
          grammarUsage: 'Revizyon Gramè ak Itilizasyon',
          practiceStrategies: 'Estrateji Pratik',
          speechWriting: 'Redaksyon ak Estrikti Diskou',
          deliveryTechniques: 'Teknik Livrezon',
          persuasiveSpeaking: 'Diskou Pèswazif',
          presentationSkills: 'Konpetans Prezantasyon',
          confidenceBuilding: 'Bati Konfyans',
          englishLearning: 'Aprantisaj Lang Anglè',
          grammarELL: 'Gramè pou Elèv ELL',
          academicWriting: 'Sipò Redaksyon Akademik',
          conversationalEnglish: 'Anglè Konvèsasyonèl',
          culturalContext: 'Konpreyansyon Kontèks Kiltirèl',
          contextClues: 'Estrateji Endikasyon Kontèks',
          wordRootAnalysis: 'Analiz Rasin Mo',
          academicVocabulary: 'Vokabilè Akademik',
          satActWords: 'Lis Mo SAT/ACT',
          vocabularyRetention: 'Retansyon Vokabilè',
          researchPaper: 'Redaksyon Papye Rechèch',
          sourceEvaluation: 'Evalyasyon Sous',
          citationFormatting: 'Site ak Fòmataj',
          criticalAnalysis: 'Analiz Kritik',
          academicWritingSkills: 'Redaksyon Akademik',
          // Advanced Features
          advancedFeaturesTitle: 'Karakteristik Avanse',
          multiLanguageDesc: 'Anglè, Panyòl, Kreyòl Ayisyen',
          documentUploadDesc: 'Jwenn retwou sou redaksyon ou',
          academicIntegrityDesc: 'Aprantisaj gide, pa triche',
          smartSuggestionsDesc: 'Sijesyon aprantisaj ak IA',
          progressTrackingDesc: 'Swiv vwayaj aprantisaj ou',
          realtimeChatDesc: 'Repons IA enstantane',
          topicSelectionDesc: 'Chwazi konsantre aprantisaj ou',
          errorPreventionDesc: 'Oryantasyon sou erè komen',
          immediateInterventionDesc: 'Sipò enstantane lè w bezwen',
          extraScaffoldingDesc: 'Sipò pou elèv ki gen difikilte',
          extraExamplesDesc: 'Plizyè egzanp pou klète',
          conversationalApproachDesc: 'Pose kesyon sa w pa konnen',
          // How It Works
          howItWorksTitle: 'Kijan ELA Tutor Chatbot Fonksyone',
          signInConnect: 'Konekte ak Konekte',
          signInDesc: 'Otantifye ak Echo pou aksede pwofesè IA pèsonalize ou',
          chooseFocus: 'Chwazi Konsantre Ou',
          chooseFocusDesc: 'Seleksyone ant lekti, ekriti, gramè, vokabilè oswa literati',
          getHelp: 'Jwenn Èd Pèsonalize',
          getHelpDesc: 'Resevwa oryantasyon ak retwou adapte pou bezwen espesifik ou',
          uploadDocuments: 'Telechaje Dokiman',
          uploadDesc: 'Jwenn retwou detaye sou redaksyon ak devwa ekriti ou',
          trackProgress: 'Swiv Pwogrè',
          trackDesc: 'Swiv amelyorasyon ou ak selebre reyalizasyon ou',
          learnGrow: 'Aprann ak Grandi',
          learnDesc: 'Devlope konpetans ELA pi fò atravè pratik gide',
          // Academic Integrity
          academicIntegrityTitle: 'Engajman Entegrite Akademik',
          whatWeDoTitle: 'Sa Nou Fè',
          whatWeDontTitle: 'Sa Nou Pa Fè',
          guideWriting: 'Nou gide w atravè pwosesis redaksyon an',
          developIdeas: 'Nou ede w devlope pwòp lide ou',
          provideFeedback: 'Nou bay retwou sou estrikti ak klète',
          teachGrammar: 'Nou anseye w gramè ak teknik redaksyon',
          supportJourney: 'Nou sipòte vwayaj aprantisaj ou',
          writeEssays: 'Ekri redaksyon oswa devwa pou w',
          completeHomework: 'Konplete devwa pou w',
          provideAnswers: 'Bay repons pare',
          enableDishonesty: 'Pèmèt malonètete akademik',
          bypassLearning: 'Kontourne pwosesis aprantisaj la',
          replaceTeachers: 'Ranplase pwofesè',
          giveTeachersTools: 'Bay pwofesè yo zouti pou rive jwenn plis elèv',
          // Footer
          footerQuote: '"Edikasyon se pa ranpli yon po men limen yon dife"',
          footerAuthor: '— W.B. Yeats'
        };
      default:
        return {
          title: 'ELA Tutor Chatbot',
          subtitle: 'AI-Powered ELA Tutor & Literary Assistant',
          mission: 'To provide personalized, AI-powered English Language Arts tutoring that helps students develop critical thinking skills, improve their writing abilities, and foster a love for literature while maintaining the highest standards of academic integrity.',
          cta: 'Ready to Transform Your ELA Skills?',
          ctaSubtitle: 'Join thousands of students who are improving their reading, writing, and analytical skills with ELA Tutor Chatbot, your AI-powered ELA tutor.',
          startButton: 'Start Learning with ELA Tutor Chatbot',
          // Hero section
          heroDescription: 'Your AI-powered English Language Arts tutor, inspired by famous authors and designed for educational excellence. Get personalized help with reading comprehension, writing skills, grammar, vocabulary, literary analysis, and more.',
          aiLearning: 'AI-Powered Learning',
          multiLanguage: 'Multi-Language Support',
          academicIntegrity: 'Academic Integrity',
          // Mission section
          missionTitle: 'Our Mission',
          // Core Features
          coreFeaturesTitle: 'Core Features',
          readingComprehension: 'Reading & Comprehension',
          writingGrammar: 'Writing & Grammar',
          literatureAnalysis: 'Literature & Analysis',
          testPrep: 'Test Prep',
          publicSpeaking: 'Public Speaking',
          ellSupport: 'ELL Support',
          vocabularyBuilding: 'Vocabulary Building',
          researchSkills: 'Research Skills',
          // Feature descriptions
          textAnalysis: 'Text Analysis Strategies',
          mainIdea: 'Main Idea Identification',
          criticalThinking: 'Critical Thinking Skills',
          literaryDevices: 'Literary Device Recognition',
          comprehensionAssessment: 'Comprehension Assessment',
          essayStructure: 'Essay Structure & Organization',
          grammarMechanics: 'Grammar & Mechanics',
          styleVoice: 'Style & Voice Development',
          documentUpload: 'Document Upload & Feedback',
          revisionStrategies: 'Revision Strategies',
          characterAnalysis: 'Character Analysis',
          thematicExploration: 'Thematic Exploration',
          literaryCriticism: 'Literary Criticism',
          classicLiterature: 'Classic Literature Study',
          literaryAnalysisSkills: 'Literary Analysis Skills',
          satActStrategies: 'SAT/ACT Reading Strategies',
          essayTechniques: 'Essay Writing Techniques',
          criticalReading: 'Critical Reading Skills',
          grammarUsage: 'Grammar & Usage Review',
          practiceStrategies: 'Practice Test Strategies',
          speechWriting: 'Speech Writing & Structure',
          deliveryTechniques: 'Delivery Techniques',
          persuasiveSpeaking: 'Persuasive Speaking',
          presentationSkills: 'Presentation Skills',
          confidenceBuilding: 'Confidence Building',
          englishLearning: 'English Language Learning',
          grammarELL: 'Grammar for ELL Students',
          academicWriting: 'Academic Writing Support',
          conversationalEnglish: 'Conversational English',
          culturalContext: 'Cultural Context Understanding',
          contextClues: 'Context Clue Strategies',
          wordRootAnalysis: 'Word Root Analysis',
          academicVocabulary: 'Academic Vocabulary',
          satActWords: 'SAT/ACT Word Lists',
          vocabularyRetention: 'Vocabulary Retention',
          researchPaper: 'Research Paper Writing',
          sourceEvaluation: 'Source Evaluation',
          citationFormatting: 'Citation & Formatting',
          criticalAnalysis: 'Critical Analysis',
          academicWritingSkills: 'Academic Writing',
          // Advanced Features
          advancedFeaturesTitle: 'Advanced Features',
          multiLanguageDesc: 'English, Spanish, Haitian Creole',
          documentUploadDesc: 'Get feedback on your writing',
          academicIntegrityDesc: 'Guided learning, not cheating',
          smartSuggestionsDesc: 'AI-powered learning prompts',
          progressTrackingDesc: 'Monitor your learning journey',
          realtimeChatDesc: 'Instant AI responses',
          topicSelectionDesc: 'Choose your learning focus',
          errorPreventionDesc: 'Common mistake guidance',
          immediateInterventionDesc: 'Instant support when you need it',
          extraScaffoldingDesc: 'Support for struggling students',
          extraExamplesDesc: 'Multiple examples for clarity',
          conversationalApproachDesc: 'Question what you don\'t know',
          // How It Works
          howItWorksTitle: 'How ELA Tutor Chatbot Works',
          signInConnect: 'Sign In & Connect',
          signInDesc: 'Authenticate with Echo to access your personalized AI tutor',
          chooseFocus: 'Choose Your Focus',
          chooseFocusDesc: 'Select from reading, writing, grammar, vocabulary, or literature',
          getHelp: 'Get Personalized Help',
          getHelpDesc: 'Receive tailored guidance and feedback for your specific needs',
          uploadDocuments: 'Upload Documents',
          uploadDesc: 'Get detailed feedback on your essays and writing assignments',
          trackProgress: 'Track Progress',
          trackDesc: 'Monitor your improvement and celebrate your achievements',
          learnGrow: 'Learn & Grow',
          learnDesc: 'Develop stronger ELA skills through guided practice',
          // Academic Integrity
          academicIntegrityTitle: 'Academic Integrity Commitment',
          whatWeDoTitle: 'What We Do',
          whatWeDontTitle: 'What We Don\'t Do',
          guideWriting: 'Guide you through the writing process',
          developIdeas: 'Help you develop your own ideas',
          provideFeedback: 'Provide feedback on structure and clarity',
          teachGrammar: 'Teach grammar and writing techniques',
          supportJourney: 'Support your learning journey',
          writeEssays: 'Write essays or assignments for you',
          completeHomework: 'Complete homework on your behalf',
          provideAnswers: 'Provide ready-made answers',
          enableDishonesty: 'Enable academic dishonesty',
          bypassLearning: 'Bypass the learning process',
          replaceTeachers: 'Replace teachers',
          giveTeachersTools: 'Give teachers the tools to reach more students',
          // Footer
          footerQuote: '"Education is not the filling of a pot but the lighting of a fire"',
          footerAuthor: '— W.B. Yeats'
        };
    }
  };

  const languageText = getLanguageText();

  // Show loading state until component is mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-start justify-center py-8">
        <div className="text-center w-full">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading Claude Hemingway...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-visible">
      {/* Header */}
      <div className="bg-purple-900/20 backdrop-blur-md border-b border-white/10 pt-12">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">{languageText.title}</h1>
                <p className="text-purple-200 text-sm">{languageText.subtitle}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Language Selector */}
              <div className="relative">
                <select
                  value={currentLanguage}
                  onChange={(e) => setCurrentLanguage(e.target.value)}
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-lg appearance-none cursor-pointer hover:bg-white/20 transition-colors"
                  style={{ paddingRight: '2.5rem' }}
                >
                  {languageOptions.map((lang) => (
                    <option key={lang.code} value={lang.code} className="bg-gray-800 text-white">
                      {lang.flag} {lang.name}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <ChevronDown className="w-4 h-4 text-white" />
                </div>
              </div>
              
              {/* Echo Authentication */}
              {isLoading ? (
                <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-lg">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                </div>
              ) : isAuthenticated ? (
                <div className="flex items-center space-x-4">
                  {/* User Info */}
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span className="text-sm">{user?.name || user?.email || 'User'}</span>
                    </div>
                  </div>
                  
                  {/* Balance */}
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <CreditCard className="w-4 h-4" />
                      <span className="text-sm">
                        {balance ? (
                          typeof balance === 'number' ? 
                            `${balance} credits` : 
                            `${balance.credits || 0} credits`
                        ) : (
                          '0 credits'
                        )}
                      </span>
                    </div>
                  </div>
                  
                  {/* Token Purchase */}
                  <EchoTokenPurchase className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors text-sm">
                    Buy Credits
                  </EchoTokenPurchase>
                  
                  {/* Sign Out */}
                  <button
                    onClick={signOut}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
                  >
                    <LogOut className="w-4 h-4" />
                    <span className="text-sm">Sign Out</span>
                  </button>
                </div>
              ) : (
                <EchoSignIn 
                  onSuccess={(user) => console.log('Signed in:', user)}
                  onError={(error) => console.error('Sign in failed:', error)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 flex items-center space-x-2"
                >
                  <LogIn className="w-5 h-5" />
                  <span>Sign In to Echo</span>
                </EchoSignIn>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        
        {/* Hero Section */}
        <div className="text-center py-6">
          <div className="max-w-4xl mx-auto">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-12 h-12 text-white" />
            </div>
            
            <h2 className="text-5xl font-bold text-white mb-6 font-serif">
              {languageText.title}
            </h2>
            <p className="text-purple-200 mb-8 text-xl font-serif leading-relaxed">
              {languageText.heroDescription}
            </p>
            
            <div className="flex items-center justify-center space-x-4 text-purple-200 mb-8">
              <div className="flex items-center space-x-2">
                <Brain className="w-5 h-5 text-blue-400" />
                <span>{languageText.aiLearning}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Languages className="w-5 h-5 text-green-400" />
                <span>{languageText.multiLanguage}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-purple-400" />
                <span>{languageText.academicIntegrity}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-white/5 border border-white/20 rounded-xl p-6 mb-6">
          <h3 className="text-2xl font-bold text-white mb-4 font-serif text-center">🎯 {languageText.missionTitle}</h3>
          <p className="text-purple-200 text-lg text-center font-serif leading-relaxed">
            {languageText.mission}
          </p>
        </div>

        {/* Core Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          
          {/* Reading & Comprehension */}
          <div className="bg-gradient-to-br from-blue-900/50 to-blue-700/50 border border-blue-400 rounded-xl p-6">
            <div className="text-center mb-4">
              <BookOpen className="w-12 h-12 text-blue-400 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-white font-serif">{languageText.readingComprehension}</h3>
            </div>
            <ul className="space-y-3 text-blue-100 font-serif">
              <li className="flex items-start gap-2">
                <Eye className="w-5 h-5 text-blue-300 mt-0.5 flex-shrink-0" />
                <span>{languageText.textAnalysis}</span>
              </li>
              <li className="flex items-start gap-2">
                <Target className="w-5 h-5 text-blue-300 mt-0.5 flex-shrink-0" />
                <span>{languageText.mainIdea}</span>
              </li>
              <li className="flex items-start gap-2">
                <Brain className="w-5 h-5 text-blue-300 mt-0.5 flex-shrink-0" />
                <span>{languageText.criticalThinking}</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles className="w-5 h-5 text-blue-300 mt-0.5 flex-shrink-0" />
                <span>{languageText.literaryDevices}</span>
              </li>
              <li className="flex items-start gap-2">
                <Award className="w-5 h-5 text-blue-300 mt-0.5 flex-shrink-0" />
                <span>{languageText.comprehensionAssessment}</span>
              </li>
            </ul>
          </div>

          {/* Writing & Grammar */}
          <div className="bg-gradient-to-br from-purple-900/50 to-purple-700/50 border border-purple-400 rounded-xl p-6">
            <div className="text-center mb-4">
              <GraduationCap className="w-12 h-12 text-purple-400 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-white font-serif">{languageText.writingGrammar}</h3>
            </div>
            <ul className="space-y-3 text-purple-100 font-serif">
              <li className="flex items-start gap-2">
                <FileText className="w-5 h-5 text-purple-300 mt-0.5 flex-shrink-0" />
                <span>{languageText.essayStructure}</span>
              </li>
              <li className="flex items-start gap-2">
                <Code className="w-5 h-5 text-purple-300 mt-0.5 flex-shrink-0" />
                <span>{languageText.grammarMechanics}</span>
              </li>
              <li className="flex items-start gap-2">
                <Palette className="w-5 h-5 text-purple-300 mt-0.5 flex-shrink-0" />
                <span>{languageText.styleVoice}</span>
              </li>
              <li className="flex items-start gap-2">
                <Upload className="w-5 h-5 text-purple-300 mt-0.5 flex-shrink-0" />
                <span>{languageText.documentUpload}</span>
              </li>
              <li className="flex items-start gap-2">
                <RefreshCw className="w-5 h-5 text-purple-300 mt-0.5 flex-shrink-0" />
                <span>{languageText.revisionStrategies}</span>
              </li>
            </ul>
          </div>

          {/* Literature & Analysis */}
          <div className="bg-gradient-to-br from-pink-900/50 to-pink-700/50 border border-pink-400 rounded-xl p-6">
            <div className="text-center mb-4">
              <MessageSquare className="w-12 h-12 text-pink-400 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-white font-serif">{languageText.literatureAnalysis}</h3>
            </div>
            <ul className="space-y-3 text-pink-100 font-serif">
              <li className="flex items-start gap-2">
                <Users className="w-5 h-5 text-pink-300 mt-0.5 flex-shrink-0" />
                <span>{languageText.characterAnalysis}</span>
              </li>
              <li className="flex items-start gap-2">
                <Globe className="w-5 h-5 text-pink-300 mt-0.5 flex-shrink-0" />
                <span>{languageText.thematicExploration}</span>
              </li>
              <li className="flex items-start gap-2">
                <Lightbulb className="w-5 h-5 text-pink-300 mt-0.5 flex-shrink-0" />
                <span>{languageText.literaryCriticism}</span>
              </li>
              <li className="flex items-start gap-2">
                <Star className="w-5 h-5 text-pink-300 mt-0.5 flex-shrink-0" />
                <span>{languageText.classicLiterature}</span>
              </li>
              <li className="flex items-start gap-2">
                <TrendingUp className="w-5 h-5 text-pink-300 mt-0.5 flex-shrink-0" />
                <span>{languageText.literaryAnalysisSkills}</span>
              </li>
            </ul>
          </div>

          {/* Test Prep */}
          <div className="bg-gradient-to-br from-green-900/50 to-green-700/50 border border-green-400 rounded-xl p-6">
            <div className="text-center mb-4">
              <Target className="w-12 h-12 text-green-400 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-white font-serif">{languageText.testPrep}</h3>
            </div>
            <ul className="space-y-3 text-green-100 font-serif">
              <li className="flex items-start gap-2">
                <Award className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" />
                <span>{languageText.satActStrategies}</span>
              </li>
              <li className="flex items-start gap-2">
                <FileText className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" />
                <span>{languageText.essayTechniques}</span>
              </li>
              <li className="flex items-start gap-2">
                <Brain className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" />
                <span>{languageText.criticalReading}</span>
              </li>
              <li className="flex items-start gap-2">
                <Code className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" />
                <span>{languageText.grammarUsage}</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" />
                <span>{languageText.practiceStrategies}</span>
              </li>
            </ul>
          </div>

          {/* Public Speaking */}
          <div className="bg-gradient-to-br from-orange-900/50 to-orange-700/50 border border-orange-400 rounded-xl p-6">
            <div className="text-center mb-4">
              <Users className="w-12 h-12 text-orange-400 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-white font-serif">{languageText.publicSpeaking}</h3>
            </div>
            <ul className="space-y-3 text-orange-100 font-serif">
              <li className="flex items-start gap-2">
                <MessageSquare className="w-5 h-5 text-orange-300 mt-0.5 flex-shrink-0" />
                <span>{languageText.speechWriting}</span>
              </li>
              <li className="flex items-start gap-2">
                <Eye className="w-5 h-5 text-orange-300 mt-0.5 flex-shrink-0" />
                <span>{languageText.deliveryTechniques}</span>
              </li>
              <li className="flex items-start gap-2">
                <Brain className="w-5 h-5 text-orange-300 mt-0.5 flex-shrink-0" />
                <span>{languageText.persuasiveSpeaking}</span>
              </li>
              <li className="flex items-start gap-2">
                <Star className="w-5 h-5 text-orange-300 mt-0.5 flex-shrink-0" />
                <span>{languageText.presentationSkills}</span>
              </li>
              <li className="flex items-start gap-2">
                <TrendingUp className="w-5 h-5 text-orange-300 mt-0.5 flex-shrink-0" />
                <span>{languageText.confidenceBuilding}</span>
              </li>
            </ul>
          </div>

          {/* ELL Support */}
          <div className="bg-gradient-to-br from-teal-900/50 to-teal-700/50 border border-teal-400 rounded-xl p-6">
            <div className="text-center mb-4">
              <Languages className="w-12 h-12 text-teal-400 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-white font-serif">{languageText.ellSupport}</h3>
            </div>
            <ul className="space-y-3 text-teal-100 font-serif">
              <li className="flex items-start gap-2">
                <BookOpen className="w-5 h-5 text-teal-300 mt-0.5 flex-shrink-0" />
                <span>{languageText.englishLearning}</span>
              </li>
              <li className="flex items-start gap-2">
                <Code className="w-5 h-5 text-teal-300 mt-0.5 flex-shrink-0" />
                <span>{languageText.grammarELL}</span>
              </li>
              <li className="flex items-start gap-2">
                <FileText className="w-5 h-5 text-teal-300 mt-0.5 flex-shrink-0" />
                <span>{languageText.academicWriting}</span>
              </li>
              <li className="flex items-start gap-2">
                <MessageSquare className="w-5 h-5 text-teal-300 mt-0.5 flex-shrink-0" />
                <span>{languageText.conversationalEnglish}</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles className="w-5 h-5 text-teal-300 mt-0.5 flex-shrink-0" />
                <span>{languageText.culturalContext}</span>
              </li>
            </ul>
          </div>

          {/* Vocabulary Building */}
          <div className="bg-gradient-to-br from-indigo-900/50 to-indigo-700/50 border border-indigo-400 rounded-xl p-6">
            <div className="text-center mb-4">
              <Sparkles className="w-12 h-12 text-indigo-400 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-white font-serif">{languageText.vocabularyBuilding}</h3>
            </div>
            <ul className="space-y-3 text-indigo-100 font-serif">
              <li className="flex items-start gap-2">
                <BookOpen className="w-5 h-5 text-indigo-300 mt-0.5 flex-shrink-0" />
                <span>{languageText.contextClues}</span>
              </li>
              <li className="flex items-start gap-2">
                <Brain className="w-5 h-5 text-indigo-300 mt-0.5 flex-shrink-0" />
                <span>{languageText.wordRootAnalysis}</span>
              </li>
              <li className="flex items-start gap-2">
                <Target className="w-5 h-5 text-indigo-300 mt-0.5 flex-shrink-0" />
                <span>{languageText.academicVocabulary}</span>
              </li>
              <li className="flex items-start gap-2">
                <Star className="w-5 h-5 text-indigo-300 mt-0.5 flex-shrink-0" />
                <span>{languageText.satActWords}</span>
              </li>
              <li className="flex items-start gap-2">
                <TrendingUp className="w-5 h-5 text-indigo-300 mt-0.5 flex-shrink-0" />
                <span>{languageText.vocabularyRetention}</span>
              </li>
            </ul>
          </div>

          {/* Research Skills */}
          <div className="bg-gradient-to-br from-red-900/50 to-red-700/50 border border-red-400 rounded-xl p-6">
            <div className="text-center mb-4">
              <ChevronDown className="w-12 h-12 text-red-400 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-white font-serif">{languageText.researchSkills}</h3>
            </div>
            <ul className="space-y-3 text-red-100 font-serif">
              <li className="flex items-start gap-2">
                <BookOpen className="w-5 h-5 text-red-300 mt-0.5 flex-shrink-0" />
                <span>{languageText.researchPaper}</span>
              </li>
              <li className="flex items-start gap-2">
                <Target className="w-5 h-5 text-red-300 mt-0.5 flex-shrink-0" />
                <span>{languageText.sourceEvaluation}</span>
              </li>
              <li className="flex items-start gap-2">
                <FileText className="w-5 h-5 text-red-300 mt-0.5 flex-shrink-0" />
                <span>{languageText.citationFormatting}</span>
              </li>
              <li className="flex items-start gap-2">
                <Brain className="w-5 h-5 text-red-300 mt-0.5 flex-shrink-0" />
                <span>{languageText.criticalAnalysis}</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles className="w-5 h-5 text-red-300 mt-0.5 flex-shrink-0" />
                <span>{languageText.academicWritingSkills}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Advanced Features */}
        <div className="bg-white/5 border border-white/20 rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 font-serif text-center">🚀 {languageText.advancedFeaturesTitle}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Languages className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <h4 className="text-white font-semibold mb-1">Multi-Language</h4>
              <p className="text-purple-200 text-sm">{languageText.multiLanguageDesc}</p>
            </div>
            <div className="text-center">
              <Upload className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h4 className="text-white font-semibold mb-1">Document Upload</h4>
              <p className="text-purple-200 text-sm">{languageText.documentUploadDesc}</p>
            </div>
            <div className="text-center">
              <Shield className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <h4 className="text-white font-semibold mb-1">Academic Integrity</h4>
              <p className="text-purple-200 text-sm">{languageText.academicIntegrityDesc}</p>
            </div>
            <div className="text-center">
              <Brain className="w-8 h-8 text-pink-400 mx-auto mb-2" />
              <h4 className="text-white font-semibold mb-1">Smart Suggestions</h4>
              <p className="text-purple-200 text-sm">{languageText.smartSuggestionsDesc}</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <h4 className="text-white font-semibold mb-1">Progress Tracking</h4>
              <p className="text-purple-200 text-sm">{languageText.progressTrackingDesc}</p>
            </div>
            <div className="text-center">
              <Send className="w-8 h-8 text-indigo-400 mx-auto mb-2" />
              <h4 className="text-white font-semibold mb-1">Real-time Chat</h4>
              <p className="text-purple-200 text-sm">{languageText.realtimeChatDesc}</p>
            </div>
            <div className="text-center">
              <ChevronDown className="w-8 h-8 text-teal-400 mx-auto mb-2" />
              <h4 className="text-white font-semibold mb-1">Topic Selection</h4>
              <p className="text-purple-200 text-sm">{languageText.topicSelectionDesc}</p>
            </div>
            <div className="text-center">
              <AlertTriangle className="w-8 h-8 text-orange-400 mx-auto mb-2" />
              <h4 className="text-white font-semibold mb-1">Error Prevention</h4>
              <p className="text-purple-200 text-sm">{languageText.errorPreventionDesc}</p>
            </div>
            <div className="text-center">
              <Zap className="w-8 h-8 text-red-400 mx-auto mb-2" />
              <h4 className="text-white font-semibold mb-1">Immediate Academic Intervention</h4>
              <p className="text-purple-200 text-sm">{languageText.immediateInterventionDesc}</p>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
              <h4 className="text-white font-semibold mb-1">Extra Scaffolding</h4>
              <p className="text-purple-200 text-sm">{languageText.extraScaffoldingDesc}</p>
            </div>
            <div className="text-center">
              <BookOpen className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <h4 className="text-white font-semibold mb-1">Extra Examples</h4>
              <p className="text-purple-200 text-sm">{languageText.extraExamplesDesc}</p>
            </div>
            <div className="text-center">
              <MessageSquare className="w-8 h-8 text-violet-400 mx-auto mb-2" />
              <h4 className="text-white font-semibold mb-1">Conversational Approach</h4>
              <p className="text-purple-200 text-sm">{languageText.conversationalApproachDesc}</p>
            </div>
          </div>
        </div>

                {/* How It Works */}
        <div className="bg-white/5 border border-white/20 rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 font-serif text-center">💡 {languageText.howItWorksTitle}</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                <div>
                  <h4 className="text-white font-semibold mb-2">{languageText.signInConnect}</h4>
                  <p className="text-purple-200 text-sm">{languageText.signInDesc}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                <div>
                  <h4 className="text-white font-semibold mb-2">{languageText.chooseFocus}</h4>
                  <p className="text-purple-200 text-sm">{languageText.chooseFocusDesc}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                <div>
                  <h4 className="text-white font-semibold mb-2">{languageText.getHelp}</h4>
                  <p className="text-purple-200 text-sm">{languageText.getHelpDesc}</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
                <div>
                  <h4 className="text-white font-semibold mb-2">{languageText.uploadDocuments}</h4>
                  <p className="text-purple-200 text-sm">{languageText.uploadDesc}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">5</div>
                <div>
                  <h4 className="text-white font-semibold mb-2">{languageText.trackProgress}</h4>
                  <p className="text-purple-200 text-sm">{languageText.trackDesc}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">6</div>
                <div>
                  <h4 className="text-white font-semibold mb-2">{languageText.learnGrow}</h4>
                  <p className="text-purple-200 text-sm">{languageText.learnDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Integrity */}
        <div className="bg-gradient-to-r from-emerald-900/50 to-teal-800/50 border border-emerald-400 rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 font-serif text-center">🛡️ {languageText.academicIntegrityTitle}</h3>
          
          {/* What We Do / What We Don't Do */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-emerald-200 font-semibold mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                {languageText.whatWeDoTitle}
              </h4>
              <ul className="space-y-3 text-emerald-100 font-serif">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-300">✓</span>
                  <span>{languageText.guideWriting}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-300">✓</span>
                  <span>{languageText.developIdeas}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-300">✓</span>
                  <span>{languageText.provideFeedback}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-300">✓</span>
                  <span>{languageText.teachGrammar}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-300">✓</span>
                  <span>{languageText.supportJourney}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-300">✓</span>
                  <span>{languageText.giveTeachersTools}</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-red-200 font-semibold mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                {languageText.whatWeDontTitle}
              </h4>
              <ul className="space-y-3 text-red-100 font-serif">
                <li className="flex items-start gap-2">
                  <span className="text-red-300">✗</span>
                  <span>{languageText.writeEssays}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-300">✗</span>
                  <span>{languageText.completeHomework}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-300">✗</span>
                  <span>{languageText.provideAnswers}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-300">✗</span>
                  <span>{languageText.enableDishonesty}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-300">✗</span>
                  <span>{languageText.bypassLearning}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-300">✗</span>
                  <span>{languageText.replaceTeachers}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* How It Works - Technical Details */}
          <div className="bg-white/5 border border-white/20 rounded-xl p-6 mb-6">
            <h4 className="text-2xl font-bold text-white mb-4 font-serif text-center">⚙️ How It Works</h4>
            
            {/* API Integration */}
            <div className="mb-6">
              <h5 className="text-lg font-semibold text-emerald-200 mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                API Integration
              </h5>
              <ul className="space-y-2 text-emerald-100 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-300">•</span>
                  <span>Uses GPT-4o via Echo's AI router for consistent billing and management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-300">•</span>
                  <span>Maintains conversation context across messages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-300">•</span>
                  <span>Enforces academic integrity rules through system prompts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-300">•</span>
                  <span>Provides educational fallback responses when API is unavailable</span>
                </li>
              </ul>
            </div>

            {/* Error Handling */}
            <div className="mb-6">
              <h5 className="text-lg font-semibold text-blue-200 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Error Handling
              </h5>
              <ul className="space-y-2 text-blue-100 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-300">•</span>
                  <span><strong>Missing API Key:</strong> Provides clear setup instructions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-300">•</span>
                  <span><strong>Authentication Errors:</strong> Guides users to check their API key</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-300">•</span>
                  <span><strong>Rate Limits:</strong> Handles API rate limiting gracefully</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-300">•</span>
                  <span><strong>Connection Issues:</strong> Falls back to educational resources</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Academic Integrity Features */}
          <div className="bg-white/5 border border-white/20 rounded-xl p-6 mb-6">
            <h4 className="text-2xl font-bold text-white mb-4 font-serif text-center">🎯 Academic Integrity Features</h4>
            <p className="text-purple-200 text-center mb-6">The chatbot includes robust protections against academic dishonesty with educational guidance:</p>
            
            {/* Enhanced Writing Request Detection */}
            <div className="mb-6">
              <h5 className="text-lg font-semibold text-purple-200 mb-3 flex items-center gap-2">
                <Target className="w-5 h-5" />
                Enhanced Writing Request Detection
              </h5>
              <ul className="space-y-2 text-purple-100 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-purple-300">•</span>
                  <span>Comprehensive pattern matching for various writing request types</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-300">•</span>
                  <span>Educational redirection instead of simple blocking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-300">•</span>
                  <span>Alternative learning strategies and skill development guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-300">•</span>
                  <span>Process-focused assistance rather than content generation</span>
                </li>
              </ul>
            </div>

            {/* Proofreading Guidance System */}
            <div className="mb-6">
              <h5 className="text-lg font-semibold text-pink-200 mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Proofreading Guidance System
              </h5>
              <ul className="space-y-2 text-pink-100 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-pink-300">•</span>
                  <span>Self-proofreading skill development instead of direct corrections</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-300">•</span>
                  <span>Paragraph-specific guidance (e.g., "Check Paragraph 1 for clear topic sentences")</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-300">•</span>
                  <span>Proofreading techniques and best practices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-300">•</span>
                  <span>Error type categorization (grammar, punctuation, spelling)</span>
                </li>
              </ul>
            </div>

            {/* Educational Response Types */}
            <div className="mb-6">
              <h5 className="text-lg font-semibold text-green-200 mb-3 flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                Educational Response Types
              </h5>
              <ul className="space-y-2 text-green-100 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-300">•</span>
                  <span><strong>Writing Requests:</strong> Guidance on brainstorming, outlining, thesis development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-300">•</span>
                  <span><strong>Proofreading Requests:</strong> Self-proofreading tips and area-specific guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-300">•</span>
                  <span><strong>General Requests:</strong> Learning process focus and skill development</span>
                </li>
              </ul>
            </div>

            {/* Multilingual Academic Integrity */}
            <div className="mb-6">
              <h5 className="text-lg font-semibold text-indigo-200 mb-3 flex items-center gap-2">
                <Languages className="w-5 h-5" />
                Multilingual Academic Integrity
              </h5>
              <ul className="space-y-2 text-indigo-100 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-300">•</span>
                  <span>English, Spanish, and Haitian Creole academic integrity messages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-300">•</span>
                  <span>Culturally appropriate educational guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-300">•</span>
                  <span>Localized violation explanations and learning strategies</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Content Moderation System */}
          <div className="bg-white/5 border border-white/20 rounded-xl p-6">
            <h4 className="text-2xl font-bold text-white mb-4 font-serif text-center">🛡️ Content Moderation System</h4>
            
            {/* Technical Safety Design */}
            <div className="mb-6">
              <h5 className="text-lg font-semibold text-yellow-200 mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Technical Safety Design
              </h5>
              <ul className="space-y-2 text-yellow-100 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">•</span>
                  <span>Pattern-based filtering (avoids explicit word lists in codebase)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">•</span>
                  <span>Comprehensive error handling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">•</span>
                  <span>Safe state management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300">•</span>
                  <span>Clean code practices without offensive content</span>
                </li>
              </ul>
            </div>

            {/* Violation Management */}
            <div className="mb-6">
              <h5 className="text-lg font-semibold text-orange-200 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Violation Management
              </h5>
              <ul className="space-y-2 text-orange-100 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-orange-300">•</span>
                  <span>Progressive violation tracking and counting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-300">•</span>
                  <span>Educational moderation modals with clear guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-300">•</span>
                  <span>Safe learning environment indicators</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-300">•</span>
                  <span>Multiple violation warnings with escalating responses</span>
                </li>
              </ul>
            </div>

            {/* Safety Guidelines */}
            <div className="mb-6">
              <h5 className="text-lg font-semibold text-red-200 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Safety Guidelines
              </h5>
              <ul className="space-y-2 text-red-100 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-300">•</span>
                  <span>Age-appropriate content enforcement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-300">•</span>
                  <span>Educational topic guidance and redirection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-300">•</span>
                  <span>Privacy protection for personal information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-300">•</span>
                  <span>Spam and commercial content filtering</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center py-12">
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-800/50 border border-blue-400 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4 font-serif">
              {languageText.cta}
            </h3>
            <p className="text-blue-200 text-lg mb-6 font-serif">
              {languageText.ctaSubtitle}
            </p>
            {isAuthenticated ? (
              <div className="w-full max-w-7xl mx-auto px-4">
                <div className="text-green-200 text-lg font-serif mb-6">
                  ✓ You're signed in and ready to learn!
                </div>
                
                {/* Large Chatbot Window */}
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl h-[90vh] min-h-[1200px] w-full overflow-hidden">
                  <ELATutorChatbot />
                </div>
              </div>
            ) : (
              <EchoSignIn 
                onSuccess={(user) => console.log('Signed in:', user)}
                onError={(error) => console.error('Sign in failed:', error)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-200 hover:scale-105 flex items-center space-x-3 mx-auto"
              >
                <Sparkles className="w-6 h-6" />
                <span>{languageText.startButton}</span>
              </EchoSignIn>
            )}
          </div>
        </div>

        {/* Footer Quote */}
        <div className="text-center mt-12">
          <p className="text-purple-200 text-xl font-serif italic mb-2">
            {languageText.footerQuote}
          </p>
          <p className="text-purple-300 text-sm font-serif">
            {languageText.footerAuthor}
          </p>
        </div>

      </div>
    </div>
  );
}

export default function ChatPage() {
  return (
    <LanguageProvider>
      <ChatPageContent />
    </LanguageProvider>
  );
}