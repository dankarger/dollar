import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Menu2 from "./components/Menu2";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId('menu2');
  expect(linkElement).toBeInTheDocument();
});
