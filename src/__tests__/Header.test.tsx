import { render } from '@testing-library/react';
import Header from '../components/Header';

describe('Header', () => {

    it('should render Header', () => {
        const mealsInCart = 5;
        render(<Header mealsInCart={mealsInCart} />)
    });
});