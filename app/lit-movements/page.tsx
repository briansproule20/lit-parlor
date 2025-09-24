'use client';

import React from 'react';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';

const literaryMovementsContent = [
  {
    title: "Classical Literature",
    description: "Ancient Greek and Roman works including epic poetry, drama, and philosophy. The foundation of Western literature, featuring works like Homer's Iliad and Odyssey, Greek tragedies, and Roman poetry. These works established literary forms and themes that continue to influence writers today.",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "Sing, goddess, of Achilles' rage, black and murderous, that cost the Greeks incalculable pain, pitched countless souls of heroes into Hades' dark, and left their bodies to rot as feasts for dogs and birds.",
            name: "Homer",
            designation: "Epic Poet • The Iliad",
            src: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Homer_British_Museum.jpg"
          },
          {
            quote: "There is nothing more wretched than man of all the things that breathe and move on the earth. Call no man happy until he is dead, but only lucky.",
            name: "Sophocles",
            designation: "Tragedian • Oedipus Rex",
            src: "https://www.stagemilk.com/wp-content/uploads/2012/03/sophocles.jpg"
          },
          {
            quote: "Fortune favors the bold. Love conquers all things; let us too surrender to Love. The greatest wealth is to live content with little.",
            name: "Virgil",
            designation: "Roman Poet • The Aeneid",
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Parco_della_Grotta_di_Posillipo5_%28crop%29.jpg/250px-Parco_della_Grotta_di_Posillipo5_%28crop%29.jpg"
          }
        ]}
        autoplay={false}
      />
    ),
  },
  {
    title: "Medieval Literature",
    description: "Religious texts, allegories, chivalric romances, and vernacular poetry. This period saw the rise of courtly romance, religious allegory, and the development of vernacular literature. Works like Dante's Divine Comedy and Chaucer's Canterbury Tales defined this era.",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "In the middle of the journey of our life, I came to myself, in a dark wood, where the straight way was lost. Abandon all hope, ye who enter here.",
            name: "Dante Alighieri",
            designation: "Italian Poet • The Divine Comedy",
            src: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Portrait_de_Dante.jpg"
          },
          {
            quote: "When that April with his showers sweet, the drought of March has pierced unto the root. Then people long to go on pilgrimage, and palmers to go seeking out strange strands.",
            name: "Geoffrey Chaucer",
            designation: "English Poet • The Canterbury Tales",
            src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRl5CeRpMtS336t8NneuK3uLY5uNTRdUhudeQnziBk9BhpusbvQ7ox9d8a4JLb34R3oP-OFtqxf5nhMjOeBRSTOFUchcGyaspMueU-KNhw"
          },
          {
            quote: "And so it befell that Arthur and Mordred were both slain, and the most part of the noble knights of the Round Table were destroyed forever. Then was King Arthur's sword, Excalibur, returned unto the Lady of the Lake.",
            name: "Sir Thomas Malory",
            designation: "English Knight • Le Morte d'Arthur",
            src: "https://cdn.britannica.com/79/147179-050-14CCB8B7/King-Arthur-illustration-NC-title-page-Wyeth.jpg"
          }
        ]}
        autoplay={false}
      />
    ),
  },
  {
    title: "Renaissance",
    description: "Humanism, revival of classical forms, emphasis on individualism. The Renaissance brought a renewed interest in classical learning, human potential, and artistic achievement. Shakespeare, Marlowe, and other writers revolutionized drama and poetry during this period.",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer the slings and arrows of outrageous fortune, or to take arms against a sea of troubles.",
            name: "William Shakespeare",
            designation: "English Playwright • Hamlet",
            src: "https://upload.wikimedia.org/wikipedia/commons/2/21/William_Shakespeare_by_John_Taylor%2C_edited.jpg"
          },
          {
            quote: "Love is the crowning grace of humanity, the holiest right of the soul, the golden link which binds us to duty and truth, the redeeming principle that chiefly reconciles the heart to life.",
            name: "Francesco Petrarch",
            designation: "Italian Poet • Father of Humanism",
            src: "https://cdn.britannica.com/62/19062-050-68244DBF/Petrarch-engraving.jpg"
          },
          {
            quote: "It is better to be feared than loved, if you cannot be both. A prince never lacks legitimate reasons to break his promise.",
            name: "Niccolò Machiavelli",
            designation: "Italian Political Philosopher • The Prince",
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Portrait_of_Niccol%C3%B2_Machiavelli_by_Santi_di_Tito.jpg/250px-Portrait_of_Niccol%C3%B2_Machiavelli_by_Santi_di_Tito.jpg"
          }
        ]}
        autoplay={false}
      />
    ),
  },
  {
    title: "Baroque",
    description: "Ornate, dramatic style with religious and secular themes. Baroque literature emphasized grandeur, emotional intensity, and complex metaphors. Writers like John Milton created epic works that combined classical traditions with Christian themes.",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          }
        ]}
        autoplay={false}
      />
    ),
  },
  {
    title: "Neoclassicism",
    description: "Return to classical ideals of order, reason, and formal structure. Writers like Alexander Pope and Jonathan Swift emphasized wit, satire, and moral instruction, following classical models of proportion and restraint.",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          }
        ]}
        autoplay={false}
      />
    ),
  },
  {
    title: "Enlightenment Literature",
    description: "Emphasis on reason, science, and social progress. Writers like Voltaire and Samuel Johnson promoted rational thinking, scientific inquiry, and social reform through literature that challenged traditional authority.",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          }
        ]}
        autoplay={false}
      />
    ),
  },
  {
    title: "Romanticism",
    description: "Emotion, nature, imagination, and individualism. Romantic writers like Wordsworth, Coleridge, and Byron rejected the rationalism of the Enlightenment, instead celebrating feeling, intuition, and the sublime power of nature.",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          }
        ]}
        autoplay={false}
      />
    ),
  },
  {
    title: "Gothic Literature",
    description: "Horror, mystery, supernatural elements. Gothic writers like Mary Shelley and Edgar Allan Poe explored the darker aspects of human nature, creating atmospheres of terror and psychological complexity.",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          }
        ]}
        autoplay={false}
      />
    ),
  },
  {
    title: "Realism",
    description: "Accurate depiction of everyday life and social conditions. Realist writers like Charles Dickens and George Eliot portrayed ordinary people and social problems with unprecedented detail and psychological insight.",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          }
        ]}
        autoplay={false}
      />
    ),
  },
  {
    title: "Naturalism",
    description: "Scientific determinism applied to literature. Naturalist writers like Émile Zola and Theodore Dreiser depicted characters as products of their environment and heredity, applying scientific methods to literary observation.",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          }
        ]}
        autoplay={false}
      />
    ),
  },
  {
    title: "Symbolism",
    description: "Use of symbols to express ideas and emotions. Symbolist writers like Charles Baudelaire and Stéphane Mallarmé used indirect suggestion and musical language to convey meaning beyond literal representation.",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          }
        ]}
        autoplay={false}
      />
    ),
  },
  {
    title: "Modernism",
    description: "Experimental forms, stream of consciousness, fragmentation. Modernist writers like James Joyce and Virginia Woolf broke traditional narrative structures to reflect the complexity and alienation of modern life.",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          }
        ]}
        autoplay={false}
      />
    ),
  },
  {
    title: "Imagism",
    description: "Clear, precise imagery in poetry. Imagist poets like Ezra Pound and H.D. emphasized direct treatment of subjects, economy of language, and the presentation of clear, sharp images.",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          }
        ]}
        autoplay={false}
      />
    ),
  },
  {
    title: "Dadaism",
    description: "Anti-art, absurdist movement. Dadaist writers like Tristan Tzara challenged conventional logic and aesthetics, using random techniques and nonsensical juxtapositions to critique bourgeois culture.",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          }
        ]}
        autoplay={false}
      />
    ),
  },
  {
    title: "Surrealism",
    description: "Dreams, unconscious mind, automatic writing. Surrealist writers like André Breton explored the realm of dreams and the unconscious, using techniques like automatic writing to tap into hidden creative forces.",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          }
        ]}
        autoplay={false}
      />
    ),
  },
  {
    title: "Harlem Renaissance",
    description: "African American cultural and literary flowering. Writers like Langston Hughes and Zora Neale Hurston celebrated Black culture, identity, and experience during this vibrant period of artistic achievement in Harlem.",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          }
        ]}
        autoplay={false}
      />
    ),
  },
  {
    title: "Beat Generation",
    description: "Counter-cultural, spontaneous prose and poetry. Beat writers like Jack Kerouac and Allen Ginsberg rejected mainstream American values, experimenting with drugs, Eastern philosophy, and spontaneous creative expression.",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          }
        ]}
        autoplay={false}
      />
    ),
  },
  {
    title: "Postmodernism",
    description: "Meta-fiction, pastiche, questioning of grand narratives. Postmodernist writers like Thomas Pynchon and Donald Barthelme challenged traditional storytelling, blending high and low culture while questioning absolute truths.",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          }
        ]}
        autoplay={false}
      />
    ),
  },
  {
    title: "Magic Realism",
    description: "Fantastical elements in realistic settings. Magic realist writers like Gabriel García Márquez blend magical occurrences with everyday reality, creating works that challenge conventional boundaries between fantasy and realism.",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          }
        ]}
        autoplay={false}
      />
    ),
  },
  {
    title: "Confessional Poetry",
    description: "Personal, autobiographical verse. Confessional poets like Sylvia Plath and Robert Lowell broke taboos by writing directly about personal trauma, mental illness, and intimate family relationships.",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          }
        ]}
        autoplay={false}
      />
    ),
  },
  {
    title: "Black Arts Movement",
    description: "African American artistic and literary expression. Writers like Amiri Baraka and Nikki Giovanni created works that celebrated Black identity and promoted social and political consciousness during the Civil Rights era.",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          }
        ]}
        autoplay={false}
      />
    ),
  },
  {
    title: "Postcolonial Literature",
    description: "Works from formerly colonized nations. Postcolonial writers like Chinua Achebe and Salman Rushdie explore themes of cultural identity, displacement, and the legacy of colonialism in newly independent nations.",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          }
        ]}
        autoplay={false}
      />
    ),
  },
  {
    title: "African Diaspora Literature",
    description: "Literary works by writers of African descent living outside of Africa, exploring themes of displacement, identity, cultural heritage, and the experience of living between worlds. This literature examines the lasting effects of the transatlantic slave trade and colonialism.",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          }
        ]}
        autoplay={false}
      />
    ),
  },
  {
    title: "Feminist Literature",
    description: "Women's experiences and gender equality. Feminist writers like Margaret Atwood and Adrienne Rich examine gender roles, women's oppression, and the quest for equality through powerful literary works.",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          }
        ]}
        autoplay={false}
      />
    ),
  },
  {
    title: "Cyberpunk",
    description: "Technology, dystopian futures in science fiction. Cyberpunk writers like William Gibson explore the intersection of high technology and low society, creating dystopian visions of digital futures.",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          }
        ]}
        autoplay={false}
      />
    ),
  },
  {
    title: "Afrofuturism",
    description: "A cultural aesthetic and literary movement that explores the intersection of African diaspora culture with technology, science fiction, and speculative fiction. Afrofuturist writers reimagine the future through Black perspectives, addressing themes of liberation, technology, and cultural identity.",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          }
        ]}
        autoplay={false}
      />
    ),
  },
  {
    title: "Science Fiction",
    description: "Stories involving futuristic technology, space travel, alternate realities, or scientific speculation. Modern sci-fi explores themes like artificial intelligence, climate change, and biotechnology while maintaining the genre's tradition of examining humanity's relationship with technology.",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          }
        ]}
        autoplay={false}
      />
    ),
  },
  {
    title: "Fantasy",
    description: "Works featuring magic, mythical creatures, imaginary worlds, or supernatural elements. Contemporary fantasy has expanded beyond traditional medievalism to include urban fantasy, magical realism, and diverse cultural mythologies.",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          }
        ]}
        autoplay={false}
      />
    ),
  },
  {
    title: "Mystery/Detective Fiction",
    description: "Stories centered on solving crimes or puzzles, often featuring investigators. Modern mystery fiction includes psychological thrillers, cozy mysteries, and police procedurals that reflect contemporary social issues and forensic advances.",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          }
        ]}
        autoplay={false}
      />
    ),
  },
  {
    title: "Horror",
    description: "Literature intended to frighten, unsettle, or create suspense through supernatural or psychological means. Contemporary horror explores social anxieties, psychological trauma, and existential dread alongside traditional supernatural elements.",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          }
        ]}
        autoplay={false}
      />
    ),
  },
  {
    title: "Romance",
    description: "Stories focused primarily on romantic relationships and emotional connections. Modern romance has diversified to include diverse voices, LGBTQ+ relationships, and subgenres that blend with other genres like fantasy and science fiction.",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          }
        ]}
        autoplay={false}
      />
    ),
  },
  {
    title: "Thriller/Suspense",
    description: "Fast-paced stories designed to keep readers in suspense, often involving danger or conspiracy. Contemporary thrillers incorporate cyber threats, political intrigue, and global conspiracies reflecting modern anxieties.",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          }
        ]}
        autoplay={false}
      />
    ),
  },
  {
    title: "Historical Fiction",
    description: "Stories set in the past, attempting to recreate the details of earlier time periods. Modern historical fiction often focuses on underrepresented voices and perspectives, bringing marginalized stories to light with rigorous historical research.",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          }
        ]}
        autoplay={false}
      />
    ),
  },
  {
    title: "Crime Fiction",
    description: "Broader category including detective fiction, noir, and stories about criminal activity. Contemporary crime fiction explores systemic issues, social justice, and the psychology of both criminals and victims in complex moral landscapes.",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          },
          {
            quote: "",
            name: "",
            designation: "",
            src: ""
          }
        ]}
        autoplay={false}
      />
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