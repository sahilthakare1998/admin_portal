import { render, screen } from '@testing-library/react';
import DenseTable from './EmployeeTable';
import '@testing-library/jest-dom'

it('renders Employee modal  properly', async () => {
  render(<DenseTable />);

  expect(screen.getByText('Full Name')).toBeInTheDocument()
  expect(screen.getByText('Username')).toBeInTheDocument()
  expect(screen.getByText('Email')).toBeInTheDocument()
  expect(screen.getByText('Edit Details')).toBeInTheDocument()

});