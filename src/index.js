import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [first, setfirst] = useState(0);
  return (
    <div>
      render App
      <button type="button" onClick={() => setfirst(first + 1)}>
        onlick
      </button>
      <p>{first}</p>
    </div>
  );
}
ReactDOM.render(<App />, document.querySelector('#root'));
