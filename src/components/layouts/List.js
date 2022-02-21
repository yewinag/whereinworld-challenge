import React from 'react';
import { useGetCountryAllQuery } from '../../services/countryAPI';
import Card from '../Card';
import Error from '../Error';

function List() {
  const { data, error, isLoading } = useGetCountryAllQuery();

  const sliceData = data !== undefined ? data.slice(0, 8) : [];
  return (
    <article>
      {isLoading && <p>loading.....</p>}
      {sliceData.map((item) => (
        <Card item={item} key={item.area} />
      ))}
      {error && <Error error={error} />}
    </article>
  );
}

export default List;
