import { render } from '@testing-library/react';
import App from '../App';

describe('App', () => {
    it('should smoke test', () => {
        expect(true).toBeTruthy();
    });
    it('should render App', () => {
        render(<App />);
    });

    // Happy Path Tests
    // describe('Happy Paths', () => {
    //     it('should render the component with initial state', () => {
    //     // Test to ensure the component renders correctly with initial state
    //     render(<App />);
    //     expect(screen.getByText(/Vite \+ React \+ Tailwind CSS/i)).toBeInTheDocument();
    //     expect(screen.getByRole('button', { name: /count is 0/i })).toBeInTheDocument();
    //     expect(screen.getByAltText(/Vite logo/i)).toHaveAttribute('src', 'viteLogoMock');
    //     expect(screen.getByAltText(/React logo/i)).toHaveAttribute('src', 'reactLogoMock');
    //     });

    //     it('should increment count on button click', () => {
    //     // Test to ensure the count increments when the button is clicked
    //     render(<App />);
    //     const button = screen.getByRole('button', { name: /count is 0/i });
    //     fireEvent.click(button);
    //     expect(button).toHaveTextContent('count is 1');
    //     });
    // });
});