import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchCountries,
  selectValues,
  loadMore,
} from '../../features/country/countrySlice';
import Button from '../Button';
import Card from '../Card';
// import Error from '../Error';
function List() {
  const dispatch = useDispatch();
  const url = '/allk';
  useEffect(() => {
    dispatch(fetchCountries(url));
  }, [dispatch, url]);

  const { loading, list } = useSelector(selectValues);
  return (
    <article className="listing">
      <h3>yewin</h3>
      {loading && <p role="alert">loading.....</p>}
      <section className="listing-layout">
        {list?.map((item) => (
          <Card item={item} key={item.area} />
        ))}
        {list.length > 0 && (
          <Button label="Load More" onClick={() => dispatch(loadMore())} />
        )}
      </section>

      {/* {error && <Error error={error} />} */}
    </article>
  );
}

export default List;
