import React from 'react';
import { Footer, Header, List, SearchHeader } from '../components/layouts';

function App() {
  return (
    <div className="app">
      <Header />
      <SearchHeader />
      <List />   
      <Footer />                     
    </div>
  );
}

export default App;
