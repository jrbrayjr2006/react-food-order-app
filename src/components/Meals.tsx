import { useContext } from "react";
import { MealsContext } from "../store/MealsContext";
import MealCard from "./MealCard";

export default function Meals() {
    const{ meals } = useContext(MealsContext);

    return (
        <section className="flex flex-col justify-center items-center text-white p-4 lg:flex-row lg:flex-wrap lg:justify-between lg:p-6">
            {meals.map((meal) => (
                <MealCard key={meal.id} id={meal.id} image={meal.image} name={meal.name} description={meal.description} price={meal.price} />
            ))}
        </section>
    );
}