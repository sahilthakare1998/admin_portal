import { render, screen } from '@testing-library/react';
import EditForm from './EditForm';
import '@testing-library/jest-dom'

it('renders Edit form properly', async () => {
  render(<EditForm />);

  const items = await screen.findByRole('button')
  expect(items).toBeInTheDocument()

  expect(screen.getByText('Edit Employee Details')).toBeInTheDocument()
});