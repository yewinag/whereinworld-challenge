import React from 'react';
import { useGetCountryAllQuery } from '../../services/countryAPI';
import Card from '../Card';
import Error from '../Error';

function List() {
  const { data, error, isLoading } = useGetCountryAllQuery();

  const sliceData = data !== undefined ? data.slice(0, 8) : [];
  return (
    <article className="listing">
      {isLoading && <p>loading.....</p>}
      <section className="listing-layout">
        {sliceData.map((item) => (
          <Card item={item} key={item.area} />
        ))}
        {/* 
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
      </section>

      {error && <Error error={error} />}
    </article>
  );
}

export default List;
