import { render } from '@testing-library/react';
import Header from '../components/Header';

describe('Header', () => {
    it('should render Header', () => {
       render(<Header />)
    });
});