"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export default function ThreeDMarqueeDemo() {
  const books = [
    {
      id: "1",
      title: "Moby-Dick",
      author: "Herman Melville",
      coverImage: "/images/ahab.png",
      description: "A classic tale of obsession and the hunt for the white whale."
    },
    {
      id: "2",
      title: "Pride and Prejudice",
      author: "Jane Austen",
      coverImage: "/images/chapter2.png",
      description: "A romantic comedy of manners set in Georgian-era England."
    },
    {
      id: "3",
      title: "Animal Farm",
      author: "George Orwell",
      coverImage: "/images/delight.png",
      description: "An allegorical novella about the Russian Revolution."
    },
    {
      id: "4",
      title: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      coverImage: "/images/coffin.png",
      description: "A psychological thriller exploring guilt and redemption."
    },
    {
      id: "5",
      title: "Their Eyes Were Watching God",
      author: "Zora Neale Hurston",
      coverImage: "/images/elijah.png",
      description: "A powerful story of self-discovery and love."
    },
    {
      id: "6",
      title: "Things Fall Apart",
      author: "Chinua Achebe",
      coverImage: "/images/pequod.png",
      description: "A masterpiece of African literature about cultural collision."
    },
    {
      id: "7",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      coverImage: "/images/quarterdeck.png",
      description: "A tragic love story set in the Jazz Age."
    },
    {
      id: "8",
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      coverImage: "/images/rope-border.png",
      description: "A powerful story about racial injustice and growing up."
    },
    {
      id: "9",
      title: "1984",
      author: "George Orwell",
      coverImage: "/images/ship-storm.png",
      description: "A dystopian novel about totalitarian surveillance."
    },
    {
      id: "10",
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      coverImage: "/images/starbuck.png",
      description: "A coming-of-age story about teenage alienation."
    },
    {
      id: "11",
      title: "Lord of the Flies",
      author: "William Golding",
      coverImage: "/images/survival.png",
      description: "A dark allegory about human nature and civilization."
    },
    {
      id: "12",
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      coverImage: "/images/thechase.png",
      description: "An epic fantasy adventure about a hobbit's journey."
    },
    {
      id: "13",
      title: "Brave New World",
      author: "Aldous Huxley",
      coverImage: "/images/therachel.png",
      description: "A dystopian novel about genetic engineering and social control."
    },
    {
      id: "14",
      title: "The Alchemist",
      author: "Paulo Coelho",
      coverImage: "/images/top-sign.png",
      description: "A philosophical novel about following one's dreams."
    },
    {
      id: "15",
      title: "The Kite Runner",
      author: "Khaled Hosseini",
      coverImage: "/images/tryworks.png",
      description: "A powerful story of friendship and redemption in Afghanistan."
    },
    {
      id: "16",
      title: "The Book Thief",
      author: "Markus Zusak",
      coverImage: "/images/whalemanchapel.png",
      description: "A story of a girl who steals books in Nazi Germany."
    },
    {
      id: "17",
      title: "The Road",
      author: "Cormac McCarthy",
      coverImage: "/images/wood-texture.jpg",
      description: "A post-apocalyptic novel about a father and son's journey."
    },
    {
      id: "18",
      title: "Life of Pi",
      author: "Yann Martel",
      coverImage: "/images/harbor-ambience.mp3",
      description: "A philosophical adventure story about survival and faith."
    },
    {
      id: "19",
      title: "The Handmaid's Tale",
      author: "Margaret Atwood",
      coverImage: "/images/ahab.png",
      description: "A dystopian novel about gender oppression and resistance."
    },
    {
      id: "20",
      title: "Beloved",
      author: "Toni Morrison",
      coverImage: "/images/chapter2.png",
      description: "A haunting story about slavery and its psychological legacy."
    },
    {
      id: "21",
      title: "The Color Purple",
      author: "Alice Walker",
      coverImage: "/images/delight.png",
      description: "An epistolary novel about African American women's struggles."
    },
    {
      id: "22",
      title: "One Hundred Years of Solitude",
      author: "Gabriel García Márquez",
      coverImage: "/images/coffin.png",
      description: "A magical realist novel about the Buendía family."
    },
    {
      id: "23",
      title: "The Bell Jar",
      author: "Sylvia Plath",
      coverImage: "/images/elijah.png",
      description: "A semi-autobiographical novel about mental illness."
    },
    {
      id: "24",
      title: "The Stranger",
      author: "Albert Camus",
      coverImage: "/images/pequod.png",
      description: "An existentialist novel about alienation and absurdity."
    }
  ];

  return (
    <div className="mx-auto my-10 max-w-7xl rounded-3xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
      <ThreeDMarquee books={books} />
    </div>
  );
} 