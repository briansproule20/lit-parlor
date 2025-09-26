import React from 'react'
import Link from 'next/link'
import { DotBackground } from '@/components/ui/dot-background'

export default function FullCollectionPage() {
  return (
    <main className="min-h-screen py-8 px-4 pt-24 relative" style={{
      backgroundImage: 'linear-gradient(135deg, #8B4513 0%, #A0522D 25%, #CD853F 50%, #D2691E 75%, #8B4513 100%)',
      backgroundAttachment: 'fixed'
    }}>
      {/* Dot Background */}
      <div className="opacity-30 absolute inset-0 pointer-events-none">
        <DotBackground />
      </div>

      {/* Cozy lighting overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/20 via-transparent to-amber-900/30 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative">
        
        {/* Navigation */}
        <div className="mb-8">
          {/* Removed return to parlor button - now handled in menu bar */}
        </div>

        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-8 rounded-xl shadow-2xl relative bg-white max-w-3xl" style={{
            background: `
              radial-gradient(circle at 25% 20%, rgba(252, 248, 227, 0.95) 0%, transparent 60%),
              radial-gradient(circle at 75% 80%, rgba(245, 222, 179, 0.9) 0%, transparent 60%),
              linear-gradient(135deg, #FEFBF0 0%, #F5DEB3 20%, #DEB887 40%, #F5DEB3 60%, #E6D8B5 80%, #FEFBF0 100%)
            `,
            border: '3px solid #8B4513',
            boxShadow: `
              0 8px 32px rgba(139, 69, 19, 0.4),
              inset 0 2px 8px rgba(255, 255, 255, 0.7),
              inset 0 -2px 4px rgba(139, 69, 19, 0.2)
            `
          }}>
            <h1 className="text-5xl font-bold text-amber-900 mb-4 font-serif">
              The Complete Library
            </h1>
            <p className="text-amber-800 text-xl mb-2 font-serif italic">
              Browse Our Full Selection
            </p>
            <div className="text-amber-700 font-serif">
              "A library is not a luxury but one of the necessities of life." - Henry Ward Beecher
            </div>
          </div>
        </div>

        {/* Available Books Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-amber-100 mb-8 text-center font-serif" style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.6)'
          }}>
            Interactive Learning Modules
          </h2>
          
          {/* Book Grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            
            {/* Moby Dick */}
            <Link href="/mobydick" className="group block">
              <div className="relative transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-6 rounded-lg shadow-xl border-2 border-slate-600 hover:shadow-2xl transition-all group-hover:from-slate-700 group-hover:to-slate-600 min-h-[300px] flex flex-col">
                  <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 p-4 rounded-lg mb-4 relative overflow-hidden">
                    <div className="absolute top-2 right-2 w-6 h-6 bg-blue-300 opacity-20 rounded-full"></div>
                    <div className="absolute bottom-2 left-2 w-4 h-4 bg-slate-300 opacity-20 rounded-full"></div>
                    <h3 className="text-xl font-bold text-amber-100 mb-2 font-serif text-center">MOBY DICK</h3>
                    <p className="text-amber-200 text-center font-serif italic text-sm">or, The Whale</p>
                    <div className="text-center text-amber-300 text-xs font-serif mt-2">Herman Melville</div>
                  </div>
                  <p className="text-amber-100 text-sm leading-relaxed font-serif flex-grow">
                    Journey into the depths of obsession and the sea. Explore themes of fate, nature, and the human condition.
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-green-400 text-xs font-serif">✓ Available</span>
                    <span className="text-amber-400 text-xs font-serif">→ Enter</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Pride and Prejudice */}
            <Link href="/prideandprejudice" className="group block">
              <div className="relative transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="bg-gradient-to-r from-rose-800 to-rose-700 p-6 rounded-lg shadow-xl border-2 border-rose-600 hover:shadow-2xl transition-all group-hover:from-rose-700 group-hover:to-rose-600 min-h-[300px] flex flex-col">
                  <div className="bg-gradient-to-br from-rose-900 via-rose-800 to-pink-900 p-4 rounded-lg mb-4 relative overflow-hidden">
                    <div className="absolute top-2 right-2 w-6 h-6 bg-rose-300 opacity-20 rounded-full"></div>
                    <div className="absolute bottom-2 left-2 w-4 h-4 bg-pink-300 opacity-20 rounded-full"></div>
                    <h3 className="text-lg font-bold text-amber-100 mb-2 font-serif text-center leading-tight">PRIDE & PREJUDICE</h3>
                    <p className="text-amber-200 text-center font-serif italic text-sm">A Novel</p>
                    <div className="text-center text-amber-300 text-xs font-serif mt-2">Jane Austen</div>
                  </div>
                  <p className="text-amber-100 text-sm leading-relaxed font-serif flex-grow">
                    Navigate the social complexities of Georgian England. Explore love, marriage, and first impressions.
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-green-400 text-xs font-serif">✓ Available</span>
                    <span className="text-amber-400 text-xs font-serif">→ Enter</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Things Fall Apart */}
            <Link href="/thingsfallapart" className="group block">
              <div className="relative transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="bg-gradient-to-r from-orange-800 to-orange-700 p-6 rounded-lg shadow-xl border-2 border-orange-600 hover:shadow-2xl transition-all group-hover:from-orange-700 group-hover:to-orange-600 min-h-[300px] flex flex-col">
                  <div className="bg-gradient-to-br from-orange-900 via-orange-800 to-red-900 p-4 rounded-lg mb-4 relative overflow-hidden">
                    <div className="absolute top-2 right-2 w-6 h-6 bg-orange-300 opacity-20 rounded-full"></div>
                    <div className="absolute bottom-2 left-2 w-4 h-4 bg-red-300 opacity-20 rounded-full"></div>
                    <h3 className="text-lg font-bold text-amber-100 mb-2 font-serif text-center leading-tight">THINGS FALL APART</h3>
                    <p className="text-amber-200 text-center font-serif italic text-sm">A Novel</p>
                    <div className="text-center text-amber-300 text-xs font-serif mt-2">Chinua Achebe</div>
                  </div>
                  <p className="text-amber-100 text-sm leading-relaxed font-serif flex-grow">
                    Journey into pre-colonial Nigeria. Witness the clash of cultures and tragic consequences of change.
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-green-400 text-xs font-serif">✓ Available</span>
                    <span className="text-amber-400 text-xs font-serif">→ Enter</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Crime and Punishment */}
            <Link href="/crimeandpunishment" className="group block">
              <div className="relative transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="bg-gradient-to-r from-purple-900 to-purple-800 p-6 rounded-lg shadow-xl border-2 border-purple-700 hover:shadow-2xl transition-all group-hover:from-purple-800 group-hover:to-purple-700 min-h-[300px] flex flex-col">
                  <div className="bg-gradient-to-br from-purple-950 via-purple-900 to-red-950 p-4 rounded-lg mb-4 relative overflow-hidden">
                    <div className="absolute top-2 right-2 w-6 h-6 bg-purple-300 opacity-20 rounded-full"></div>
                    <div className="absolute bottom-2 left-2 w-4 h-4 bg-red-300 opacity-20 rounded-full"></div>
                    <h3 className="text-base font-bold text-amber-100 mb-2 font-serif text-center leading-tight">CRIME & PUNISHMENT</h3>
                    <p className="text-amber-200 text-center font-serif italic text-sm">A Novel</p>
                    <div className="text-center text-amber-300 text-xs font-serif mt-2">Fyodor Dostoevsky</div>
                  </div>
                  <p className="text-amber-100 text-sm leading-relaxed font-serif flex-grow">
                    Delve into the psychology of crime and redemption. Explore guilt, morality, and the human conscience.
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-green-400 text-xs font-serif">✓ Available</span>
                    <span className="text-amber-400 text-xs font-serif">→ Enter</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Their Eyes Were Watching God */}
            <Link href="/theireyeswerewatchinggod" className="group block">
              <div className="relative transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="bg-gradient-to-r from-teal-800 to-teal-700 p-6 rounded-lg shadow-xl border-2 border-teal-600 hover:shadow-2xl transition-all group-hover:from-teal-700 group-hover:to-teal-600 min-h-[300px] flex flex-col">
                  <div className="bg-gradient-to-br from-teal-900 via-teal-800 to-cyan-900 p-4 rounded-lg mb-4 relative overflow-hidden">
                    <div className="absolute top-2 right-2 w-6 h-6 bg-teal-300 opacity-20 rounded-full"></div>
                    <div className="absolute bottom-2 left-2 w-4 h-4 bg-cyan-300 opacity-20 rounded-full"></div>
                    <h3 className="text-xs font-bold text-amber-100 mb-2 font-serif text-center leading-tight">THEIR EYES WERE WATCHING GOD</h3>
                    <p className="text-amber-200 text-center font-serif italic text-sm">A Novel</p>
                    <div className="text-center text-amber-300 text-xs font-serif mt-2">Zora Neale Hurston</div>
                  </div>
                  <p className="text-amber-100 text-sm leading-relaxed font-serif flex-grow">
                    Experience a powerful story of self-discovery and independence in the American South.
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-green-400 text-xs font-serif">✓ Available</span>
                    <span className="text-amber-400 text-xs font-serif">→ Enter</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Animal Farm */}
            <Link href="/animalfarm" className="group block">
              <div className="relative transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                <div className="bg-gradient-to-r from-red-800 to-red-700 p-6 rounded-lg shadow-xl border-2 border-red-600 hover:shadow-2xl transition-all group-hover:from-red-700 group-hover:to-red-600 min-h-[300px] flex flex-col">
                  <div className="bg-gradient-to-br from-red-900 via-red-800 to-orange-900 p-4 rounded-lg mb-4 relative overflow-hidden">
                    <div className="absolute top-2 right-2 w-6 h-6 bg-red-300 opacity-20 rounded-full"></div>
                    <div className="absolute bottom-2 left-2 w-4 h-4 bg-orange-300 opacity-20 rounded-full"></div>
                    <h3 className="text-xl font-bold text-amber-100 mb-2 font-serif text-center">ANIMAL FARM</h3>
                    <p className="text-amber-200 text-center font-serif italic text-sm">Satirical Novella</p>
                    <div className="text-center text-amber-300 text-xs font-serif mt-2">George Orwell</div>
                  </div>
                  <p className="text-amber-100 text-sm leading-relaxed font-serif flex-grow">
                    A powerful allegory of revolution and corruption. Witness how noble ideals can be twisted by power.
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-green-400 text-xs font-serif">✓ Available</span>
                    <span className="text-amber-400 text-xs font-serif">→ Enter</span>
                  </div>
                </div>
              </div>
            </Link>

          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-amber-100 mb-8 text-center font-serif" style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.6)'
          }}>
            Coming Soon
          </h2>
          
          <h3 className="text-xl font-semibold text-amber-200 mb-6 text-center font-serif" style={{
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
          }}>
            Narrative Fiction
          </h3>
          
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
            
            {/* Coming Soon Books */}
            {[
              { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "American Classic" },
              { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Southern Gothic" },
              { title: "1984", author: "George Orwell", genre: "Dystopian Fiction" },
              { title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Coming of Age" },
              { title: "Lord of the Flies", author: "William Golding", genre: "Allegorical Novel" },
              { title: "Of Mice and Men", author: "John Steinbeck", genre: "American Literature" },
              { title: "The Scarlet Letter", author: "Nathaniel Hawthorne", genre: "Historical Fiction" },
              { title: "Brave New World", author: "Aldous Huxley", genre: "Science Fiction" },
              { title: "Slaughterhouse-Five", author: "Kurt Vonnegut", genre: "Science Fiction" },
              { title: "The Alchemist", author: "Paulo Coelho", genre: "Philosophical Novel" },
              { title: "The Metamorphosis", author: "Franz Kafka", genre: "Modernist Fiction" },
              { title: "The Strange Case of Dr. Jekyll and Mr. Hyde", author: "Robert Louis Stevenson", genre: "Gothic Fiction" }
            ].map((book, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-700 to-gray-600 p-4 rounded-lg shadow-lg border-2 border-gray-500 opacity-75">
                <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-3 rounded-lg mb-3 relative overflow-hidden">
                  <div className="absolute top-2 right-2 w-4 h-4 bg-gray-400 opacity-20 rounded-full"></div>
                  <h3 className="text-sm font-bold text-gray-300 mb-1 font-serif text-center leading-tight">{book.title}</h3>
                  <p className="text-gray-400 text-center font-serif italic text-xs">{book.genre}</p>
                  <div className="text-center text-gray-400 text-xs font-serif mt-1">{book.author}</div>
                </div>
                <div className="text-center">
                  <span className="text-gray-400 text-xs font-serif">🔒 Coming Soon</span>
                </div>
              </div>
            ))}
            
          </div>
          
          {/* Drama Section */}
          <h3 className="text-xl font-semibold text-amber-200 mb-6 text-center font-serif mt-12" style={{
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
          }}>
            Drama
          </h3>
          
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-12">
            {/* Drama Books */}
            {[
              { title: "Romeo & Juliet", author: "William Shakespeare", genre: "Tragedy" },
              { title: "Othello", author: "William Shakespeare", genre: "Tragedy" },
              { title: "Death of a Salesman", author: "Arthur Miller", genre: "Modern Tragedy" },
              { title: "The Crucible", author: "Arthur Miller", genre: "Historical Drama" }
            ].map((book, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-700 to-gray-600 p-4 rounded-lg shadow-lg border-2 border-gray-500 opacity-75">
                <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-3 rounded-lg mb-3 relative overflow-hidden">
                  <div className="absolute top-2 right-2 w-4 h-4 bg-gray-400 opacity-20 rounded-full"></div>
                  <h3 className="text-sm font-bold text-gray-300 mb-1 font-serif text-center leading-tight">{book.title}</h3>
                  <p className="text-gray-400 text-center font-serif italic text-xs">{book.genre}</p>
                  <div className="text-center text-gray-400 text-xs font-serif mt-1">{book.author}</div>
                </div>
                <div className="text-center">
                  <span className="text-gray-400 text-xs font-serif">🔒 Coming Soon</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Short Stories Section */}
          <h3 className="text-xl font-semibold text-amber-200 mb-6 text-center font-serif mt-12" style={{
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
          }}>
            Short Stories
          </h3>
          
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-12">
            {/* Short Stories */}
            {[
              { title: "The Yellow Wallpaper", author: "Charlotte Perkins Gilman", genre: "Gothic Fiction" },
              { title: "The Tell-Tale Heart", author: "Edgar Allan Poe", genre: "Gothic Horror" },
              { title: "A Good Man Is Hard to Find", author: "Flannery O'Connor", genre: "Southern Gothic" },
              { title: "2BR02B", author: "Kurt Vonnegut", genre: "Science Fiction" }
            ].map((book, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-700 to-gray-600 p-4 rounded-lg shadow-lg border-2 border-gray-500 opacity-75">
                <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-3 rounded-lg mb-3 relative overflow-hidden">
                  <div className="absolute top-2 right-2 w-4 h-4 bg-gray-400 opacity-20 rounded-full"></div>
                  <h3 className="text-sm font-bold text-gray-300 mb-1 font-serif text-center leading-tight">{book.title}</h3>
                  <p className="text-gray-400 text-center font-serif italic text-xs">{book.genre}</p>
                  <div className="text-center text-gray-400 text-xs font-serif mt-1">{book.author}</div>
                </div>
                <div className="text-center">
                  <span className="text-gray-400 text-xs font-serif">🔒 Coming Soon</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Poetry Section */}
          <h3 className="text-xl font-semibold text-amber-200 mb-6 text-center font-serif" style={{
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
          }}>
            Poetry
          </h3>
          
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-12">
            {/* Poetry */}
            {[
              { title: "In Flanders Fields", author: "John McCrae", genre: "War Poetry" },
              { title: "The Raven", author: "Edgar Allan Poe", genre: "Gothic Poetry" },
              { title: "The Rime of the Ancient Mariner", author: "Samuel Taylor Coleridge", genre: "Romantic Poetry" },
              { title: "Because I Could Not Stop for Death", author: "Emily Dickinson", genre: "Lyric Poetry" }
            ].map((book, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-700 to-gray-600 p-4 rounded-lg shadow-lg border-2 border-gray-500 opacity-75">
                <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-3 rounded-lg mb-3 relative overflow-hidden">
                  <div className="absolute top-2 right-2 w-4 h-4 bg-gray-400 opacity-20 rounded-full"></div>
                  <h3 className="text-sm font-bold text-gray-300 mb-1 font-serif text-center leading-tight">{book.title}</h3>
                  <p className="text-gray-400 text-center font-serif italic text-xs">{book.genre}</p>
                  <div className="text-center text-gray-400 text-xs font-serif mt-1">{book.author}</div>
                </div>
                <div className="text-center">
                  <span className="text-gray-400 text-xs font-serif">🔒 Coming Soon</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Nonfiction Section */}
          <h3 className="text-xl font-semibold text-amber-200 mb-6 text-center font-serif" style={{
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
          }}>
            Nonfiction
          </h3>
          
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-12">
            {/* Nonfiction */}
            {[
              { title: "Narrative of the Life of Frederick Douglass, an American Slave", author: "Frederick Douglass", genre: "Autobiography" },
              { title: "Self-Reliance", author: "Ralph Waldo Emerson", genre: "Essay" },
              { title: "The U.S. Constitution", author: "Founding Fathers", genre: "Legal Document" },
              { title: "Letter from Birmingham Jail", author: "Martin Luther King Jr.", genre: "Political Essay" }
            ].map((book, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-700 to-gray-600 p-4 rounded-lg shadow-lg border-2 border-gray-500 opacity-75">
                <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-3 rounded-lg mb-3 relative overflow-hidden">
                  <div className="absolute top-2 right-2 w-4 h-4 bg-gray-400 opacity-20 rounded-full"></div>
                  <h3 className="text-sm font-bold text-gray-300 mb-1 font-serif text-center leading-tight">{book.title}</h3>
                  <p className="text-gray-400 text-center font-serif italic text-xs">{book.genre}</p>
                  <div className="text-center text-gray-400 text-xs font-serif mt-1">{book.author}</div>
                </div>
                <div className="text-center">
                  <span className="text-gray-400 text-xs font-serif">🔒 Coming Soon</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Speeches Section */}
          <h3 className="text-xl font-semibold text-amber-200 mb-6 text-center font-serif" style={{
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
          }}>
            Speeches
          </h3>
          
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-12">
            {/* Speeches */}
            {[
              { title: "We Shall Fight on the Beaches", author: "Winston Churchill", genre: "War Speech" },
              { title: "Gettysburg Address", author: "Abraham Lincoln", genre: "Memorial Speech" },
              { title: "George Washington's Farewell Address", author: "George Washington", genre: "Political Speech" },
              { title: "Ain't I a Woman?", author: "Sojourner Truth", genre: "Women's Rights Speech" }
            ].map((book, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-700 to-gray-600 p-4 rounded-lg shadow-lg border-2 border-gray-500 opacity-75">
                <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-3 rounded-lg mb-3 relative overflow-hidden">
                  <div className="absolute top-2 right-2 w-4 h-4 bg-gray-400 opacity-20 rounded-full"></div>
                  <h3 className="text-sm font-bold text-gray-300 mb-1 font-serif text-center leading-tight">{book.title}</h3>
                  <p className="text-gray-400 text-center font-serif italic text-xs">{book.genre}</p>
                  <div className="text-center text-gray-400 text-xs font-serif mt-1">{book.author}</div>
                </div>
                <div className="text-center">
                  <span className="text-gray-400 text-xs font-serif">🔒 Coming Soon</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Media Forms Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-amber-100 mb-8 text-center font-serif" style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.6)'
          }}>
            Future Expansions
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-amber-800 to-amber-700 p-8 rounded-xl shadow-2xl border-2 border-amber-600 relative overflow-hidden">
              <div className="absolute top-4 right-4 w-8 h-8 bg-amber-300 opacity-20 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-amber-200 opacity-20 rounded-full"></div>
              
              <h3 className="text-2xl font-bold text-amber-100 mb-4 font-serif text-center">
                Exploring New Narrative Forms
              </h3>
              
              <p className="text-amber-200 text-lg leading-relaxed font-serif mb-6 text-center">
                We're considering expanding our collection to include other powerful forms of storytelling:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">🎵</div>
                  <h4 className="text-amber-100 font-bold font-serif mb-2">Music</h4>
                  <p className="text-amber-300 text-sm font-serif">Classical compositions, folk ballads, and protest songs that tell stories through melody and lyrics</p>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl mb-2">🎬</div>
                  <h4 className="text-amber-100 font-bold font-serif mb-2">Films</h4>
                  <p className="text-amber-300 text-sm font-serif">Cinematic masterpieces that explore themes of human nature, society, and the human condition</p>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl mb-2">📺</div>
                  <h4 className="text-amber-100 font-bold font-serif mb-2">TV Series</h4>
                  <p className="text-amber-300 text-sm font-serif">Serial storytelling that develops complex characters and themes over multiple episodes</p>
                </div>
              </div>
              
              <div className="text-center mt-6">
                <span className="text-amber-300 text-sm font-serif italic">
                  "The future of storytelling is boundless..."
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Return to Parlor */}
        <div className="text-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-amber-800 hover:text-amber-900 font-bold text-lg px-8 py-4 bg-amber-50/90 rounded-lg border-2 border-amber-600 shadow-md hover:shadow-lg transition-all"
          >
            🏠 Return to Literary Parlor
          </Link>
        </div>

      </div>
    </main>
  )
} 