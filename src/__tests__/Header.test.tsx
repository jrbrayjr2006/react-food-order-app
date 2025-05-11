import { render } from '@testing-library/react';
import Header from '../components/Header';
import Meal from "../domain/Meal";

describe('Header', () => {
    const portalRoot = document.createElement('dialog');
    portalRoot.id = 'modal-root';

    it('should render Header', () => {
        document.body.appendChild(portalRoot);
        const mealsInCart: Meal[] = [
            { id: '1', name: 'Pizza', description: 'Delicious cheese pizza', price: 9.99, image: 'pizza.jpg' },
            { id: '2', name: 'Burger', description: 'Juicy beef burger', price: 5.99, image: 'burger.jpg' },
        ];
        const { getByText } = render(<Header mealsInCart={mealsInCart} />)

        expect(getByText('Food Order App')).toBeInTheDocument();
    });
});