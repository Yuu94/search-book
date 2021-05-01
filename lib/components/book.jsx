import React from 'react';

function Book({title, author, imgUrl}) {
  return (
    <div>
      <label>Title: </label>{title}
    <label>Author: </label>{author}
    <label>Image: </label><img src={imgUrl} />
    </div>
  );
}

export default Book;