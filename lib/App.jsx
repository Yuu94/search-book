import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Label from './components/label';
import Input from './components/input';
import Book from './components/book';
import isbnChecker from './util/isbnChecker';
import parser from './util/responseParser';


function App() {
  const [value, setValue] = useState('');
  const [isbn, setIsbn]   = useState('');
  const [book, setBook]   = useState();

  useEffect(() => {
    if(isbn) {
      axios.get('https://api.openbd.jp/v1/get',
        {params: {isbn: isbn}}
      )
      .then((res) => {
        const {title, authors, imgUrl} = parser(res);
        setBook(<Book title={title} authors={authors} imgUrl={imgUrl} />);
      });
    }
  }, [isbn]);

  function inputHandler(e) {
    const val = e.target.value;

    if(!(val.length >= 14)) {
      setValue(val);
      setBook();
      setIsbn('');
    }

    if(val.length === 10 || val.length === 13) {
      if (isbnChecker(val)) {
        setIsbn(val);
      };
    }
  }

  return (
    <div className='field is-horizontal'>
      <Label>ISBN</Label>
      <Input value={value} handler={inputHandler}/>
      {book}
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;