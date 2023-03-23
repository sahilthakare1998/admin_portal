import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';
import '@testing-library/jest-dom'

it('renders Employee modal  properly', async () => {
  render(<NavBar />);

  expect(screen.getByText('Employee Portal')).toBeInTheDocument()
  expect(screen.getByText('Logout')).toBeInTheDocument()
});