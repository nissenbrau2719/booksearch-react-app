import React from 'react';
import Book from '../Book/Book';

function ResultsList(props) {
  const booklist = props.results.map(book => {
    let pricing;
    if(book.saleInfo.saleability === "NOT_FOR_SALE") {
      pricing = "Not for sale";
    } else {
      pricing = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(book.saleInfo.retailPrice.amount); 
    };
    
    return(
       <Book 
      key={book.id}
      title={book.volumeInfo.title}
      author={book.volumeInfo.authors}
      description={book.volumeInfo.description}
      coverImg={book.volumeInfo.imageLinks.thumbnail}
      price={pricing}
    />
    )
     
  });
  
  return (
    <div className="resultsList">
      {booklist}
    </div>
  )
};

export default ResultsList;