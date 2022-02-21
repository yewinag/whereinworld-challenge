import React, { useState } from 'react';

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

export default App;
