import { render, screen } from '@testing-library/react';
import EmployeeModal from './EmployeeModal';
import '@testing-library/jest-dom'

it('renders Employee modal  properly', async () => {
  render(<EmployeeModal />);

  const items = await screen.findByRole('button')
  expect(items).toBeInTheDocument()
});