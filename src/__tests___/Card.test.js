import React from 'react';
import Card from '../components/Card';
import { render, screen } from './test-utils';
const fakeProps = {
  altSpellings: ['ME', 'Crna Gora'],
  area: 13812,
  borders: ['ALB', 'BIH', 'HRV', 'UNK', 'SRB'],
  capital: ['Podgorica'],
  capitalInfo: { latlng: [42.43, 19.27] },
  car: { signs: ['SCG'], side: 'right' },
  cca2: 'ME',
  cca3: 'MNE',
  ccn3: '499',
  cioc: 'MNE',
  coatOfArms: {
    png: 'https://mainfacts.com/media/images/coats_of_arms/me.png',
  },
  continents: ['Europe'],
  currencies: { EUR: { name: 'Euro', symbol: '€' } },
  demonyms: {
    eng: { f: 'Montenegrin', m: 'Montenegrin' },
    fra: { f: 'Monténégrine', m: 'Monténégrin' },
  },
  fifa: 'MNE',
  flag: '🇲🇪',
  flags: {
    png: 'https://flagcdn.com/w320/me.png',
    svg: 'https://flagcdn.com/me.svg',
  },
  gini: { 2016: 38.5 },
  idd: { root: '+3', suffixes: ['82'] },
  independent: true,
  landlocked: false,
  languages: { cnr: 'Montenegrin' },
  latlng: [42.5, 19.3],
  maps: { googleMaps: 'https://goo.gl/maps/4THX1fM7WqANuPbB8' },
  name: { common: 'Montenegro', official: 'Montenegro' },
  population: 621718,
  postalCode: { format: '#####', regex: '^(d{5})$' },
  region: 'Europe',
  startOfWeek: 'monday',
  status: 'officially-assigned',
  subregion: 'Southeast Europe',
};
it('should ', () => {
  render(<Card item={fakeProps} />);
  expect(screen.getByRole('img')).toHaveAttribute('src');
  expect(screen.getByRole('heading')).toHaveTextContent('Montenegro');
});
