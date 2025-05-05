import Meals from '../components/Meals';
import Meal from '../domain/Meal';
import { MealsContext } from "../store/MealsContext";
import { render, screen } from '@testing-library/react';

const meals:  Meal[] = [
  {
    id: '1',
    name: 'Sushi',
    image: 'https://example.com/sushi.jpg',
    description: 'Finest fish and veggies',
    price: "22.99",
  },
  {
    id: '2',
    name: 'Schnitzel',
    image:  'https://example.com/schnitzel.jpg',
    description: 'A german specialty!',
    price: "16.50",
  },
  {
    id: '3',
    name: 'Barbecue Burger',
    image: 'https://example.com/barbecue-burger.jpg',
    description: 'American, raw, meaty',
    price: "12.99",
  },
  {
    id: '4',
    name: 'Green Bowl',
    image: 'https://example.com/green-bowl.jpg',
    description: 'Healthy...and green...',
    price: "18.99",
  },
];

describe('Meals', () => {
    const mealsContextValue = {
        meals: meals,
    };

    const mockUpdateCart = jest.fn();

    it('renders the meals correctly', () => {
        render(
            <MealsContext.Provider value={mealsContextValue}>
                <Meals updateCart={mockUpdateCart} />
            </MealsContext.Provider>
        );
        const mealElements = screen.getAllByRole('article');
        expect(mealElements).toHaveLength(meals.length);
    })
});