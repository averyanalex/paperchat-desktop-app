import { render, screen } from '@testing-library/react';
import Message from './Message';

test('renders message', () => {
  render(<Message text="Hello, World!"/>);
  const linkElement = screen.getByText("Hello, World!");
  expect(linkElement).toBeInTheDocument();
});
