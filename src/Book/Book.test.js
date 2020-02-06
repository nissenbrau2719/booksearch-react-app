import React from 'react';
import ReactDOM from 'react-dom';
import Book from './Book';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Book
      title="Dracula"
      author="Bram Stoker"
      description="Dude sucks some blood"
      coverImg="http://books.google.com/books/content?id=94uWuAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
      price="$9.99"
      infoLink="http://books.google.com/books?id=94uWuAAACAAJ&dq=dracula&hl=&source=gbs_api"  
    />, div);
  ReactDOM.unmountComponentAtNode(div);
})