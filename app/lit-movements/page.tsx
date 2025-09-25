'use client';

import React from 'react';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import { TracingBeam } from '@/components/ui/tracing-beam';

const literaryMovementsContent = [
  {
    title: "Classical Literature",
    description: "Ancient Greek and Roman works including epic poetry, drama, and philosophy. The foundation of Western literature, featuring works like Homer's Iliad and Odyssey, Greek tragedies, and Roman poetry. These works established literary forms and themes that continue to influence writers today.",
    dateRange: "8th century BC - 5th century AD",
    countries: "Greece, Rome",
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
    dateRange: "5th century - 15th century",
    countries: "Italy, England, France, Germany",
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
    dateRange: "14th century - 17th century",
    countries: "Italy, England, France, Spain",
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
    dateRange: "17th century - early 18th century",
    countries: "England, France, Spain, Italy",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "Better to reign in Hell than serve in Heaven. The mind is its own place, and in itself can make a Heaven of Hell, a Hell of Heaven.",
            name: "John Milton",
            designation: "English Poet • Paradise Lost",
            src: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSs6A4tDdev1zATCkS49xZ2h_EfdVsxM3piI6CTOfRcyXzLmbMdNErbSILuORTGNaT3VjyC_1NyBthGg8U"
          },
          {
            quote: "Finally, from so little sleeping and so much reading, his brain dried up and he went completely out of his mind. Too much sanity may be madness — and maddest of all: to see life as it is, and not as it should be!",
            name: "Miguel de Cervantes",
            designation: "Spanish Novelist • Don Quixote",
            src: "https://www.meisterdrucke.us/kunstwerke/1260px/Unknown_artist_-_Miguel_de_Cervantes_Saavedra_1547-1616_-_engraving_-_19th_century_-_%28MeisterDrucke-1024954%29.jpg"
          },
          {
            quote: "It is not only what we do, but also what we do not do, for which we are accountable. We are all made of the same clay, but not from the same mold.",
            name: "Molière",
            designation: "French Playwright • Tartuffe",
            src: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQksL12WRICX3CJv_pDRsdDk2wdSlhwNG6_rYuMHcskBOtq_ADg0FwblL6UL14lxKqzz161_TdwYCD8C-4"
          }
        ]}
        autoplay={false}
      />
    ),
  },
  {
    title: "Neoclassicism",
    description: "Return to classical ideals of order, reason, and formal structure. Writers like Alexander Pope and Jonathan Swift emphasized wit, satire, and moral instruction, following classical models of proportion and restraint.",
    dateRange: "1660 - 1798",
    countries: "England, France",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "A little learning is a dangerous thing; drink deep, or taste not the Pierian spring. True wit is nature to advantage dressed, what oft was thought, but ne'er so well expressed.",
            name: "Alexander Pope",
            designation: "Poet • Essay on Criticism & The Rape of the Lock",
            src: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Alexander_Pope_by_Michael_Dahl.jpg"
          },
          {
            quote: "All human things are subject to decay, and when fate summons, monarchs must obey. None but the brave deserves the fair.",
            name: "John Dryden",
            designation: "Poet & Critic • Absalom and Achitophel",
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/John_Dryden_by_Sir_Godfrey_Kneller%2C_Bt.jpg/250px-John_Dryden_by_Sir_Godfrey_Kneller%2C_Bt.jpg"
          },
          {
            quote: "Every man desires to live long, but no man wishes to be old. It is impossible that anything so natural, so necessary, and so universal as death, should ever have been designed by Providence as an evil to mankind.",
            name: "Jonathan Swift",
            designation: "Satirist • Gulliver's Travels & A Modest Proposal",
            src: "https://chroniclesmagazine.org/wp-content/uploads/sites/3/2025/01/Jonathan-Swift-.jpg"
          }
        ]}
        autoplay={false}
      />
    ),
  },
  {
    title: "Enlightenment Literature",
    description: "Emphasis on reason, science, and social progress. Writers like Voltaire and Samuel Johnson promoted rational thinking, scientific inquiry, and social reform through literature that challenged traditional authority.",
    dateRange: "1685 - 1815",
    countries: "France, England, Germany, Scotland",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "When a man is tired of London, he is tired of life. The true measure of a man is how he treats someone who can do him absolutely no good. Clear your mind of cant.",
            name: "Samuel Johnson",
            designation: "Lexicographer & Essayist • A Dictionary of the English Language",
            src: "https://upload.wikimedia.org/wikipedia/commons/2/20/Samuel_Johnson_by_Joshua_Reynolds.jpg"
          },
          {
            quote: "I disapprove of what you say, but I will defend to the death your right to say it. Common sense is not so common. Judge a man by his questions rather than by his answers.",
            name: "Voltaire",
            designation: "Philosopher & Writer • Candide",
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkcRX5KxrGSZtV7pa31RCUVLhGeohJH9JmKC-qm0QiUH-4-mcCaEvPdOsA9t1DVR2pSR9EAFmCkSxDXtmNxHoW8eygZUlNuQ2sV3L2f0c"
          },
          {
            quote: "Man is born free, and everywhere he is in chains. The general will is always right. We are born to work together like feet, hands, and eyes, like the two rows of teeth, upper and lower.",
            name: "Jean-Jacques Rousseau",
            designation: "Political Philosopher • The Social Contract & Émile",
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Jean-Jacques_Rousseau_%28painted_portrait%29.jpg/250px-Jean-Jacques_Rousseau_%28painted_portrait%29.jpg"
          },
          {
            quote: "Reason is, and ought only to be the slave of the passions. Custom, then, is the great guide of human life. It is not contrary to reason to prefer the destruction of the whole world to the scratching of my finger.",
            name: "David Hume",
            designation: "Scottish Philosopher • A Treatise of Human Nature",
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Painting_of_David_Hume.jpg/250px-Painting_of_David_Hume.jpg"
          },
          {
            quote: "Government has no other end, but the preservation of property. All mankind... being all equal and independent, no one ought to harm another in his life, health, liberty or possessions.",
            name: "John Locke",
            designation: "English Philosopher • Two Treatises of Government",
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/JohnLocke.png/250px-JohnLocke.png"
          }
        ]}
        autoplay={false}
      />
    ),
  },
  {
    title: "Romanticism",
    description: "Emotion, nature, imagination, and individualism. Romantic writers like Wordsworth, Coleridge, and Byron rejected the rationalism of the Enlightenment, instead celebrating feeling, intuition, and the sublime power of nature.",
    dateRange: "1798 - 1837",
    countries: "England, Germany, France",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "Poetry is the record of the best and happiest moments of the happiest and best minds. The good want power, but to weep barren tears. Our sweetest songs are those that tell of saddest thought.",
            name: "Percy Bysshe Shelley",
            designation: "Romantic Poet • Ozymandias & Prometheus Unbound",
            src: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSHQrH39ba1TM3LTu7tDwlZDGiQ6Xf-2320Wlukk3HJg1f_uRkrnftV4jc-sDhzvFH22C21aSpFEoX7giM"
          },
          {
            quote: "In Xanadu did Kubla Khan a stately pleasure dome decree. Water, water, everywhere, nor any drop to drink. He prayeth best, who loveth best all things both great and small.",
            name: "Samuel Taylor Coleridge",
            designation: "Romantic Poet • The Rime of the Ancient Mariner",
            src: "https://upload.wikimedia.org/wikipedia/commons/9/91/SamuelTaylorColeridge.jpg"
          },
          {
            quote: "She walks in beauty, like the night of cloudless climes and starry skies. The great object of life is sensation - to feel that we exist, even though in pain.",
            name: "Lord Byron",
            designation: "Romantic Poet • She Walks in Beauty & Don Juan",
            src: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Byron_1813_by_Phillips.jpg"
          },
          {
            quote: "The child is father of the man. Come forth into the light of things, let nature be your teacher. That best portion of a man's life: his little, nameless, unremembered acts of kindness and love.",
            name: "William Wordsworth",
            designation: "Nature Poet • Lyrical Ballads & The Prelude",
            src: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Wordsworth_on_Helvellyn_by_Benjamin_Robert_Haydon.jpg"
          },
          {
            quote: "To see a world in a grain of sand and heaven in a wild flower, hold infinity in the palms of your hand and eternity in an hour. How do you know but ev'ry bird that cuts the airy way, is an immense world of delight, clos'd by your senses five?",
            name: "William Blake",
            designation: "Visionary Poet & Artist • Songs of Innocence and Experience",
            src: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTRdWgV7MCgtUnHkvvIDbBhVANiX648rAiWzk8MckDRNNpenoiAG-Yq5KeczwPKJZP29WlMVr9jZvhlF48"
          },
          {
            quote: "I am no bird; and no net ensnares me: I am a free human being with an independent will. It is in vain to say human beings ought to be satisfied with tranquillity: they must have action; and they will make it if they cannot find it.",
            name: "Charlotte Brontë",
            designation: "Romantic Novelist • Jane Eyre & Villette",
            src: "https://assets.americanliterature.com/al/images/author/charlotte-bronte-coloured-drawing.jpg"
          },
          {
            quote: "I have dreamt in my life, dreams that have stayed with me ever after, and changed my ideas; they have gone through and through me, like wine through water, and altered the color of my mind.",
            name: "Emily Brontë",
            designation: "Romantic Novelist • Wuthering Heights",
            src: "https://cdn2.penguin.com.au/authors/original/34655au.jpg"
          },
          {
            quote: "I avoid looking forward or backward, and try to keep looking upward. A person who has not done one half his day's work by ten o'clock, runs a chance of leaving the other half undone.",
            name: "Anne Brontë",
            designation: "Romantic Novelist • The Tenant of Wildfell Hall & Agnes Grey",
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Anne_Bront%C3%AB_by_Patrick_Branwell_Bront%C3%AB_restored.jpg/250px-Anne_Bront%C3%AB_by_Patrick_Branwell_Bront%C3%AB_restored.jpg"
          },
          {
            quote: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife. The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.",
            name: "Jane Austen",
            designation: "Romantic Novelist • Pride and Prejudice & Emma",
            src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTKvTxf6VJe2M3N2PYOaSs6noTqB8B19TsN6QPP5fl-_fNqyP-55ShcT12Fp0PWSuGlyHLyajnzoPmyH7QB43Z6n_S4OFqITTEheOIpEg"
          }
        ]}
        autoplay={false}
      />
    ),
  },
  {
    title: "Gothic Literature",
    description: "Horror, mystery, supernatural elements. Gothic writers like Mary Shelley and Edgar Allan Poe explored the darker aspects of human nature, creating atmospheres of terror and psychological complexity.",
    dateRange: "1760s - 1840s",
    countries: "England, Germany, USA",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "Nothing is so painful to the human mind as a great and sudden change. Life, although it may only be an accumulation of anguish, is dear to me, and I will defend it.",
            name: "Mary Shelley",
            designation: "Gothic Novelist • Frankenstein",
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/RothwellMaryShelley.jpg/250px-RothwellMaryShelley.jpg"
          },
          {
            quote: "Terror and human nature seemed to her necessary companions. When we read the annals of those dark and superstitious times, reason revolts, yet fancy delights in the terrific.",
            name: "Ann Radcliffe",
            designation: "Gothic Novelist • The Mysteries of Udolpho",
            src: "https://i0.wp.com/apilgriminnarnia.com/wp-content/uploads/2021/03/ann-radcliffe.jpg?resize=157%2C274&ssl=1"
          },
          {
            quote: "All that we see or seem is but a dream within a dream. I became insane, with long intervals of horrible sanity. The death of a beautiful woman is, unquestionably, the most poetical topic in the world.",
            name: "Edgar Allan Poe",
            designation: "Dark Romantic • The Raven & The Tell-Tale Heart",
            src: "https://cdn.britannica.com/52/76652-050-F4A6B093/Edgar-Allan-Poe.jpg"
          },
          {
            quote: "There are darknesses in life and there are lights, and you are one of the lights, the light of all lights. The blood is the life! For the blood is the life.",
            name: "Bram Stoker",
            designation: "Gothic Novelist • Dracula",
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Bram_Stoker_1906.jpg/250px-Bram_Stoker_1906.jpg"
          }
        ]}
        autoplay={false}
      />
    ),
  },
  {
    title: "Transcendentalism",
    description: "American philosophical and literary movement emphasizing individualism, nature, and spiritual intuition. Transcendentalist writers like Emerson and Thoreau believed in the inherent goodness of people and nature, advocating for self-reliance and civil disobedience.",
    dateRange: "1830s - 1860s",
    countries: "USA (New England)",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us. Do not go where the path may lead, go instead where there is no path and leave a trail.",
            name: "Ralph Waldo Emerson",
            designation: "Transcendentalist • Self-Reliance & Nature",
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Ralph_Waldo_Emerson_ca1857_retouched.jpg/250px-Ralph_Waldo_Emerson_ca1857_retouched.jpg"
          },
          {
            quote: "I went to the woods to live deliberately, to front only the essential facts of life. The mass of men lead lives of quiet desperation. In wildness is the preservation of the world.",
            name: "Henry David Thoreau",
            designation: "Transcendentalist • Walden & Civil Disobedience",
            src: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Benjamin_D._Maxham_-_Henry_David_Thoreau_-_Restored.jpg"
          },
          {
            quote: "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion. A foolish consistency is the hobgoblin of little minds.",
            name: "Margaret Fuller",
            designation: "Transcendentalist • Woman in the Nineteenth Century",
            src: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-166443061.jpg"
          }
        ]}
        autoplay={false}
      />
    ),
  },
  {
    title: "Dark Transcendentalism",
    description: "American literary movement that challenged optimistic Transcendentalist beliefs, exploring the darker aspects of human nature and society. Writers like Hawthorne and Melville examined sin, guilt, and the complexities of moral ambiguity.",
    dateRange: "1850s - 1860s",
    countries: "USA",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "Every individual has a place to fill in the world and is important in some respect whether he chooses to be so or not. No man can be perfectly happy till all are happy.",
            name: "Nathaniel Hawthorne",
            designation: "Dark Transcendentalist • The Scarlet Letter & Young Goodman Brown",
            src: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Nathaniel_Hawthorne_by_Brady%2C_1860-64.jpg"
          },
          {
            quote: "It is better to fail in originality than to succeed in imitation. Call me Ishmael. I would prefer not to.",
            name: "Herman Melville",
            designation: "Dark Transcendentalist • Moby-Dick & Bartleby, the Scrivener",
            src: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Herman_Melville_by_Joseph_O_Eaton.jpg"
          },
          {
            quote: "I'm Nobody! Who are you? Because I could not stop for Death, He kindly stopped for me. Hope is the thing with feathers that perches in the soul.",
            name: "Emily Dickinson",
            designation: "Dark Transcendentalist • Because I could not stop for Death",
            src: "https://www.emilydickinsonmuseum.org/wp-content/uploads/Theme-Images/daguerreotype-cropped-corrected-1.jpg"
          }
        ]}
        autoplay={false}
      />
    ),
  },
  {
    title: "Realism",
    description: "Accurate depiction of everyday life and social conditions. Realist writers like Charles Dickens and George Eliot portrayed ordinary people and social problems with unprecedented detail and psychological insight.",
    dateRange: "1848 - 1880s",
    countries: "France, England, USA, Russia",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "Pain and suffering are always inevitable for a large intelligence and a deep heart. If you want to be happy, be. We sometimes encounter people, even perfect strangers, who begin to interest us at first sight.",
            name: "Fyodor Dostoevsky",
            designation: "Psychological Realist • Crime and Punishment & The Brothers Karamazov",
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Vasily_Perov_-_%D0%9F%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82_%D0%A4.%D0%9C.%D0%94%D0%BE%D1%81%D1%82%D0%BE%D0%B5%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_-_Google_Art_Project.jpg/960px-Vasily_Perov_-_%D0%9F%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82_%D0%A4.%D0%9C.%D0%94%D0%BE%D1%81%D1%82%D0%BE%D0%B5%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_-_Google_Art_Project.jpg"
          },
          {
            quote: "It was the best of times, it was the worst of times. No one is useless in this world who lightens the burdens of another. Have a heart that never hardens, and a temper that never tires, and a touch that never hurts.",
            name: "Charles Dickens",
            designation: "Social Realist • A Tale of Two Cities & Oliver Twist",
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Dickens_Gurney_head.jpg/250px-Dickens_Gurney_head.jpg"
          },
          {
            quote: "Everyone thinks of changing the world, but no one thinks of changing himself. If you want to be happy, be. The two most powerful warriors are patience and time.",
            name: "Leo Tolstoy",
            designation: "Epic Realist • War and Peace & Anna Karenina",
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/L.N.Tolstoy_Prokudin-Gorsky.jpg/250px-L.N.Tolstoy_Prokudin-Gorsky.jpg"
          },
          {
            quote: "We work in the dark—we do what we can—we give what we have. Our doubt is our passion, and our passion is our task. The rest is the madness of art.",
            name: "Henry James",
            designation: "Psychological Realist • The Portrait of a Lady & The Turn of the Screw",
            src: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Henry_James_by_John_Singer_Sargent_cleaned.jpg"
          },
          {
            quote: "A month in the country will give you more material than a year in the city. Death is terrible, but still more terrible is the feeling that you might live forever and never die.",
            name: "Ivan Turgenev",
            designation: "Russian Realist • Fathers and Sons & A Month in the Country",
            src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQj1Vl0GiYrbGY9cSMCu2ic-K1rJvMF16Dlsvt1_l9mzuv2gd-KSHYrTfOSKWF68omjxMrK_TZRTeESW4bLoCyPRKlv0nts1lKy-kHXyg"
          },
          {
            quote: "There is no such thing as a great talent without great will power. Behind every great fortune there is a crime. A mother's happiness is like a beacon, lighting up the future but reflected also on the past.",
            name: "Honoré de Balzac",
            designation: "French Realist • La Comédie Humaine & Père Goriot",
            src: "https://m.media-amazon.com/images/M/MV5BZmIxMGIzZjEtNjhlYi00M2FmLTljNTQtNDgwY2Y5NjQyZGVmXkEyXkFqcGc@._V1_.jpg"
          },
          {
            quote: "The reports of my death are greatly exaggerated. Kindness is the language which the deaf can hear and the blind can see. Always do what is right. It will gratify half of mankind and astound the other.",
            name: "Mark Twain",
            designation: "American Realist • The Adventures of Huckleberry Finn",
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Mark_Twain_by_AF_Bradley.jpg/250px-Mark_Twain_by_AF_Bradley.jpg"
          },
          {
            quote: "It is never too late to be what you might have been. What do we live for, if it is not to make life less difficult for each other? Our deeds determine us, as much as we determine our deeds.",
            name: "George Eliot (Mary Ann Evans)",
            designation: "Victorian Realist • Middlemarch & Silas Marner",
            src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQDXH2PLjwsQcGkaiDXad8wcpWcijTOb-gr19cuuTP3gxrA9PDHRnqRsfxS8pShlZIW_OKl"
          },
          {
            quote: "The voice of the sea speaks to the soul. The touch of the sea is sensuous, enfolding the body in its soft, close embrace. She was becoming herself and daily casting aside that fictitious self.",
            name: "Kate Chopin",
            designation: "American Realist • The Awakening",
            src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRj53UvzW5qYJGg0Mqizgrl1NhVN-_Ba65FDq5I1NE22VKygLoGfTDYp_3KLVXD2iL3TQXgUKIcAphK3U5w1-xP5x5O4GzosLHvkdIJV5k"
          },
          {
            quote: "There are two ways of spreading light: to be the candle or the mirror that reflects it. The real loneliness is living among all these kind people who only ask one to pretend!",
            name: "Edith Wharton",
            designation: "American Realist • The House of Mirth & The Age of Innocence",
            src: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTpMlugOJkQkSM4SzO-SiF30_oDi0ViKh-xuYhoLMfh30JcuS9p4VVwAMZQWE1e1AjhflQ1qC28JCfs4iU"
          },
          {
            quote: "The heart of another is a dark forest, always, no matter how close it has been to one's own. The dead might as well try to speak to the living as the old to the young.",
            name: "Willa Cather",
            designation: "American Realist • My Ántonia & O Pioneers!",
            src: "https://www.pbs.org/wnet/americanmasters/files/2015/06/Willa_Cather_ca._1912-338x340.jpg"
          }
        ]}
        autoplay={false}
      />
    ),
  },
  {
    title: "Naturalism",
    description: "Scientific determinism applied to literature. Naturalist writers like Émile Zola and Theodore Dreiser depicted characters as products of their environment and heredity, applying scientific methods to literary observation.",
    dateRange: "1880s - 1920s",
    countries: "France, USA, Germany",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "If there is no struggle, there is no progress. Where justice is denied, where poverty is enforced, neither persons nor property will be safe. I would unite with anybody to do right and with nobody to do wrong.",
            name: "Frederick Douglass",
            designation: "Abolitionist Writer • Narrative of the Life of Frederick Douglass",
            src: "https://www.visitmaryland.org/sites/default/files/styles/editorial_hero/public/legacy_images/Att-Frederick-Douglass-915x515.jpg?itok=7g48UbHc"
          },
          {
            quote: "The artist is nothing without the gift, but the gift is nothing without work. One forges one's style on the terrible anvil of daily deadlines. I am little concerned with beauty or perfection. I don't care for the great centuries. All I care about is life, struggle, intensity.",
            name: "Émile Zola",
            designation: "French Naturalist • Germinal & Nana",
            src: "https://cdn.britannica.com/30/135430-050-E4E76642/Emile-Zola.jpg"
          },
          {
            quote: "Our civilization is still in a middle stage, scarcely beast, in that it is no longer wholly guided by instinct; scarcely human, in that it is not yet wholly guided by reason.",
            name: "Theodore Dreiser",
            designation: "American Naturalist • Sister Carrie & An American Tragedy",
            src: "https://cdn.britannica.com/03/79803-050-6C087DDB/Theodore-Dreiser.jpg"
          },
          {
            quote: "The proper function of man is to live, not to exist. I would rather be ashes than dust! I would rather that my spark should burn out in a brilliant blaze than it should be stifled by dry-rot.",
            name: "Jack London",
            designation: "American Naturalist • The Call of the Wild & White Fang",
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Jack_London_young.jpg/960px-Jack_London_young.jpg"
          },
          {
            quote: "A man said to the universe: 'Sir, I exist!' 'However,' replied the universe, 'the fact has not created in me a sense of obligation.' None of them knew the color of the sky.",
            name: "Stephen Crane",
            designation: "American Naturalist • The Red Badge of Courage & Maggie: A Girl of the Streets",
            src: "https://upload.wikimedia.org/wikipedia/commons/6/6c/SCrane2.JPG"
          }
        ]}
        autoplay={false}
      />
    ),
  },
  {
    title: "Modernism",
    description: "Experimental forms, stream of consciousness, fragmentation. Modernist writers like James Joyce and Virginia Woolf broke traditional narrative structures to reflect the complexity and alienation of modern life.",
    dateRange: "1890s - 1940s",
    countries: "England, Ireland, USA, France",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "History, Stephen said, is a nightmare from which I am trying to awake. Every life is many days, day after day. We walk through ourselves, meeting robbers, ghosts, giants, old men, young men, wives, widows, brothers-in-love, but always meeting ourselves.",
            name: "James Joyce",
            designation: "Irish Modernist • Ulysses & Finnegans Wake",
            src: "https://www.go-to-ireland.com/wp-content/uploads/2013/12/james-joyce-2.jpg"
          },
          {
            quote: "For the mind of man is the most capricious of insects - flitting, fluttering. Yet obscurity, which is one of the greatest beauties of literature, haunts the very simplest song.",
            name: "Virginia Woolf",
            designation: "English Modernist • Mrs. Dalloway & To the Lighthouse",
            src: "https://upload.wikimedia.org/wikipedia/commons/0/0b/George_Charles_Beresford_-_Virginia_Woolf_in_1902_-_Restoration.jpg"
          },
          {
            quote: "There is no there there. The earth is the earth as a peasant sees it, the world is the world as a duchess sees it, and anyway a rose is a rose is a rose.",
            name: "Gertrude Stein",
            designation: "American Modernist • Three Lives & The Autobiography of Alice B. Toklas",
            src: "https://upload.wikimedia.org/wikipedia/commons/2/25/Gertrude_Stein_1935-01-04.jpg"
          },
          {
            quote: "So we beat on, boats against the current, borne back ceaselessly into the past. In his blue gardens men and girls came and went like moths among the whisperings and the champagne and the stars.",
            name: "F. Scott Fitzgerald",
            designation: "American Modernist • The Great Gatsby & Tender Is the Night",
            src: "https://m.media-amazon.com/images/M/MV5BNzhkYTNkNTktN2M5OS00MjU5LWFkMWQtZGEwOWIzZjcyY2NiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
          },
          {
            quote: "I don't want to live. I want to love first, and live incidentally. Nobody has ever measured, not even poets, how much the human heart can hold.",
            name: "Zelda Fitzgerald",
            designation: "American Modernist • Save Me the Waltz",
            src: "https://upload.wikimedia.org/wikipedia/commons/4/40/Zelda_Fitzgerald_circa_1919_Retouched.jpg"
          },
          {
            quote: "All good books are alike in that they are truer than if they had really happened. The world breaks everyone, and afterward, some are strong at the broken places.",
            name: "Ernest Hemingway",
            designation: "American Modernist • The Sun Also Rises & A Farewell to Arms",
            src: "https://i0.wp.com/karsh.org/wp-content/uploads/2016/10/Yousuf-Karsh-Ernest-Hemingway-1957.jpg?fit=960%2C1208&strip=none&ssl=1"
          },
          {
            quote: "The past is never dead. It's not even past. Memory believes before knowing remembers. Believes longer than recollects, longer than knowing even wonders.",
            name: "William Faulkner",
            designation: "American Modernist • The Sound and the Fury & As I Lay Dying",
            src: "https://www.loa.org/wp-content/uploads/2023/08/faulkner_william_WD-1.jpg"
          },
          {
            quote: "I have always imagined that Paradise will be a kind of library. Time forks perpetually toward innumerable futures. In one of them I am your enemy.",
            name: "Jorge Luis Borges",
            designation: "Argentine Modernist • Labyrinths & Ficciones",
            src: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Jorge_Luis_Borges_1951%2C_by_Grete_Stern.jpg"
          },
          {
            quote: "The real voyage of discovery consists not in seeking new landscapes, but in having new eyes. Remembrance of things past is not necessarily the remembrance of things as they were.",
            name: "Marcel Proust",
            designation: "French Modernist • In Search of Lost Time",
            src: "https://media.newyorker.com/photos/63e3d40f4138f62754b70a7c/master/pass/Benton-Proust-Writing.jpg"
          },
          {
            quote: "The horror! The horror! We live as we dream - alone. The belief in a supernatural source of evil is not necessary; men alone are quite capable of every wickedness.",
            name: "Joseph Conrad",
            designation: "Polish-British Modernist • Heart of Darkness & Lord Jim",
            src: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Joseph_Conrad-remastered_to_black_and_white.png"
          },
          {
            quote: "Ever tried. Ever failed. No matter. Try again. Fail again. Fail better. Nothing to be done. I can't go on, I'll go on.",
            name: "Samuel Beckett",
            designation: "Irish Modernist • Waiting for Godot & Endgame",
            src: "https://cdn.britannica.com/72/6372-050-FB63515E/Samuel-Beckett-1965.jpg"
          },
          {
            quote: "Someone must have been telling lies about Josef K., he knew he had done nothing wrong but, one morning, he was arrested. It is not necessary to accept everything as true, one must only accept it as necessary.",
            name: "Franz Kafka",
            designation: "Czech Modernist • The Metamorphosis & The Trial",
            src: "https://upload.wikimedia.org/wikipedia/commons/2/26/Franz_Kafka%2C_1923.jpg"
          },
          {
            quote: "April is the cruellest month. We shall not cease from exploration, and the end of all our exploring will be to arrive where we started and know the place for the first time.",
            name: "T.S. Eliot",
            designation: "Anglo-American Modernist • The Waste Land & Four Quartets",
            src: "https://upload.wikimedia.org/wikipedia/commons/2/26/Thomas_Stearns_Eliot_by_Lady_Ottoline_Morrell_%281934%29.jpg"
          }
        ]}
        autoplay={false}
      />
    ),
  },
  {
    title: "Imagism",
    description: "Clear, precise imagery in poetry. Imagist poets like Ezra Pound and H.D. emphasized direct treatment of subjects, economy of language, and the presentation of clear, sharp images.",
    dateRange: "1909 - 1917",
    countries: "England, USA",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "Make it new. The image is not an idea. It is a radiant node or cluster; it is what I can, and must perforce, call a VORTEX, from which, and through which, and into which, ideas are constantly rushing.",
            name: "Ezra Pound",
            designation: "Imagist Founder • In a Station of the Metro & The Cantos",
            src: "https://upload.wikimedia.org/wikipedia/en/4/43/Ezra_Pound_by_Alvin_Langdon_Coburn%2C_1913.jpg"
          },
          {
            quote: "The whole white world is ours. Every peak, every crag, every castle, every sea. The light passes from ridge to ridge, from flower to flower.",
            name: "H.D. (Hilda Doolittle)",
            designation: "Imagist Poet • Sea Garden & Helen in Egypt",
            src: "https://s3-us-east-2.amazonaws.com/cdn-test.poetryfoundation.org/content/images/be92d051b959c7534262df5955afd724c9bdba5e.jpeg"
          },
          {
            quote: "All books are either dreams or swords, you can cut, or you can drug, with words. A poet is a nightingale, who sits in darkness and sings to cheer its own solitude with sweet sounds.",
            name: "Amy Lowell",
            designation: "Imagist Poet • Sword Blades and Poppy Seed",
            src: "https://s3-us-east-2.amazonaws.com/cdn-test.poetryfoundation.org/content/images/985ac817d73635836c6ba05069149cb86f409223.jpeg"
          },
          {
            quote: "So much depends upon a red wheel barrow glazed with rain water beside the white chickens. No ideas but in things.",
            name: "William Carlos Williams",
            designation: "Imagist Poet • Spring and All & Paterson",
            src: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQYmVNsed4rbVe4DK7Ke09NgJEmlyh_P3gCfiztfwuEiCmWXXORYwflw2LsWVq2mw7Jw3BmjePmQvIvak0"
          }
        ]}
        autoplay={false}
      />
    ),
  },
  {
    title: "Harlem Renaissance",
    description: "African American cultural and literary flowering. Writers like Langston Hughes and Zora Neale Hurston celebrated Black culture, identity, and experience during this vibrant period of artistic achievement in Harlem.",
    dateRange: "1918 - 1940",
    countries: "USA (Harlem, NYC)",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "Hold fast to dreams, for if dreams die, life is a broken-winged bird that cannot fly. What happens to a dream deferred? Does it dry up like a raisin in the sun?",
            name: "Langston Hughes",
            designation: "Harlem Renaissance Poet • The Weary Blues & Montage of a Dream Deferred",
            src: "https://hips.hearstapps.com/hmg-prod/images/portrait-of-poet-author-playwright-and-harlem-renaissance-news-photo-1705592117.jpg?crop=0.898xw:0.627xh;0.0867xw,0.0273xh&resize=640:*"
          },
          {
            quote: "There are years that ask questions and years that answer. I have been in Sorrow's kitchen and licked out all the pots. Then you must tell the tale as it was told to me.",
            name: "Zora Neale Hurston",
            designation: "Harlem Renaissance Novelist • Their Eyes Were Watching God",
            src: "https://cdn.britannica.com/33/227033-050-743B4E1A/Zora-Neale-Hurston.jpg"
          },
          {
            quote: "If we must die, let it not be like hogs hunted and penned in an inglorious spot. Like men we'll face the murderous, cowardly pack, pressed to the wall, dying, but fighting back!",
            name: "Claude McKay",
            designation: "Harlem Renaissance Poet • Harlem Shadows & If We Must Die",
            src: "https://upload.wikimedia.org/wikipedia/commons/5/54/Claude_McKay_James_L._Allen_Portrait_Edit.jpg"
          },
          {
            quote: "The problem of the twentieth century is the problem of the color line. One ever feels his twoness—an American, a Negro; two souls, two thoughts, two unreconciled strivings.",
            name: "W.E.B. Du Bois",
            designation: "Harlem Renaissance Scholar • The Souls of Black Folk",
            src: "https://cdn.britannica.com/08/78408-050-4C599E7C/WEB-Du-Bois.jpg"
          }
        ]}
        autoplay={false}
      />
    ),
  },
  {
    title: "Beat Generation",
    description: "Counter-cultural, spontaneous prose and poetry. Beat writers like Jack Kerouac and Allen Ginsberg rejected mainstream American values, experimenting with drugs, Eastern philosophy, and spontaneous creative expression.",
    dateRange: "1950s - 1960s",
    countries: "USA",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "The only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time. We bend our backs to the fire, we don't straighten them.",
            name: "Jack Kerouac",
            designation: "Beat Writer • On the Road & The Dharma Bums",
            src: "https://blogs.library.columbia.edu/rbml/files/2019/10/4673-JackKerouac.jpg"
          },
          {
            quote: "I saw the best minds of my generation destroyed by madness, starving hysterical naked. America I've given you all and now I'm nothing. Holy! Holy! Holy! Holy! Holy! Holy! Holy! Holy! Holy!",
            name: "Allen Ginsberg",
            designation: "Beat Poet • Howl & Kaddish",
            src: "https://www.laphamsquarterly.org/sites/default/files/styles/tall_rectangle_custom_user_small_2x/public/images/contributor/ginsberg_360x450.jpg?itok=wDPhoYrs&timestamp=1421784977"
          },
          {
            quote: "Nothing is true, everything is permitted. Language is a virus from outer space. The face of evil is always the face of total need.",
            name: "William S. Burroughs",
            designation: "Beat Writer • Naked Lunch & Junky",
            src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS-EmZ5WDvPwowbFS-HC3g1bYHvOjELb10bRfckemPHtRmdGV92e727SHM8zMaNbrPPeXV5jGsYjhurX-xZBQjPYbu0eTi2_V889DHrSSQ"
          },
          {
            quote: "We were just goofing around, you know, being young and wild and free. The road must eventually lead to the whole world. Nothing behind me, everything ahead of me, as is ever so on the road.",
            name: "Neal Cassady",
            designation: "Beat Muse • The First Third",
            src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSVnT_8i9K0s7xSNiq0FuhZeINITvkXyYh5Y8YihH-X0T4nMAJSRYB38O2LJFSvmd9YdThPaq9PEoFvmGshz6G-ylwZxL2LoUiz6WVWBXE"
          },
          {
            quote: "We lived life as if it were a work of art, crafting beauty from the raw material of experience. The road was not just a path but a way of being in the world.",
            name: "Carolyn Cassady",
            designation: "Beat Writer • Off the Road & Heart Beat",
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-hRfTRYnow9vEtr28HKrij8Q5PWG6Olx73rfqHNi2DP-YsNP2OvMJBeOb-Sn4yYIP45Pi63fAL4bw0hpz4TkJ06CNbTx4ahfkxud_g_zGFA"
          }
        ]}
        autoplay={false}
      />
    ),
  },
  {
    title: "Civil Rights Era Literature",
    description: "Literature addressing racial injustice and the African American experience during the Civil Rights era. Writers like James Baldwin, Ralph Ellison, and Lorraine Hansberry explored themes of identity, racism, and social justice through powerful realist narratives.",
    dateRange: "1940s - 1970s",
    countries: "USA",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "Not everything that is faced can be changed, but nothing can be changed until it is faced. The most dangerous creation of any society is the man who has nothing to lose.",
            name: "James Baldwin",
            designation: "Civil Rights Writer • Go Tell It on the Mountain & The Fire Next Time",
            src: "https://upload.wikimedia.org/wikipedia/commons/3/37/James_Baldwin_33_Allan_Warren.jpg"
          },
          {
            quote: "I am an invisible man. No, I don't mean a spook like those who haunted Edgar Allan Poe; nor am I one of your Hollywood-movie ectoplasms. I am a man of substance, of flesh and bone, fiber and liquids—and I might even be said to possess a mind.",
            name: "Ralph Ellison",
            designation: "Civil Rights Writer • Invisible Man & Shadow and Act",
            src: "https://www.read.gov/fiction/images/Ellison_1_large.gif"
          },
          {
            quote: "A raisin in the sun. What happens to a dream deferred? Does it dry up like a raisin in the sun? Or fester like a sore—and then run? Never be afraid to sit awhile and think.",
            name: "Lorraine Hansberry",
            designation: "Civil Rights Playwright • A Raisin in the Sun & The Sign in Sidney Brustein's Window",
            src: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQfPMKGx6VbV3LT5uUuEwCabF_RUUsd3RjQj-ikN56cwHjYQlWi1OBxnwUzs8mphfDQBmZUek6YuuYammQ"
          },
          {
            quote: "The artist must bow to the monster of his own imagination. Men can starve from a lack of self-realization as much as they can from a lack of bread.",
            name: "Richard Wright",
            designation: "Civil Rights Writer • Native Son & Black Boy",
            src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ0opwc5rLd077wbqVp7rqKAYHCZo_BlF3_bOUv6pKSo8-mS2OdfUlg7VjQruxTKG9gUJ1x1NWjgKvoGwWZmjZQqfckiUTT7HMLmtJeXaA"
          },
          {
            quote: "There is no greater agony than bearing an untold story inside you. If you don't like something, change it. If you can't change it, change your attitude.",
            name: "Maya Angelou",
            designation: "Civil Rights Writer • I Know Why the Caged Bird Sings & Gather Together in My Name",
            src: "https://s36500.pcdn.co/wp-content/uploads/2014/05/MayaAngelou.jpg"
          }
        ]}
        autoplay={false}
      />
    ),
  },
  {
    title: "Postmodernism",
    dateRange: "21st Century",
    countries: "Global",
    description: "Meta-fiction, pastiche, questioning of grand narratives. Postmodernist writers like Thomas Pynchon and David Foster Wallace challenged traditional storytelling, blending high and low culture while questioning absolute truths.",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "If they can get you asking the wrong questions, they don't have to worry about answers. Entropy is inevitable, but paranoia is optional. The crying of lot 49.",
            name: "Thomas Pynchon",
            designation: "Postmodernist • Gravity's Rainbow & The Crying of Lot 49",
            src: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Thomas_Pynchon%2C_high_school_yearbook_editor%2C_1953.jpg"
          },
          {
            quote: "The really important kind of freedom involves attention and awareness and discipline. Everything I've ever let go of has claw marks on it.",
            name: "David Foster Wallace",
            designation: "Postmodernist • Infinite Jest & Brief Interviews with Hideous Men",
            src: "https://i.pinimg.com/736x/26/e0/f6/26e0f61cda7b8bd54306127b6b435a6c.jpg"
          },
          {
            quote: "The future belongs to crowds. America was and is the immigrant's dream. Every sentence has a truth waiting at the end of it and the writer learns how to know it when he reaches it.",
            name: "Don DeLillo",
            designation: "Postmodernist • White Noise & Underworld",
            src: "https://upload.wikimedia.org/wikipedia/commons/d/de/Don_DeLillo%2C_author.jpg"
          },
          {
            quote: "We often think that when we have completed our study of one we know all about two, because 'two' is 'one and one.' We forget that we still have to make a study of 'and.'",
            name: "George Saunders",
            designation: "Postmodernist • CivilWarLand in Bad Decline & Lincoln in the Bardo",
            src: "https://media.newyorker.com/photos/5f9883532643607f1a1a2354/master/w_2560%2Cc_limit/Treisman-SaundersTWIF.jpg"
          },
          {
            quote: "We are all alone, born alone, die alone, and—in spite of True Romance magazines—we shall all someday look back on our lives and see that, in spite of our company, we were alone the whole way.",
            name: "Hunter S. Thompson",
            designation: "Gonzo Journalist • Fear and Loathing in Las Vegas",
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Hunter_S._Thompson%2C_Las_Vegas_1971.jpg/917px-Hunter_S._Thompson%2C_Las_Vegas_1971.jpg"
          },
          {
            quote: "Everything was beautiful and nothing hurt. So it goes. Here we are, trapped in the amber of the moment. There is no why. We are what we pretend to be, so we must be careful about what we pretend to be.",
            name: "Kurt Vonnegut",
            designation: "Postmodern Novelist • Slaughterhouse-Five & Cat's Cradle",
            src: "https://www.science.org/do/10.1126/science.adf7410/abs/_20221110_on_kurt_vonnegut_portrait.jpg"
          }
        ]}
        autoplay={false}
      />
    ),
  },
  {
    title: "Magical Realism",
    dateRange: "21st Century",
    countries: "Global",
    description: "Fantastical elements in realistic settings. Magic realist writers like Gabriel García Márquez blend magical occurrences with everyday reality, creating works that challenge conventional boundaries between fantasy and realism.",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",
            name: "Gabriel García Márquez",
            designation: "Colombian Magic Realist • One Hundred Years of Solitude & Love in the Time of Cholera",
            src: "https://static01.nyt.com/images/2013/08/01/automobiles/Marquez-Gabriel-adv-obit-slide-LP84/Marquez-Gabriel-adv-obit-slide-LP84-superJumbo-v5.jpg"
          },
          {
            quote: "If you only read the books that everyone else is reading, you can only think what everyone else is thinking. Pain is inevitable. Suffering is optional.",
            name: "Haruki Murakami",
            designation: "Japanese Magic Realist • The Wind-Up Bird Chronicle & Kafka on the Shore",
            src: "https://i.guim.co.uk/img/media/9d0618336a3d4b7ea3e6cec4bb8e781670c140bc/0_50_1943_2427/master/1943.jpg?width=700&quality=85&auto=format&fit=max&s=a987887882b9fa593733f3a63a4a6569"
          },
          {
            quote: "Manuscripts don't burn. Everything will turn out right, the world is built on that. Cowardice is the most terrible of vices. Follow me, reader! Who told you there is no true, faithful, eternal love in this world?",
            name: "Mikhail Bulgakov",
            designation: "Russian Magic Realist • The Master and Margarita & Heart of a Dog",
            src: "https://upload.wikimedia.org/wikipedia/commons/c/c1/%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB-%D0%91%D1%83%D0%BB%D0%B3%D0%B0%D0%BA%D0%BE%D0%B2.jpg"
          }
        ]}
        autoplay={false}
      />
    ),
  },
  {
    title: "Confessional Poetry",
    dateRange: "21st Century",
    countries: "Global",
    description: "Personal, autobiographical verse. Confessional poets like Sylvia Plath and Robert Lowell broke taboos by writing directly about personal trauma, mental illness, and intimate family relationships.",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "My eyes have seen what my hand did. If we're not supposed to dance, why all this music? The light at the end of the tunnel is just the light of an oncoming train.",
            name: "Robert Lowell",
            designation: "Confessional Poet • Life Studies & For the Union Dead",
            src: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Robert-lowell-by-elsa-dorfman.jpg"
          },
          {
            quote: "I am, I am, I am. Out of the ash I rise with my red hair and I eat men like air. Every woman adores a Fascist, the boot in the face, the brute brute heart of a brute like you.",
            name: "Sylvia Plath",
            designation: "Confessional Poet • Ariel & The Bell Jar",
            src: "https://s3-us-east-2.amazonaws.com/cdn-test.poetryfoundation.org/content/images/1e3f27c800fabc4d89607089f91395d77c6ab409.jpeg"
          },
          {
            quote: "Put your ear down close to your soul and listen hard. We are all writing God's poem. I was tired of being a woman, tired of the spoons and the pots, tired of my mouth and my breasts.",
            name: "Anne Sexton",
            designation: "Confessional Poet • To Bedlam and Part Way Back & Live or Die",
            src: "https://i.guim.co.uk/img/media/0c875caa664c4666fedfdbf89ef1397231a772ae/0_237_662_397/master/662.jpg?width=465&dpr=1&s=none&crop=none"
          }
        ]}
        autoplay={false}
      />
    ),
  },
  {
    title: "Postcolonial Literature",
    description: "Works from formerly colonized nations. Postcolonial writers like Chinua Achebe and Salman Rushdie explore themes of cultural identity, displacement, and the legacy of colonialism in newly independent nations.",
    dateRange: "1950s - present",
    countries: "Africa, India, Caribbean, Global South",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "Until the lions have their own historians, the history of the hunt will always glorify the hunter. The white man is very clever. He came quietly and peaceably with his religion. We were amused at his foolishness and allowed him to stay.",
            name: "Chinua Achebe",
            designation: "Nigerian Postcolonial • Things Fall Apart & Arrow of God",
            src: "https://africanarguments.org/wp-content/uploads/2013/03/Chinua_Achebe.jpg"
          },
          {
            quote: "A poet's work is to name the unnameable, to point at frauds, to take sides, start arguments, shape the world, and stop it going to sleep. To be born again, sang Gibreel Farishta tumbling from the heavens, first you have to die.",
            name: "Salman Rushdie",
            designation: "Indian-British Postcolonial • Midnight's Children & The Satanic Verses",
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Salman_Rushdie%2C_2024.jpg/960px-Salman_Rushdie%2C_2024.jpg"
          },
          {
            quote: "The thing you have to understand about us is that we are not a people who are afraid of silence. A small place, a small island, the people of Antigua. But we are real, real, real.",
            name: "Jamaica Kincaid",
            designation: "Antiguan-American Postcolonial • Annie John & A Small Place",
            src: "https://www.theparisreview.org/il/ad14b3f518/large/10.stephaniestill.png"
          },
          {
            quote: "That's the thing about books. They let you travel without moving your feet. We are all, I suppose, burdened with things we remember: images, scents, sounds.",
            name: "Jhumpa Lahiri",
            designation: "Indian-American Postcolonial • Interpreter of Maladies & The Namesake",
            src: "https://news.brown.edu/sites/default/files/article_images/Jhumpa%20Lahiri%20photo.jpg"
          }
        ]}
        autoplay={false}
      />
    ),
  },
  {
    title: "Feminist Literature",
    description: "Women's experiences and gender equality. Feminist writers like Margaret Atwood and Adrienne Rich examine gender roles, women's oppression, and the quest for equality through powerful literary works.",
    dateRange: "1960s - present",
    countries: "USA, Canada, UK, France",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "We were the people who were not in the papers. We lived in the blank white spaces at the edges of print. It gave us more freedom. We lived in the gaps between the stories.",
            name: "Margaret Atwood",
            designation: "Canadian Feminist • The Handmaid's Tale & The Blind Assassin",
            src: "https://cdn-test.poetryfoundation.org/cdn-cgi/image/w=2292,h=1528,q=80/content/images/95e9709a9185078ae2c169f0a7ecff9fa6400e1e.jpeg"
          },
          {
            quote: "The function, the very serious function of racism is distraction. It keeps you from doing your work. It keeps you explaining, over and over again, your reason for being.",
            name: "Toni Morrison",
            designation: "American Feminist • Beloved & Song of Solomon",
            src: "https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/18933788/GettyImages_514704088_header.jpg?quality=90&strip=all&crop=16.827956989247%2C0%2C66.344086021505%2C100&w=2400"
          },
          {
            quote: "One is not born, but rather becomes, a woman. No biological, psychological, or economic fate determines the figure that the human female presents in society.",
            name: "Simone de Beauvoir",
            designation: "French Feminist • The Second Sex & The Ethics of Ambiguity",
            src: "https://www.theparisreview.org/il/a4e07993ad/medium/simone-de-beauvoir-interview.png"
          },
          {
            quote: "There must be those among whom we can sit down and weep and still be counted as warriors. I make up reasons to hope. The most notable fact that our culture imprints on women is the sense of our limits.",
            name: "Adrienne Rich",
            designation: "American Feminist Poet • Diving into the Wreck & Of Woman Born",
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVQy3VyP1gmXxDxjffDXmKxaum3lvCS7O323H2fQ_mB1v59LPnDpKk3s7deFBlJfnvdnFJEbwjLU5rZL9Y1ynLZ1MB4NI59bkucHPA3pE"
          },
          {
            quote: "The creative adult is the child who survived. We are volcanoes. When we women offer our experience as our truth, as human truth, all the maps change.",
            name: "Ursula K. Le Guin",
            designation: "American Feminist Sci-Fi Writer • The Left Hand of Darkness & The Dispossessed",
            src: "https://media.newyorker.com/photos/5a6a04c099adb40acb9a023d/master/w_2560%2Cc_limit/Phillips-Ursula-K-LeGuin.jpg"
          },
          {
            quote: "The most common way people give up their power is by thinking they don't have any. Womanist is to feminist as purple is to lavender.",
            name: "Alice Walker",
            designation: "American Feminist Writer • The Color Purple & In Search of Our Mothers' Gardens",
            src: "https://english.colostate.edu/wp-content/uploads/sites/56/2017/02/alicewalker.jpg"
          }
        ]}
        autoplay={false}
      />
    ),
  },
  {
    title: "21st Century Genre Fiction",
    description: "The elevation of genre fiction to literary respectability. Once dismissed as mere 'pulp,' science fiction, fantasy, and speculative fiction have gained serious critical recognition in the 21st century. Thanks to pioneering efforts by giants like Kurt Vonnegut, J.R.R. Tolkien, and Ursula K. Le Guin, genre fiction is now celebrated for its ability to explore complex themes, social issues, and the human condition through imaginative storytelling. This section celebrates writers who have been influential to their respective genres.",
    dateRange: "2000 - present",
    countries: "Global",
    content: (
      <div className="flex items-center justify-center h-full">
        <div className="text-center p-8">
          <h3 className="text-xl font-semibold text-blue-400 mb-4">Genre Fiction Renaissance</h3>
          <p className="text-slate-300 max-w-md">
            The 21st century has witnessed the transformation of genre fiction from entertainment to art, 
            with writers using speculative elements to examine our world and imagine new possibilities.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Science Fiction",
    dateRange: "21st Century",
    countries: "Global",
    description: "Stories involving futuristic technology, space travel, alternate realities, or scientific speculation. Modern sci-fi explores themes like artificial intelligence, climate change, and biotechnology while maintaining the genre's tradition of examining humanity's relationship with technology.",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "There is nothing new under the sun, but there are new suns. All that you touch you change. All that you change changes you. The only lasting truth is change. God is change.",
            name: "Octavia Butler",
            designation: "Science Fiction Pioneer • Kindred & Parable of the Sower",
            src: "https://www.womenofthehall.org/wp-content/uploads/2022/10/image001.png"
          },
          {
            quote: "The measure of a man is not the fear he sows in his enemies. It is the hope he gives his friends. I would have lived in peace. But my enemies brought me war.",
            name: "Pierce Brown",
            designation: "Science Fiction Author • Red Rising Trilogy",
            src: "https://pbs.twimg.com/profile_images/1125588894668296192/BM4EwZsV_400x400.jpg"
          },
          {
            quote: "Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me.",
            name: "Frank Herbert",
            designation: "Science Fiction Master • Dune Series",
            src: "https://www.historylink.org/Content/Media/Photos/Large/Frank-Herbert-September-27-1982.jpg"
          },
          {
            quote: "What if we were able to communicate with aliens, but we couldn't understand what they were saying? The universe is under no obligation to make sense to you.",
            name: "Ted Chiang",
            designation: "Science Fiction Writer • Stories of Your Life and Others & Exhalation",
            src: "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/2100x1460+0+0/resize/2100x1460!/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F82%2F5c%2Fab9507f14285b40b5ef69965622b%2Fted-chiang-photo-by-alan-berner.JPG"
          },
          {
            quote: "The basic tool for the manipulation of reality is the manipulation of words. If you can control the meaning of words, you can control the people who must use the words. Reality is that which, when you stop believing in it, doesn't go away.",
            name: "Philip K. Dick",
            designation: "Science Fiction Visionary • Do Androids Dream of Electric Sheep? & The Man in the High Castle",
            src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTZszLgqnDvhLFXH-fd3_bynT85H40znIIy8ErhamoLZU1S4eg_m7HeDDSp3eR8FV8ir8b-XGrygQVZlB_CXP1EQCJuY7KYLMqU_VUQAw"
          },
          {
            quote: "The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom. A robot may not injure a human being or, through inaction, allow a human being to come to harm.",
            name: "Isaac Asimov",
            designation: "Science Fiction Master • Foundation Series & I, Robot",
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Isaac.Asimov01.jpg/250px-Isaac.Asimov01.jpg"
          }
        ]}
        autoplay={false}
      />
    ),
  },
  {
    title: "Fantasy",
    dateRange: "21st Century",
    countries: "Global",
    description: "Works featuring magic, mythical creatures, imaginary worlds, or supernatural elements. Contemporary fantasy has expanded beyond traditional medievalism to include urban fantasy, magical realism, and diverse cultural mythologies.",
    content: (
      <AnimatedTestimonials
        testimonials={[
          {
            quote: "Not all those who wander are lost. All we have to decide is what to do with the time that is given us. Even the smallest person can change the course of the future.",
            name: "J.R.R. Tolkien",
            designation: "Fantasy Master • The Lord of the Rings & The Hobbit",
            src: "https://cdn.britannica.com/65/66765-050-63A945A7/JRR-Tolkien.jpg"
          },
          {
            quote: "You can never get a cup of tea large enough or a book long enough to suit me. We are what we believe we are. Courage is not simply one of the virtues, but the form of every virtue at the testing point.",
            name: "C.S. Lewis",
            designation: "Fantasy Author • The Chronicles of Narnia & The Screwtape Letters",
            src: "https://cdn.shopify.com/s/files/1/1185/0798/files/CS-Lewis-7.jpg"
          },
          {
            quote: "The purpose of a storyteller is not to tell you how to think, but to give you questions to think upon. The most important step a man can take. It's not the first one, is it? It's the next one.",
            name: "Brandon Sanderson",
            designation: "Fantasy Writer • Mistborn Series & The Stormlight Archive",
            src: "https://www.brandonsanderson.com/cdn/shop/files/Screenshot_2024-07-26_at_11.59.47_AM.png?v=1722016793&width=480"
          },
          {
            quote: "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten. A book is a dream that you hold in your hands.",
            name: "Neil Gaiman",
            designation: "Fantasy Author • American Gods & The Sandman",
            src: "https://supadu-io.imgix.net/harpercollins-mousecircus/mousecircus-site/neil-gaiman-image-full.jpg"
          },
          {
            quote: "When you play the game of thrones, you win or you die. There is no middle ground. The lone wolf dies, but the pack survives. Winter is coming.",
            name: "George R.R. Martin",
            designation: "Fantasy Author • A Song of Ice and Fire Series",
            src: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcT1MMHio5Za3P8MFiMMz6swyOXMOqGgRdoLS7x2CdxnILlH9A5hc5JRY3pJXHNAbHDIQfPAZDgaYZb7ZU8"
          },
          {
            quote: "It is our choices, Harry, that show what we truly are, far more than our abilities. Happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
            name: "J.K. Rowling",
            designation: "Fantasy Author • Harry Potter Series",
            src: "https://stories.jkrowling.com/wp-content/uploads/2021/09/Shot-B-105_V2_CROP-e1630873059779.jpg"
          },
          {
            quote: "I have never been able to stomach the violence of indifference. War is hell, but indifference is worse. The only way to survive is to become harder than your enemies.",
            name: "R.F. Kuang",
            designation: "Fantasy Author • The Poppy War Trilogy",
            src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ_hOAs23yBfOSSk6uyXqlNW5FDrGYubpER4lmQl5O_OcB4nV0OSeMHf34C2HLWwab3cCFp1J19NeYXU29Wc97e2U5hv49Acgf3nf6KUw"
          }
        ]}
        autoplay={false}
      />
    ),
  },
  {
    title: "Mystery/Detective Fiction",
    dateRange: "21st Century",
    countries: "Global",
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
    title: "Horror & Thriller",
    dateRange: "21st Century",
    countries: "Global",
    description: "Literature designed to frighten, unsettle, or create suspense through supernatural, psychological, or dangerous elements. This combined genre explores social anxieties, psychological trauma, existential dread, and fast-paced narratives involving danger, conspiracy, and modern threats that keep readers on edge.",
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
    dateRange: "21st Century",
    countries: "Global",
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
    title: "Historical Fiction",
    dateRange: "21st Century",
    countries: "Global",
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
    dateRange: "21st Century",
    countries: "Global",
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
  const [activeSection, setActiveSection] = React.useState(0);

  return (
    <main className="min-h-screen relative bg-slate-900">
      {/* TracingBeam positioned fixed on far left - no layout impact */}
      <TracingBeam currentSection={activeSection} totalSections={literaryMovementsContent.length} />

      {/* Sticky Scroll Section - Full Height - unchanged layout */}
      <div className="pt-16 pb-8">
        <StickyScroll
          content={literaryMovementsContent}
          contentClassName="h-[500px] w-[600px]"
          onActiveCardChange={setActiveSection}
        />
      </div>
    </main>
  );
}