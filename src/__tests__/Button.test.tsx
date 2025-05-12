import { render, screen } from '@testing-library/react';
import Button from '../components/ui/Button';

describe('Button', () => {
  it('renders the button with the correct text', () => {
    render(<Button>Click Me</Button>);

    const buttonElement = screen.getByRole('button', { name: /click me/i });

    expect(buttonElement).toBeInTheDocument();
  });

  it('renders the button with the correct class name', () => {
    render(<Button className="custom-class">Click Me</Button>);

    const buttonElement = screen.getByRole('button', { name: /click me/i });

    expect(buttonElement).toHaveClass('custom-class');
  });
});