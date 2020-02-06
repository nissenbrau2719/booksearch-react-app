import React from 'react';
import './Book.css'

function Book(props) {
  return (
    <a href={props.infoLink} target="_blank">
      <div className="book">
        <h2 className="title">{props.title}</h2>
        <div className="cover">
          <img src={props.coverImg} alt={`cover art for ${props.title} by ${props.author}`} />
        </div>
        <div classname="bookInfo">
          <p>Author: {props.author}</p>
          <p>Price: {props.price}</p>
          <p>{props.description}</p>
        </div>
      </div>
    </a>
  );
}

export default Book;