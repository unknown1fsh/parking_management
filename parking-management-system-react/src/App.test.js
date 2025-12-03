import { render, screen } from '@testing-library/react';
import App from './App';

test('renders parking management system header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Otopark Yönetim Sistemi/i);
  expect(headerElement).toBeInTheDocument();
});
