import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio without crashing', () => {
  render(<App />);
});

test('renders hero name', () => {
  render(<App />);
  const name = screen.getByText(/Adhil/i);
  expect(name).toBeInTheDocument();
});