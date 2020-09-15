import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Perx is awesome!', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Perx is awesome!/i);
  expect(linkElement).toBeInTheDocument();
});
