import React from 'react';

function Card({ item }) {
  return (
    <section className="item-card" role="listitem">
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
