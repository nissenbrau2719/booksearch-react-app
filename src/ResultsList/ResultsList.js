import React from 'react';
import Book from '../Book/Book';

function ResultsList(props) {
  const booklist = props.results.map(book => {
    let pricing;
    if(book.saleInfo.saleability === "NOT_FOR_SALE") {
      pricing = "Not for sale"
    } else if(book.saleInfo.saleability === "FREE") {
      pricing = "Free"
    } else {
      pricing = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(book.saleInfo.retailPrice.amount);
    }

    let coverImage;
    if(book.volumeInfo.imageLinks.thumbnail === undefined) {
      coverImage = 'https://media.thefinder.com.sg/2018/03/image-not-found-1024x682.jpg';
    } else {
      coverImage = book.volumeInfo.imageLinks.thumbnail;
    }
    
    let author;
    if(book.volumeInfo.authors === undefined) {
      author = "Not Listed";
    } else {
      author = book.volumeInfo.authors.join(", ");
    }
    return (
      <Book 
        key={book.id}
        title={book.volumeInfo.title}
        author={author}
        description={book.volumeInfo.description}
        coverImg={coverImage}
        price={pricing}
        infoLink={book.volumeInfo.infoLink}
      />
    );  
  });
  
  return (
    <div className="resultsList">
      {booklist}
    </div>
  )
};

export default ResultsList;