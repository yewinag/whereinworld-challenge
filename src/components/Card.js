import React from 'react';

// const data = {
//   name: {
//     common: 'Montenegro',
//     official: 'Montenegro',
//     nativeName: { cnr: { official: 'Црна Гора', common: 'Црна Гора' } },
//   },
//   tld: ['.me'],
//   cca2: 'ME',
//   ccn3: '499',
//   cca3: 'MNE',
//   cioc: 'MNE',
//   independent: true,
//   status: 'officially-assigned',
//   unMember: true,
//   currencies: { EUR: { name: 'Euro', symbol: '€' } },
//   idd: { root: '+3', suffixes: ['82'] },
//   capital: ['Podgorica'],
//   altSpellings: ['ME', 'Crna Gora'],
//   region: 'Europe',
//   subregion: 'Southeast Europe',
//   languages: { cnr: 'Montenegrin' },
//   translations: {
//     ara: { official: 'الجبل الاسود', common: 'الجبل الاسود' },
//     ces: { official: 'Černá Hora', common: 'Černá Hora' },
//     cym: { official: 'Montenegro', common: 'Montenegro' },
//     deu: { official: 'Montenegro', common: 'Montenegro' },
//     est: { official: 'Montenegro', common: 'Montenegro' },
//     fin: { official: 'Montenegro', common: 'Montenegro' },
//     fra: { official: 'Monténégro', common: 'Monténégro' },
//     hrv: { official: 'Crna Gora', common: 'Crna Gora' },
//     hun: { official: 'Montenegró', common: 'Montenegró' },
//     ita: { official: 'Montenegro', common: 'Montenegro' },
//     jpn: { official: 'モンテネグロ', common: 'モンテネグロ' },
//     kor: { official: '몬테네그로', common: '몬테네그로' },
//     nld: { official: 'Montenegro', common: 'Montenegro' },
//     per: { official: 'مونته‌نگرو', common: 'مونته‌نگرو' },
//     pol: { official: 'Czarnogóra', common: 'Czarnogóra' },
//     por: { official: 'Montenegro', common: 'Montenegro' },
//     rus: { official: 'Черногория', common: 'Черногория' },
//     slk: { official: 'Čierna Hora', common: 'Čierna Hora' },
//     spa: { official: 'Montenegro', common: 'Montenegro' },
//     swe: { official: 'Montenegro', common: 'Montenegro' },
//     urd: { official: 'مونٹینیگرو', common: 'مونٹینیگرو' },
//     zho: { official: '黑山', common: '黑山' },
//   },
//   latlng: [42.5, 19.3],
//   landlocked: false,
//   borders: ['ALB', 'BIH', 'HRV', 'UNK', 'SRB'],
//   area: 13812.0,
//   demonyms: {
//     eng: { f: 'Montenegrin', m: 'Montenegrin' },
//     fra: { f: 'Monténégrine', m: 'Monténégrin' },
//   },
//   flag: '\uD83C\uDDF2\uD83C\uDDEA',
//   maps: {
//     googleMaps: 'https://goo.gl/maps/4THX1fM7WqANuPbB8',
//     openStreetMaps: 'https://www.openstreetmap.org/relation/53296',
//   },
//   population: 621718,
//   gini: { 2016: 38.5 },
//   fifa: 'MNE',
//   car: { signs: ['SCG'], side: 'right' },
//   timezones: ['UTC+01:00'],
//   continents: ['Europe'],
//   flags: {
//     png: 'https://flagcdn.com/w320/me.png',
//     svg: 'https://flagcdn.com/me.svg',
//   },
//   coatOfArms: {
//     png: 'https://mainfacts.com/media/images/coats_of_arms/me.png',
//     svg: 'https://mainfacts.com/media/images/coats_of_arms/me.svg',
//   },
//   startOfWeek: 'monday',
//   capitalInfo: { latlng: [42.43, 19.27] },
//   postalCode: { format: '#####', regex: '^(\\d{5})$' },
// };

function Card({ item }) {
  return (
    <section className="item-card">
      <img src={item.flags.svg} alt={item.flags.svg} />
      <div className="card-desc">
        <h4>{item.name.official}</h4>
        <p>Population: {item.population}</p>
        <p>Region: {item.region}</p>
        <p>Capital: {item.capital}</p>
      </div>
    </section>
  );
}

export default Card;
