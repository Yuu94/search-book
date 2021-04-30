import React from 'react';
import ReactDOM from 'react-dom';

import confetti from 'canvas-confetti';
import {helloWorld} from './hello-world';


function App() {
  helloWorld();

  confetti.create(document.getElementById('canvas'), {
    resize: true,
    useWorker: true,
  })({ particleCount: 200, spread: 200 });

  return (
    <React.Fragment>
      <h1 className="title">Welcome to Snowpack!</h1>
      <button className="button">Walcome!!</button>
    </React.Fragment>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;