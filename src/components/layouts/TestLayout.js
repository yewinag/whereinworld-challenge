import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { featchDev, selectValues } from '../../features/country/countrySlice';

function TestLayout() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(featchDev('http://localhost:3004/developers'));
  }, [dispatch]);

  const { test } = useSelector(selectValues);

  return (
    <div>
      <h3>TestLayout</h3>
      <section role="tablist">
        {test.map((item) => (
          <button key={item.id} role="tab" type="button">
            {item.name}
          </button>
        ))}
      </section>
    </div>
  );
}

export default TestLayout;
