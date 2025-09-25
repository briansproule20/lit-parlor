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