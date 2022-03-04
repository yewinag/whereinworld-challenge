import React from 'react';
import { Footer, Header, List, SearchHeader } from '../components/layouts';
import TestLayout from '../components/layouts/TestLayout';

function App() {
  return (
    <div className="app">
      <Header />
      <SearchHeader />
      <TestLayout />
      <List />   
      <Footer />                     
    </div>
  );
}

export default App;
