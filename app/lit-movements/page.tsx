'use client';

import React from 'react';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';

const literaryMovementsContent = [
  {
    title: "Classical Literature",
    description: "Ancient Greek and Roman works including epic poetry, drama, and philosophy. The foundation of Western literature, featuring works like Homer's Iliad and Odyssey, Greek tragedies, and Roman poetry. These works established literary forms and themes that continue to influence writers today.",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-[linear-gradient(to_bottom_right,var(--amber-700),var(--orange-600))] p-8 text-white">
        <div className="text-6xl mb-4">🏛️</div>
        <h3 className="text-2xl font-bold mb-2">Classical Literature</h3>
        <p className="text-center text-sm opacity-90">8th century BCE - 5th century CE</p>
        <div className="mt-4 text-center text-sm">
          <div>Epic Poetry • Drama • Philosophy</div>
          <div className="mt-2">Homer • Sophocles • Virgil</div>
        </div>
      </div>
    ),
  },
  {
    title: "Medieval Literature",
    description: "Religious texts, allegories, chivalric romances, and vernacular poetry. This period saw the rise of courtly romance, religious allegory, and the development of vernacular literature. Works like Dante's Divine Comedy and Chaucer's Canterbury Tales defined this era.",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-[linear-gradient(to_bottom_right,var(--stone-800),var(--amber-800))] p-8 text-white">
        <div className="text-6xl mb-4">⛪</div>
        <h3 className="text-2xl font-bold mb-2">Medieval Literature</h3>
        <p className="text-center text-sm opacity-90">5th - 15th centuries</p>
        <div className="mt-4 text-center text-sm">
          <div>Religious Texts • Allegories • Chivalric Romance</div>
          <div className="mt-2">Dante • Chaucer • Anonymous</div>
        </div>
      </div>
    ),
  },
  {
    title: "Renaissance",
    description: "Humanism, revival of classical forms, emphasis on individualism. The Renaissance brought a renewed interest in classical learning, human potential, and artistic achievement. Shakespeare, Marlowe, and other writers revolutionized drama and poetry during this period.",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-[linear-gradient(to_bottom_right,var(--rose-600),var(--purple-600))] p-8 text-white">
        <div className="text-6xl mb-4">🎭</div>
        <h3 className="text-2xl font-bold mb-2">Renaissance</h3>
        <p className="text-center text-sm opacity-90">14th - 17th centuries</p>
        <div className="mt-4 text-center text-sm">
          <div>Humanism • Classical Revival • Individualism</div>
          <div className="mt-2">Shakespeare • Marlowe • Spenser</div>
        </div>
      </div>
    ),
  },
  {
    title: "Baroque",
    description: "Ornate, dramatic style with religious and secular themes. Baroque literature emphasized grandeur, emotional intensity, and complex metaphors. Writers like John Milton created epic works that combined classical traditions with Christian themes.",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-[linear-gradient(to_bottom_right,var(--violet-700),var(--indigo-700))] p-8 text-white">
        <div className="text-6xl mb-4">💎</div>
        <h3 className="text-2xl font-bold mb-2">Baroque</h3>
        <p className="text-center text-sm opacity-90">Late 16th - Mid 18th centuries</p>
        <div className="mt-4 text-center text-sm">
          <div>Ornate Style • Drama • Religious Themes</div>
          <div className="mt-2">Milton • Donne • Herbert</div>
        </div>
      </div>
    ),
  },
  {
    title: "Neoclassicism",
    description: "Return to classical ideals of order, reason, and formal structure. Writers like Alexander Pope and Jonathan Swift emphasized wit, satire, and moral instruction, following classical models of proportion and restraint.",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-[linear-gradient(to_bottom_right,var(--blue-700),var(--cyan-600))] p-8 text-white">
        <div className="text-6xl mb-4">⚖️</div>
        <h3 className="text-2xl font-bold mb-2">Neoclassicism</h3>
        <p className="text-center text-sm opacity-90">17th - 18th centuries</p>
        <div className="mt-4 text-center text-sm">
          <div>Order • Reason • Formal Structure</div>
          <div className="mt-2">Pope • Swift • Dryden</div>
        </div>
      </div>
    ),
  },
  {
    title: "Enlightenment Literature",
    description: "Emphasis on reason, science, and social progress. Writers like Voltaire and Samuel Johnson promoted rational thinking, scientific inquiry, and social reform through literature that challenged traditional authority.",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-[linear-gradient(to_bottom_right,var(--yellow-600),var(--orange-500))] p-8 text-white">
        <div className="text-6xl mb-4">💡</div>
        <h3 className="text-2xl font-bold mb-2">Enlightenment</h3>
        <p className="text-center text-sm opacity-90">18th century</p>
        <div className="mt-4 text-center text-sm">
          <div>Reason • Science • Social Progress</div>
          <div className="mt-2">Voltaire • Johnson • Diderot</div>
        </div>
      </div>
    ),
  },
  {
    title: "Romanticism",
    description: "Emotion, nature, imagination, and individualism. Romantic writers like Wordsworth, Coleridge, and Byron rejected the rationalism of the Enlightenment, instead celebrating feeling, intuition, and the sublime power of nature.",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-[linear-gradient(to_bottom_right,var(--emerald-600),var(--teal-600))] p-8 text-white">
        <div className="text-6xl mb-4">🌿</div>
        <h3 className="text-2xl font-bold mb-2">Romanticism</h3>
        <p className="text-center text-sm opacity-90">Late 18th - Mid 19th centuries</p>
        <div className="mt-4 text-center text-sm">
          <div>Emotion • Nature • Imagination</div>
          <div className="mt-2">Wordsworth • Byron • Shelley</div>
        </div>
      </div>
    ),
  },
  {
    title: "Gothic Literature",
    description: "Horror, mystery, supernatural elements. Gothic writers like Mary Shelley and Edgar Allan Poe explored the darker aspects of human nature, creating atmospheres of terror and psychological complexity.",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-[linear-gradient(to_bottom_right,var(--gray-800),var(--slate-900))] p-8 text-white">
        <div className="text-6xl mb-4">🦇</div>
        <h3 className="text-2xl font-bold mb-2">Gothic Literature</h3>
        <p className="text-center text-sm opacity-90">Late 18th - 19th centuries</p>
        <div className="mt-4 text-center text-sm">
          <div>Horror • Mystery • Supernatural</div>
          <div className="mt-2">Shelley • Poe • Stoker</div>
        </div>
      </div>
    ),
  },
  {
    title: "Realism",
    description: "Accurate depiction of everyday life and social conditions. Realist writers like Charles Dickens and George Eliot portrayed ordinary people and social problems with unprecedented detail and psychological insight.",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-[linear-gradient(to_bottom_right,var(--stone-600),var(--neutral-700))] p-8 text-white">
        <div className="text-6xl mb-4">🏭</div>
        <h3 className="text-2xl font-bold mb-2">Realism</h3>
        <p className="text-center text-sm opacity-90">Mid-19th century</p>
        <div className="mt-4 text-center text-sm">
          <div>Everyday Life • Social Conditions</div>
          <div className="mt-2">Dickens • Eliot • Flaubert</div>
        </div>
      </div>
    ),
  },
  {
    title: "Naturalism",
    description: "Scientific determinism applied to literature. Naturalist writers like Émile Zola and Theodore Dreiser depicted characters as products of their environment and heredity, applying scientific methods to literary observation.",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-[linear-gradient(to_bottom_right,var(--green-700),var(--lime-600))] p-8 text-white">
        <div className="text-6xl mb-4">🔬</div>
        <h3 className="text-2xl font-bold mb-2">Naturalism</h3>
        <p className="text-center text-sm opacity-90">Late 19th century</p>
        <div className="mt-4 text-center text-sm">
          <div>Scientific Determinism • Environment</div>
          <div className="mt-2">Zola • Dreiser • Crane</div>
        </div>
      </div>
    ),
  },
  {
    title: "Symbolism",
    description: "Use of symbols to express ideas and emotions. Symbolist writers like Charles Baudelaire and Stéphane Mallarmé used indirect suggestion and musical language to convey meaning beyond literal representation.",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-[linear-gradient(to_bottom_right,var(--purple-700),var(--pink-600))] p-8 text-white">
        <div className="text-6xl mb-4">🔮</div>
        <h3 className="text-2xl font-bold mb-2">Symbolism</h3>
        <p className="text-center text-sm opacity-90">Late 19th century</p>
        <div className="mt-4 text-center text-sm">
          <div>Symbols • Ideas • Emotions</div>
          <div className="mt-2">Baudelaire • Mallarmé • Verlaine</div>
        </div>
      </div>
    ),
  },
  {
    title: "Modernism",
    description: "Experimental forms, stream of consciousness, fragmentation. Modernist writers like James Joyce and Virginia Woolf broke traditional narrative structures to reflect the complexity and alienation of modern life.",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-[linear-gradient(to_bottom_right,var(--red-600),var(--orange-600))] p-8 text-white">
        <div className="text-6xl mb-4">🌆</div>
        <h3 className="text-2xl font-bold mb-2">Modernism</h3>
        <p className="text-center text-sm opacity-90">Early - Mid 20th century</p>
        <div className="mt-4 text-center text-sm">
          <div>Experimental Forms • Stream of Consciousness</div>
          <div className="mt-2">Joyce • Woolf • Eliot</div>
        </div>
      </div>
    ),
  },
  {
    title: "Imagism",
    description: "Clear, precise imagery in poetry. Imagist poets like Ezra Pound and H.D. emphasized direct treatment of subjects, economy of language, and the presentation of clear, sharp images.",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-[linear-gradient(to_bottom_right,var(--sky-600),var(--blue-600))] p-8 text-white">
        <div className="text-6xl mb-4">📸</div>
        <h3 className="text-2xl font-bold mb-2">Imagism</h3>
        <p className="text-center text-sm opacity-90">1910s</p>
        <div className="mt-4 text-center text-sm">
          <div>Clear Imagery • Precise Language</div>
          <div className="mt-2">Pound • H.D. • Williams</div>
        </div>
      </div>
    ),
  },
  {
    title: "Dadaism",
    description: "Anti-art, absurdist movement. Dadaist writers like Tristan Tzara challenged conventional logic and aesthetics, using random techniques and nonsensical juxtapositions to critique bourgeois culture.",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-[linear-gradient(to_bottom_right,var(--fuchsia-600),var(--violet-600))] p-8 text-white">
        <div className="text-6xl mb-4">🎪</div>
        <h3 className="text-2xl font-bold mb-2">Dadaism</h3>
        <p className="text-center text-sm opacity-90">1910s-1920s</p>
        <div className="mt-4 text-center text-sm">
          <div>Anti-Art • Absurdist • Random</div>
          <div className="mt-2">Tzara • Ball • Arp</div>
        </div>
      </div>
    ),
  },
  {
    title: "Surrealism",
    description: "Dreams, unconscious mind, automatic writing. Surrealist writers like André Breton explored the realm of dreams and the unconscious, using techniques like automatic writing to tap into hidden creative forces.",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-[linear-gradient(to_bottom_right,var(--teal-700),var(--cyan-700))] p-8 text-white">
        <div className="text-6xl mb-4">🌙</div>
        <h3 className="text-2xl font-bold mb-2">Surrealism</h3>
        <p className="text-center text-sm opacity-90">1920s-1940s</p>
        <div className="mt-4 text-center text-sm">
          <div>Dreams • Unconscious • Automatic Writing</div>
          <div className="mt-2">Breton • Éluard • Aragon</div>
        </div>
      </div>
    ),
  },
  {
    title: "Harlem Renaissance",
    description: "African American cultural and literary flowering. Writers like Langston Hughes and Zora Neale Hurston celebrated Black culture, identity, and experience during this vibrant period of artistic achievement in Harlem.",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-[linear-gradient(to_bottom_right,var(--amber-600),var(--yellow-500))] p-8 text-white">
        <div className="text-6xl mb-4">🎺</div>
        <h3 className="text-2xl font-bold mb-2">Harlem Renaissance</h3>
        <p className="text-center text-sm opacity-90">1920s-1930s</p>
        <div className="mt-4 text-center text-sm">
          <div>Black Culture • Identity • Jazz Influence</div>
          <div className="mt-2">Hughes • Hurston • McKay</div>
        </div>
      </div>
    ),
  },
  {
    title: "Beat Generation",
    description: "Counter-cultural, spontaneous prose and poetry. Beat writers like Jack Kerouac and Allen Ginsberg rejected mainstream American values, experimenting with drugs, Eastern philosophy, and spontaneous creative expression.",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-[linear-gradient(to_bottom_right,var(--slate-700),var(--gray-800))] p-8 text-white">
        <div className="text-6xl mb-4">🚗</div>
        <h3 className="text-2xl font-bold mb-2">Beat Generation</h3>
        <p className="text-center text-sm opacity-90">1950s</p>
        <div className="mt-4 text-center text-sm">
          <div>Counter-Culture • Spontaneous • Freedom</div>
          <div className="mt-2">Kerouac • Ginsberg • Burroughs</div>
        </div>
      </div>
    ),
  },
  {
    title: "Postmodernism",
    description: "Meta-fiction, pastiche, questioning of grand narratives. Postmodernist writers like Thomas Pynchon and Donald Barthelme challenged traditional storytelling, blending high and low culture while questioning absolute truths.",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-[linear-gradient(to_bottom_right,var(--indigo-600),var(--purple-700))] p-8 text-white">
        <div className="text-6xl mb-4">🔄</div>
        <h3 className="text-2xl font-bold mb-2">Postmodernism</h3>
        <p className="text-center text-sm opacity-90">1960s-present</p>
        <div className="mt-4 text-center text-sm">
          <div>Meta-fiction • Pastiche • Fragmentation</div>
          <div className="mt-2">Pynchon • Barthelme • Atwood</div>
        </div>
      </div>
    ),
  },
  {
    title: "Magic Realism",
    description: "Fantastical elements in realistic settings. Magic realist writers like Gabriel García Márquez blend magical occurrences with everyday reality, creating works that challenge conventional boundaries between fantasy and realism.",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-[linear-gradient(to_bottom_right,var(--emerald-700),var(--green-700))] p-8 text-white">
        <div className="text-6xl mb-4">✨</div>
        <h3 className="text-2xl font-bold mb-2">Magic Realism</h3>
        <p className="text-center text-sm opacity-90">Mid-20th century</p>
        <div className="mt-4 text-center text-sm">
          <div>Fantasy • Reality • Magical Elements</div>
          <div className="mt-2">García Márquez • Allende • Rushdie</div>
        </div>
      </div>
    ),
  },
  {
    title: "Confessional Poetry",
    description: "Personal, autobiographical verse. Confessional poets like Sylvia Plath and Robert Lowell broke taboos by writing directly about personal trauma, mental illness, and intimate family relationships.",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-[linear-gradient(to_bottom_right,var(--rose-700),var(--pink-700))] p-8 text-white">
        <div className="text-6xl mb-4">💔</div>
        <h3 className="text-2xl font-bold mb-2">Confessional Poetry</h3>
        <p className="text-center text-sm opacity-90">1950s-1960s</p>
        <div className="mt-4 text-center text-sm">
          <div>Personal • Autobiographical • Intimate</div>
          <div className="mt-2">Plath • Lowell • Sexton</div>
        </div>
      </div>
    ),
  },
  {
    title: "Black Arts Movement",
    description: "African American artistic and literary expression. Writers like Amiri Baraka and Nikki Giovanni created works that celebrated Black identity and promoted social and political consciousness during the Civil Rights era.",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-[linear-gradient(to_bottom_right,var(--red-700),var(--orange-700))] p-8 text-white">
        <div className="text-6xl mb-4">✊</div>
        <h3 className="text-2xl font-bold mb-2">Black Arts Movement</h3>
        <p className="text-center text-sm opacity-90">1960s-1970s</p>
        <div className="mt-4 text-center text-sm">
          <div>Black Identity • Social Consciousness</div>
          <div className="mt-2">Baraka • Giovanni • Sanchez</div>
        </div>
      </div>
    ),
  },
  {
    title: "Postcolonial Literature",
    description: "Works from formerly colonized nations. Postcolonial writers like Chinua Achebe and Salman Rushdie explore themes of cultural identity, displacement, and the legacy of colonialism in newly independent nations.",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-700),var(--amber-700))] p-8 text-white">
        <div className="text-6xl mb-4">🌍</div>
        <h3 className="text-2xl font-bold mb-2">Postcolonial Literature</h3>
        <p className="text-center text-sm opacity-90">1960s-present</p>
        <div className="mt-4 text-center text-sm">
          <div>Cultural Identity • Colonialism</div>
          <div className="mt-2">Achebe • Rushdie • Naipaul</div>
        </div>
      </div>
    ),
  },
  {
    title: "African Diaspora Literature",
    description: "Literary works by writers of African descent living outside of Africa, exploring themes of displacement, identity, cultural heritage, and the experience of living between worlds. This literature examines the lasting effects of the transatlantic slave trade and colonialism.",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-[linear-gradient(to_bottom_right,var(--amber-800),var(--orange-800))] p-8 text-white">
        <div className="text-6xl mb-4">🌊</div>
        <h3 className="text-2xl font-bold mb-2">African Diaspora Literature</h3>
        <p className="text-center text-sm opacity-90">1960s-present</p>
        <div className="mt-4 text-center text-sm">
          <div>Displacement • Identity • Cultural Heritage</div>
          <div className="mt-2">Danticat • Adichie • Phillips</div>
        </div>
      </div>
    ),
  },
  {
    title: "Feminist Literature",
    description: "Women's experiences and gender equality. Feminist writers like Margaret Atwood and Adrienne Rich examine gender roles, women's oppression, and the quest for equality through powerful literary works.",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-[linear-gradient(to_bottom_right,var(--violet-700),var(--purple-700))] p-8 text-white">
        <div className="text-6xl mb-4">♀️</div>
        <h3 className="text-2xl font-bold mb-2">Feminist Literature</h3>
        <p className="text-center text-sm opacity-90">1960s-present</p>
        <div className="mt-4 text-center text-sm">
          <div>Women's Experiences • Gender Equality</div>
          <div className="mt-2">Atwood • Rich • Walker</div>
        </div>
      </div>
    ),
  },
  {
    title: "Cyberpunk",
    description: "Technology, dystopian futures in science fiction. Cyberpunk writers like William Gibson explore the intersection of high technology and low society, creating dystopian visions of digital futures.",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-700),var(--blue-800))] p-8 text-white">
        <div className="text-6xl mb-4">🤖</div>
        <h3 className="text-2xl font-bold mb-2">Cyberpunk</h3>
        <p className="text-center text-sm opacity-90">1980s-present</p>
        <div className="mt-4 text-center text-sm">
          <div>Technology • Dystopian • Digital</div>
          <div className="mt-2">Gibson • Sterling • Dick</div>
        </div>
      </div>
    ),
  },
  {
    title: "Afrofuturism",
    description: "A cultural aesthetic and literary movement that explores the intersection of African diaspora culture with technology, science fiction, and speculative fiction. Afrofuturist writers reimagine the future through Black perspectives, addressing themes of liberation, technology, and cultural identity.",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-[linear-gradient(to_bottom_right,var(--purple-700),var(--indigo-800))] p-8 text-white">
        <div className="text-6xl mb-4">🌌</div>
        <h3 className="text-2xl font-bold mb-2">Afrofuturism</h3>
        <p className="text-center text-sm opacity-90">1990s-present</p>
        <div className="mt-4 text-center text-sm">
          <div>Black Futures • Technology • Liberation</div>
          <div className="mt-2">Butler • Jemisin • Due</div>
        </div>
      </div>
    ),
  },
  {
    title: "Science Fiction",
    description: "Stories involving futuristic technology, space travel, alternate realities, or scientific speculation. Modern sci-fi explores themes like artificial intelligence, climate change, and biotechnology while maintaining the genre's tradition of examining humanity's relationship with technology.",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-[linear-gradient(to_bottom_right,var(--indigo-700),var(--purple-800))] p-8 text-white">
        <div className="text-6xl mb-4">🚀</div>
        <h3 className="text-2xl font-bold mb-2">Science Fiction</h3>
        <p className="text-center text-sm opacity-90">21st Century Genre Fiction</p>
        <div className="mt-4 text-center text-sm">
          <div>Future Technology • Space • Scientific Speculation</div>
          <div className="mt-2">Liu • Leckie • Bacigalupi</div>
        </div>
      </div>
    ),
  },
  {
    title: "Fantasy",
    description: "Works featuring magic, mythical creatures, imaginary worlds, or supernatural elements. Contemporary fantasy has expanded beyond traditional medievalism to include urban fantasy, magical realism, and diverse cultural mythologies.",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-[linear-gradient(to_bottom_right,var(--emerald-700),var(--teal-800))] p-8 text-white">
        <div className="text-6xl mb-4">🐉</div>
        <h3 className="text-2xl font-bold mb-2">Fantasy</h3>
        <p className="text-center text-sm opacity-90">21st Century Genre Fiction</p>
        <div className="mt-4 text-center text-sm">
          <div>Magic • Mythical Creatures • Imaginary Worlds</div>
          <div className="mt-2">Jemisin • Rothfuss • Gaiman</div>
        </div>
      </div>
    ),
  },
  {
    title: "Mystery/Detective Fiction",
    description: "Stories centered on solving crimes or puzzles, often featuring investigators. Modern mystery fiction includes psychological thrillers, cozy mysteries, and police procedurals that reflect contemporary social issues and forensic advances.",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-[linear-gradient(to_bottom_right,var(--slate-700),var(--gray-800))] p-8 text-white">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-2xl font-bold mb-2">Mystery/Detective</h3>
        <p className="text-center text-sm opacity-90">21st Century Genre Fiction</p>
        <div className="mt-4 text-center text-sm">
          <div>Crime Solving • Investigation • Puzzles</div>
          <div className="mt-2">Flynn • Tana French • Connelly</div>
        </div>
      </div>
    ),
  },
  {
    title: "Horror",
    description: "Literature intended to frighten, unsettle, or create suspense through supernatural or psychological means. Contemporary horror explores social anxieties, psychological trauma, and existential dread alongside traditional supernatural elements.",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-[linear-gradient(to_bottom_right,var(--red-800),var(--black))] p-8 text-white">
        <div className="text-6xl mb-4">👻</div>
        <h3 className="text-2xl font-bold mb-2">Horror</h3>
        <p className="text-center text-sm opacity-90">21st Century Genre Fiction</p>
        <div className="mt-4 text-center text-sm">
          <div>Fear • Supernatural • Psychological Terror</div>
          <div className="mt-2">King • VanderMeer • LaRocca</div>
        </div>
      </div>
    ),
  },
  {
    title: "Romance",
    description: "Stories focused primarily on romantic relationships and emotional connections. Modern romance has diversified to include diverse voices, LGBTQ+ relationships, and subgenres that blend with other genres like fantasy and science fiction.",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-[linear-gradient(to_bottom_right,var(--rose-600),var(--pink-700))] p-8 text-white">
        <div className="text-6xl mb-4">💕</div>
        <h3 className="text-2xl font-bold mb-2">Romance</h3>
        <p className="text-center text-sm opacity-90">21st Century Genre Fiction</p>
        <div className="mt-4 text-center text-sm">
          <div>Love • Relationships • Emotional Connection</div>
          <div className="mt-2">Quinn • James • Henry</div>
        </div>
      </div>
    ),
  },
  {
    title: "Thriller/Suspense",
    description: "Fast-paced stories designed to keep readers in suspense, often involving danger or conspiracy. Contemporary thrillers incorporate cyber threats, political intrigue, and global conspiracies reflecting modern anxieties.",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-700),var(--red-700))] p-8 text-white">
        <div className="text-6xl mb-4">⚡</div>
        <h3 className="text-2xl font-bold mb-2">Thriller/Suspense</h3>
        <p className="text-center text-sm opacity-90">21st Century Genre Fiction</p>
        <div className="mt-4 text-center text-sm">
          <div>Suspense • Danger • Fast-Paced</div>
          <div className="mt-2">Patterson • Child • Silva</div>
        </div>
      </div>
    ),
  },
  {
    title: "Historical Fiction",
    description: "Stories set in the past, attempting to recreate the details of earlier time periods. Modern historical fiction often focuses on underrepresented voices and perspectives, bringing marginalized stories to light with rigorous historical research.",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-[linear-gradient(to_bottom_right,var(--amber-700),var(--orange-700))] p-8 text-white">
        <div className="text-6xl mb-4">📜</div>
        <h3 className="text-2xl font-bold mb-2">Historical Fiction</h3>
        <p className="text-center text-sm opacity-90">21st Century Genre Fiction</p>
        <div className="mt-4 text-center text-sm">
          <div>Past Settings • Historical Detail • Period Recreation</div>
          <div className="mt-2">Whitehead • Hamid • Mitchell</div>
        </div>
      </div>
    ),
  },
  {
    title: "Crime Fiction",
    description: "Broader category including detective fiction, noir, and stories about criminal activity. Contemporary crime fiction explores systemic issues, social justice, and the psychology of both criminals and victims in complex moral landscapes.",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-[linear-gradient(to_bottom_right,var(--neutral-800),var(--stone-900))] p-8 text-white">
        <div className="text-6xl mb-4">🚔</div>
        <h3 className="text-2xl font-bold mb-2">Crime Fiction</h3>
        <p className="text-center text-sm opacity-90">21st Century Genre Fiction</p>
        <div className="mt-4 text-center text-sm">
          <div>Criminal Activity • Noir • Justice</div>
          <div className="mt-2">Pelecanos • Lehane • Coben</div>
        </div>
      </div>
    ),
  },
];

export default function LitMovementsPage() {
  return (
    <main className="min-h-screen relative bg-slate-900">
      {/* Sticky Scroll Section - Full Height */}
      <div className="pt-16 pb-8">
        <StickyScroll
          content={literaryMovementsContent}
          contentClassName="h-[500px] w-[600px]"
        />
      </div>
    </main>
  );
}