import React from 'react';
import { render, screen, waitFor } from './test-utils';
import { List } from '../components/layouts';
import { Provider } from 'react-redux';
import { store } from '../store';
import { fireEvent } from '@testing-library/react';
// import 'babel-polyfill';

test('should render listing', async () => {
  render(
    <Provider store={store}>
      <List />
    </Provider>
  );
  expect(screen.getByRole('alert')).toHaveTextContent('loading.....');
});
