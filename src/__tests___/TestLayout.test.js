import React from 'react';
import { screen, fireEvent, render, waitFor } from './test-utils';
import TestLayout from '../components/layouts/TestLayout';

test('should ', async () => {
  render(<TestLayout />);
  expect(screen.getByRole('heading')).toHaveTextContent('TestLayout');
  const output = await waitFor(() => screen.getAllByRole('tab'));
  expect(output).toHaveLength(2);
});
