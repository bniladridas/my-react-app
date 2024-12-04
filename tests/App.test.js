import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders welcome message', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to My React App/i);
  expect(linkElement).toBeInTheDocument();
});