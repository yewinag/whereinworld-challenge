import React from 'react';

function Card({ item }) {
  return (
    <section>
      <h4>{item.altSpellings[1]}</h4>
    </section>
  );
}

export default Card;
