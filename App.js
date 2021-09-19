import React, { useState } from "react";
import "./styles.css";

const goodBooks = {
  Classics: [
    {
      name: "Kidnapped",
      author: "Robert Louis Stevenson",
      rating: "4.0/5.0"
    },

    {
      name: "Little Women",
      author: "Louisa May Alcott",
      rating: "4.5/5.0"
    },

    {
      name: "To Kill a Mockingbird",
      author: "Harper Lee",
      rating: "4.5/5.0"
    },
    {
      name: "Oliver Twist",
      author: "Charles Dickens",
      rating: "4.0/5.0"
    },
    {
      name: "The Count of Monte' Cristo",
      author: "Alexandre Dumas",
      rating: "4.0/5.0"
    },
    {
      name: "Pride and Prejudice",
      author: "Jane Austen",
      rating: "4.5/5.0"
    },
    {
      name: "Of Human Bondage",
      author: "W. Somerset Maugham",
      rating: "4.0/5.0"
    }
  ],

  ScienceFiction: [
    {
      name: "Frankenstein",
      author: "Mary Shelly",
      rating: "4.0/5.0"
    },

    {
      name: "The Time Machine",
      author: "H.G Wells",
      rating: "4.0/5.0"
    },
    {
      name: "The Martian",
      author: "Andy Weir",
      rating: "4.0/5.0"
    },
    {
      name: "1984",
      author: "George Orwell",
      rating: "4.5/5.0"
    },
    {
      name: "The Hunger Games (Trilogy)",
      author: "Suzanne Collins",
      rating: "4.5/5.0"
    },
    {
      name: "Dune",
      author: "Frank Herbert",
      rating: "4.5/5.0"
    },
    {
      name: "The Hitchhiker's Guide to the Galaxy",
      author: "Douglas Adams",
      rating: "4.5/5.0"
    }
  ],

  Fantasy: [
    {
      name: "Harry Potter (series)",
      author: "J.K Rowling",
      rating: "4.5/5.0"
    },
    {
      name: "The Lord of the Rings",
      author: "J. R. R. Tolkien",
      rating: "4.5/5.0"
    },
    {
      name: "The Chronicles of Narnia",
      author: "C.S Lewis",
      rating: "4.0/5.0"
    },
    {
      name: "Mary Poppins",
      author: "O.L Travers",
      rating: "4.0/5.0"
    },
    {
      name: "Alice's Adventures in Wonderland",
      author: "Lewis Carrol",
      rating: "4.0/5.0"
    },
    {
      name: "The Once and Future King",
      author: "T.H White",
      rating: "4.0/5.0"
    },
    {
      name: "The Golden Compass",
      author: "Philip Pullman",
      rating: "4.0/5.0"
    },
    {
      name: "Percy Jackson(series)",
      author: "Rick Riordan",
      rating: "4.0/5.0"
    }
  ],

  Crime: [
    {
      name: "One Good Deed",
      author: "David Baldacci",
      rating: "4.5/5.0"
    },
    {
      name: "The Mysterious Affair at Styles",
      author: "Agatha Christie",
      rating: "4.0/5.0"
    },
    {
      name: "The Long Goodbye",
      author: "Raymond Chandler",
      rating: "4.5/5.0"
    },
    {
      name: "The Woman in White",
      author: "Wilkie Collins",
      rating: "4.0/5.0"
    },
    {
      name: "The Hound of Baskervilles",
      author: "Sir Arthur Conan Doyle",
      rating: "4.0/5.0"
    },
    {
      name: "A fatal Inversion",
      author: "Barbara Wine",
      rating: "4.0/5.0"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("ScienceFiction");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1 style={{ color: "cadetblue" }}>Books You Ought to Read</h1>
      <h3>Click on a genre and discover the Emissaries of selected genre</h3>

      <div>
        {Object.keys(goodBooks).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            className={"genreButton"}
          >
            {genre}
          </button>
        ))}
      </div>

      <div>
        <ul>
          {goodBooks[selectedGenre].map((book) => (
            <li key={book.name} className={"booksList"}>
              <div style={{ fontSize: "larger" }}>{book.name}</div>
              <div style={{ fontWeight: "lighter", padding: "0.3rem" }}>
                {book.author}
              </div>
              <div>{book.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
