import { render } from '@testing-library/react';
import Header from '../components/Header';

describe('Header', () => {
    const portalRoot = document.createElement('dialog');
    portalRoot.id = 'modal-root';

    it('should render Header', () => {
        document.body.appendChild(portalRoot);
        const mealsInCart = 5;
        const { getByText } = render(<Header mealsInCart={mealsInCart} />)

        expect(getByText('Food Order App')).toBeInTheDocument();
    });
});