import React from 'react';
import { render, screen, cleanup, awaitFor } from '@testing-library/react';
import { List } from '../components/layouts';
import { Provider } from 'react-redux';
import { store } from '../store';
// import 'babel-polyfill';

test('should render listing', () => {
  render(
    <Provider store={store}>
      <List />
    </Provider>
  );
  expect(screen.getByRole('alert')).toHaveTextContent('loading.....');
});
