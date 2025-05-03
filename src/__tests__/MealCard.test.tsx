import MealCard from "../components/MealCard";
import { render, screen } from "@testing-library/react";

// Uncomment the following lines to use the default meal object
const meal = {
    id: "01",
    name: "Breakfast",
    description: "Meal Description Lorem ipsum dolor, sit amet consectetur adipisicing.",
    price: 10.99,
    image: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
}

describe("MealCard", () => {
  it("renders the meal card with the correct title", () => {
    render(<MealCard id={meal.id} name={meal.name} image={meal.image} price={meal.price} description={meal.description}/>);

    const titleElement = screen.getByText("Breakfast");

    expect(titleElement).toBeInTheDocument();
  });
});