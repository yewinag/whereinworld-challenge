import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries, selectValues } from '../features/country/countrySlice';

export const useFetch = (url) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries(url));
  }, [url, dispatch]);
  const { loading, list } = useSelector(selectValues);
  const error = list === undefined && new Error('ဘာဖစ်လဲမသိဘူးဟ');
  return [loading, list, error];
};
