import React from 'react';

function Error({ error }) {
  return (
    <div>
      <p>{error?.data?.message}</p>
      <p>ဘာဖစ်တာလဲ မသိဘူးဟ</p>
    </div>
  );
}

export default Error;
