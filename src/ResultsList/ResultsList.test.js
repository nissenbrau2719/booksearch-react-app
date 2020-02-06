import React from "react";
import ReactDOM from "react-dom";
import ResultsList from "./ResultsList";

const results = [
  {
    kind: "books#volume",
    id: "8xliPgAACAAJ",
    etag: "Bcc+hjgPzuA",
    selfLink: "https://www.googleapis.com/books/v1/volumes/8xliPgAACAAJ",
    volumeInfo: {
      title: "Dracula",
      authors: ["Stephanie Spinner"],
      publisher: "Random House Books for Young Readers",
      publishedDate: "1982",
      description:
        "Having discovered the double identity of the wealthy Transylvanian nobleman, Count Dracula, a small group of people vow to rid the world of the evil vampire.",
      industryIdentifiers: [
        {
          type: "ISBN_10",
          identifier: "0394948289"
        },
        {
          type: "ISBN_13",
          identifier: "9780394948287"
        }
      ],
      readingModes: {
        text: false,
        image: false
      },
      pageCount: 94,
      printType: "BOOK",
      categories: ["Dracula, Count (Fictitious character)"],
      averageRating: 5,
      ratingsCount: 1,
      maturityRating: "NOT_MATURE",
      allowAnonLogging: false,
      contentVersion: "preview-1.0.0",
      language: "en",
      previewLink:
        "http://books.google.com/books?id=8xliPgAACAAJ&dq=dracula&hl=&cd=1&source=gbs_api",
      infoLink:
        "http://books.google.com/books?id=8xliPgAACAAJ&dq=dracula&hl=&source=gbs_api",
      canonicalVolumeLink:
        "https://books.google.com/books/about/Dracula.html?hl=&id=8xliPgAACAAJ"
    },
    saleInfo: {
      country: "US",
      saleability: "NOT_FOR_SALE",
      isEbook: false
    },
    accessInfo: {
      country: "US",
      viewability: "NO_PAGES",
      embeddable: false,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: false
      },
      pdf: {
        isAvailable: false
      },
      webReaderLink:
        "http://play.google.com/books/reader?id=8xliPgAACAAJ&hl=&printsec=frontcover&source=gbs_api",
      accessViewStatus: "NONE",
      quoteSharingAllowed: false
    },
    searchInfo: {
      textSnippet:
        "Wordsworth Classics covers a huge list of beloved works of literature in English and translations. This growing series is rigorously updated, with scholarly introductions and notes added to new titles."
    }
  },
  {
    kind: "books#volume",
    id: "94uWuAAACAAJ",
    etag: "dWs5qG8+02U",
    selfLink: "https://www.googleapis.com/books/v1/volumes/94uWuAAACAAJ",
    volumeInfo: {
      title: "Dracula",
      authors: ["Bram Stoker"],
      publishedDate: "2010-02-01",
      industryIdentifiers: [
        {
          type: "ISBN_10",
          identifier: "1616000716"
        },
        {
          type: "ISBN_13",
          identifier: "9781616000714"
        }
      ],
      readingModes: {
        text: false,
        image: false
      },
      printType: "BOOK",
      averageRating: 3.5,
      ratingsCount: 344,
      maturityRating: "NOT_MATURE",
      allowAnonLogging: false,
      contentVersion: "preview-1.0.0",
      imageLinks: {
        smallThumbnail:
          "http://books.google.com/books/content?id=94uWuAAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=94uWuAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
      },
      language: "en",
      previewLink:
        "http://books.google.com/books?id=94uWuAAACAAJ&dq=dracula&hl=&cd=2&source=gbs_api",
      infoLink:
        "http://books.google.com/books?id=94uWuAAACAAJ&dq=dracula&hl=&source=gbs_api",
      canonicalVolumeLink:
        "https://books.google.com/books/about/Dracula.html?hl=&id=94uWuAAACAAJ"
    },
    saleInfo: {
      country: "US",
      saleability: "NOT_FOR_SALE",
      isEbook: false
    },
    accessInfo: {
      country: "US",
      viewability: "NO_PAGES",
      embeddable: false,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: false
      },
      pdf: {
        isAvailable: false
      },
      webReaderLink:
        "http://play.google.com/books/reader?id=94uWuAAACAAJ&hl=&printsec=frontcover&source=gbs_api",
      accessViewStatus: "NONE",
      quoteSharingAllowed: false
    }
  }
];

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ResultsList results={results} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
