import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

const exampleResults = [
  {
    kind: "books#volume",
    id: "GxXGDwAAQBAJ",
    etag: "Vci4Shquv4w",
    selfLink: "https://www.googleapis.com/books/v1/volumes/GxXGDwAAQBAJ",
    volumeInfo: {
      title: "Floret Farm's A Year in Flowers",
      subtitle: "Designing Gorgeous Arrangements for Every Season",
      authors: ["Erin Benzakein"],
      publisher: "Chronicle Books",
      publishedDate: "2020-02-11",
      description:
        "Learn how to buy, style, and present seasonal flower arrangements for every occasion. With sections on tools, flower care, and design techniques, Floret Farm's A Year in Flowers presents all the secrets to arranging garden-fresh bouquets. Featuring expert advice from Erin Benzakein, world-renowned flower farmer, floral designer, and bestselling author of Floret Farm: Cut Flower Garden, this book is a gorgeous and comprehensive guide to everything you need to make your own incredible arrangements all year long, whether harvesting flowers from the backyard or shopping for blooms at the market. • Includes an A–Z flower guide with photos and care tips for more than 200 varieties. • Simple-to-follow advice on flower care, material selection, and essential design techniques • More than 25 how-to projects, including magnificent centerpieces, infinitely giftable posies, festive wreaths, and breathtaking bridal bouquets Floret Farm's A Year in Flowers offers advice on every phase of working with cut flowers—including gardening, buying, caring for, and arranging fresh flowers. Brimming with indispensable tips and hundreds of vibrant photographs, this book is an invitation to live a flower-filled life and perfect for anyone who loves flowers. • The definitive guide to flower arranging from the biggest star in the farm-to-centerpiece movement • Perfect for flower lovers, avid and novice gardeners, floral designers, wedding planners, florists, small farmers, stylists, designers, crafters, and those passionate about the local floral movement • For those who loved Floret Farm's Cut Flower Garden by Erin Benzakein, The Flower Recipe Book by Alethea Harampolis, Seasonal Flower Arranging by Ariella Chezar, and The Flower Chef by Carly Cylinder",
      industryIdentifiers: [
        {
          type: "ISBN_13",
          identifier: "9781452173054"
        },
        {
          type: "ISBN_10",
          identifier: "1452173052"
        }
      ],
      readingModes: {
        text: true,
        image: true
      },
      pageCount: 304,
      printType: "BOOK",
      categories: ["Crafts & Hobbies"],
      maturityRating: "NOT_MATURE",
      allowAnonLogging: false,
      contentVersion: "0.2.2.0.preview.3",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false
      },
      imageLinks: {
        smallThumbnail:
          "http://books.google.com/books/content?id=GxXGDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=GxXGDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      },
      language: "en",
      previewLink:
        "http://books.google.com/books?id=GxXGDwAAQBAJ&printsec=frontcover&dq=flowers&hl=&cd=1&source=gbs_api",
      infoLink:
        "http://books.google.com/books?id=GxXGDwAAQBAJ&dq=flowers&hl=&source=gbs_api",
      canonicalVolumeLink:
        "https://books.google.com/books/about/Floret_Farm_s_A_Year_in_Flowers.html?hl=&id=GxXGDwAAQBAJ"
    },
    saleInfo: {
      country: "US",
      saleability: "NOT_FOR_SALE",
      isEbook: false
    },
    accessInfo: {
      country: "US",
      viewability: "PARTIAL",
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
      epub: {
        isAvailable: true,
        acsTokenLink:
          "http://books.google.com/books/download/Floret_Farm_s_A_Year_in_Flowers-sample-epub.acsm?id=GxXGDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
      },
      pdf: {
        isAvailable: true,
        acsTokenLink:
          "http://books.google.com/books/download/Floret_Farm_s_A_Year_in_Flowers-sample-pdf.acsm?id=GxXGDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
      },
      webReaderLink:
        "http://play.google.com/books/reader?id=GxXGDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
      accessViewStatus: "SAMPLE",
      quoteSharingAllowed: false
    },
    searchInfo: {
      textSnippet:
        "Featuring expert advice from Erin Benzakein, world-renowned flower farmer, floral designer, and bestselling author of Floret Farm: Cut Flower Garden, this book is a gorgeous and comprehensive guide to everything you need to make your own ..."
    }
  },
  {
    kind: "books#volume",
    id: "RJxWIQOvoZUC",
    etag: "jJNmqD/dC3k",
    selfLink: "https://www.googleapis.com/books/v1/volumes/RJxWIQOvoZUC",
    volumeInfo: {
      title: "Flowers",
      authors: ["Gail Saunders-Smith"],
      publisher: "Capstone",
      publishedDate: "1998",
      description:
        "Simple text and photographs depict the parts of flowers and their pollination.",
      industryIdentifiers: [
        {
          type: "ISBN_10",
          identifier: "1560657693"
        },
        {
          type: "ISBN_13",
          identifier: "9781560657699"
        }
      ],
      readingModes: {
        text: false,
        image: true
      },
      pageCount: 24,
      printType: "BOOK",
      categories: ["Juvenile Nonfiction"],
      maturityRating: "NOT_MATURE",
      allowAnonLogging: false,
      contentVersion: "0.3.1.0.preview.1",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false
      },
      imageLinks: {
        smallThumbnail:
          "http://books.google.com/books/content?id=RJxWIQOvoZUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=RJxWIQOvoZUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      },
      language: "en",
      previewLink:
        "http://books.google.com/books?id=RJxWIQOvoZUC&printsec=frontcover&dq=flowers&hl=&cd=2&source=gbs_api",
      infoLink:
        "http://books.google.com/books?id=RJxWIQOvoZUC&dq=flowers&hl=&source=gbs_api",
      canonicalVolumeLink:
        "https://books.google.com/books/about/Flowers.html?hl=&id=RJxWIQOvoZUC"
    },
    saleInfo: {
      country: "US",
      saleability: "NOT_FOR_SALE",
      isEbook: false
    },
    accessInfo: {
      country: "US",
      viewability: "PARTIAL",
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: false
      },
      pdf: {
        isAvailable: false
      },
      webReaderLink:
        "http://play.google.com/books/reader?id=RJxWIQOvoZUC&hl=&printsec=frontcover&source=gbs_api",
      accessViewStatus: "SAMPLE",
      quoteSharingAllowed: false
    },
    searchInfo: {
      textSnippet:
        "Simple text and photographs depict the parts of flowers and their pollination."
    }
  },
  {
    kind: "books#volume",
    id: "A3WHDwAAQBAJ",
    etag: "lCXxgzuDuZw",
    selfLink: "https://www.googleapis.com/books/v1/volumes/A3WHDwAAQBAJ",
    volumeInfo: {
      title: "On Flowers",
      subtitle: "Lessons from an Accidental Florist",
      authors: ["Amy Merrick"],
      publisher: "Artisan Books",
      publishedDate: "2019-10-15",
      description:
        "A singular, personal celebration of the beauty and possibilities of nature Amy Merrick is a rare and special kind of artist who uses flowers to help us see the familiar in a completely new way. Her gift is to revel in the unexpected—like a sunny spring arrangement housed in a paper coffee cup—and to overturn preconceptions, whether she’s transforming a bouquet of supermarket carnations into a breathtaking centerpiece or elevating wild and weedy blooms foraged from city sidewalks. She uses the beauty that is waiting to be discovered all around us—in leaves, branches, seedpods, a fallen blossom—to tell a story of time and place. Merrick begins On Flowers with a primer containing all her hard-won secrets on the art of flower arranging, from selecting materials to mastering pleasing proportions. Then she brings readers along on her journey, with observations on flowers in New York City and at her family’s summer home in rural New Hampshire, working on a flower farm off the coast of Washington State, and studying ikebana in a jewel-box flower shop in Kyoto. We learn how to send flowers like a florist, and how to arrange them like a farm girl. We discover the poignancy in humble wildflowers, and also celebrate the luxury of fragrant blousy blooms. Collected here is an anthology of floral inspiration, a love letter to nature by an exceptional, accidental florist.",
      industryIdentifiers: [
        {
          type: "ISBN_13",
          identifier: "9781579659493"
        },
        {
          type: "ISBN_10",
          identifier: "1579659497"
        }
      ],
      readingModes: {
        text: true,
        image: true
      },
      pageCount: 240,
      printType: "BOOK",
      categories: ["Crafts & Hobbies"],
      maturityRating: "NOT_MATURE",
      allowAnonLogging: false,
      contentVersion: "1.2.1.0.preview.3",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false
      },
      imageLinks: {
        smallThumbnail:
          "http://books.google.com/books/content?id=A3WHDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=A3WHDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      },
      language: "en",
      previewLink:
        "http://books.google.com/books?id=A3WHDwAAQBAJ&printsec=frontcover&dq=flowers&hl=&cd=3&source=gbs_api",
      infoLink:
        "https://play.google.com/store/books/details?id=A3WHDwAAQBAJ&source=gbs_api",
      canonicalVolumeLink:
        "https://play.google.com/store/books/details?id=A3WHDwAAQBAJ"
    },
    saleInfo: {
      country: "US",
      saleability: "FOR_SALE",
      isEbook: true,
      listPrice: {
        amount: 19.95,
        currencyCode: "USD"
      },
      retailPrice: {
        amount: 9.99,
        currencyCode: "USD"
      },
      buyLink:
        "https://play.google.com/store/books/details?id=A3WHDwAAQBAJ&rdid=book-A3WHDwAAQBAJ&rdot=1&source=gbs_api",
      offers: [
        {
          finskyOfferType: 1,
          listPrice: {
            amountInMicros: 19950000,
            currencyCode: "USD"
          },
          retailPrice: {
            amountInMicros: 9990000,
            currencyCode: "USD"
          },
          giftable: true
        }
      ]
    },
    accessInfo: {
      country: "US",
      viewability: "PARTIAL",
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
      epub: {
        isAvailable: true,
        acsTokenLink:
          "http://books.google.com/books/download/On_Flowers-sample-epub.acsm?id=A3WHDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
      },
      pdf: {
        isAvailable: true,
        acsTokenLink:
          "http://books.google.com/books/download/On_Flowers-sample-pdf.acsm?id=A3WHDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
      },
      webReaderLink:
        "http://play.google.com/books/reader?id=A3WHDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
      accessViewStatus: "SAMPLE",
      quoteSharingAllowed: false
    },
    searchInfo: {
      textSnippet:
        "We discover the poignancy in humble wildflowers, and also celebrate the luxury of fragrant blousy blooms. Collected here is an anthology of floral inspiration, a love letter to nature by an exceptional, accidental florist."
    }
  }
];

ReactDOM.render(
  <App exampleResults={exampleResults} />,
  document.getElementById("root")
);
