import MealCard from "../components/MealCard";
import { render, screen } from "@testing-library/react";
import Meal from '../domain/Meal';

// Uncomment the following lines to use the default meal object
const meal: Meal = {
    id: "01",
    name: "Breakfast",
    description: "Meal Description Lorem ipsum dolor, sit amet consectetur adipisicing.",
    price: "10.99",
    image: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
};

describe("MealCard", () => {
  const mockUpdateCart = jest.fn();

  it("renders the meal card with the correct title", () => {
    render(<MealCard meal={meal} updateCart={mockUpdateCart} />);

    const titleElement = screen.getByText("Breakfast");

    expect(titleElement).toBeInTheDocument();
  });
});