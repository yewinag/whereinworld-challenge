import { API } from '../../config/constants';
// import 'babel-polyfill';

const getApiUrl = (path) => `${API}${path}`;

export const fetchCountry = async (path = '') => {
  const res = await fetch(getApiUrl(path));
  if (!res.ok) {
    const error = new Error(`An error occurred while fetching the data.`);

    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export const paginateHelper = (data, start = 0, end = 8) =>
  data.slice(start, end);
