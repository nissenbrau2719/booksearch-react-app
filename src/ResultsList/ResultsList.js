import React from 'react';
import Book from '../Book/Book';

function ResultsList(props) {
  const booklist = props.results.map(book => {
    const pricing = book.saleInfo.saleability === "NOT_FOR_SALE" 
      ? "Not for sale"
      : new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(book.saleInfo.retailPrice.amount);
    
    let coverImage;
    if(book.volumeInfo.imageLinks.thumbnail === undefined) {
      coverImage = 'https://media.thefinder.com.sg/2018/03/image-not-found-1024x682.jpg';
    } else {
      coverImage = book.volumeInfo.imageLinks.thumbnail;
    }
    
    return (
      <Book 
        key={book.id}
        title={book.volumeInfo.title}
        author={book.volumeInfo.authors}
        description={book.volumeInfo.description}
        coverImg={coverImage}
        price={pricing}
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