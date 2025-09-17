import { render, screen } from '@testing-library/react';
import App from './index.js';

test('renders hello react', () => {
  render(<App />);
  const linkElement = screen.getByText(/hello, react/i);
  expect(linkElement).toBeInTheDocument();
});
