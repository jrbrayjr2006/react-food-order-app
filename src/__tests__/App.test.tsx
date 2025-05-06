import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
    const portalRoot = document.createElement('dialog');
    portalRoot.id = 'modal-root';
    document.body.appendChild(portalRoot);

    it('should smoke test', () => {
        expect(true).toBeTruthy();
    });
    it('should render App', () => {
        render(<App />);
    });
    it('should render Header text', () => {
        render(<App />);
        expect(screen.getByText(/Food Order App/i)).toBeInTheDocument();
    });
});