import React from 'react';

function Error({ error }) {
  return <div>{error?.data?.message}</div>;
}

export default Error;
