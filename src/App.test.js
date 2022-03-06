import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/React add or remove contents from list/);
  expect(linkElement).toBeInTheDocument();
});
