import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchCountries,
  selectValues,
  loadMore,
} from '../../features/country/countrySlice';
import Button from '../Button';
import Card from '../Card';
import Error from '../Error';

function List() {
  const dispatch = useDispatch();
  const url = '/all';
  useEffect(() => {
    dispatch(fetchCountries(url));
  }, [dispatch, url]);

  const { loading, list, error } = useSelector(selectValues);
  return (
    <article className="listing">
      {loading && <p role="alert">loading.....</p>}
      <section role="list" className="listing-layout">
        {list.map((item) => (
          <Card item={item} key={item.area} />
        ))}
        {list.length > 0 && (
          <Button
            role="button"
            ariaexpanded="true"
            label="Load More"
            onClick={() => dispatch(loadMore())}
          />
        )}
      </section>
      {error && <Error error={error} />}
    </article>
  );
}

export default List;
