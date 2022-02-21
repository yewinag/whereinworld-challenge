import React from 'react';

import { Footer, Header, List, SearchHeader } from '../components/layouts';
import { useGetCountryAllQuery } from '../services/countryAPI';

function App() {
  const { error, isLoading } = useGetCountryAllQuery();
  return (
    <div>
      <Header />
      <SearchHeader />
      <List />   
      <Footer />                     
      {isLoading ? 'loading' : error.data.message}
    </div>
  );
}

export default App;
