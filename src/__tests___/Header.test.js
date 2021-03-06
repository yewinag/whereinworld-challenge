import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '../components/layouts';

test('should render header text correctly', () => {
  render(<Header />);
  const headerText = screen.getByRole('heading');
  expect(headerText).toHaveTextContent('Where in the world?');
});
