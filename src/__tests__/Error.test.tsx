import Error from '../components/Error';
import { render, screen } from '@testing-library/react';

describe('Error Component', () => {
  it('renders null when no error is provided', () => {
    render(<Error error={null} />);
    const errorElement = screen.queryByText(/error/i);
    expect(errorElement).not.toBeInTheDocument();
  });

  it('renders the error message when an error is provided', () => {
    const errorMessage = 'Something went wrong!';
    render(<Error error={errorMessage} />);
    
    const errorElement = screen.getByText(/error/i);
    const messageElement = screen.getByText(errorMessage);

    expect(errorElement).toBeInTheDocument();
    expect(messageElement).toBeInTheDocument();
  });
});