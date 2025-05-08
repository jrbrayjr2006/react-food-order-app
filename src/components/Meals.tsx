import { useContext } from "react";
import { MealsContext } from "../store/MealsContext";
import MealCard from "./MealCard";
import Meal from "../domain/Meal";

export default function Meals({ updateCart }: { updateCart: (meal: Meal | undefined) => void }) { 
    const{ meals } = useContext(MealsContext);
    

    return (
        <section className="flex flex-col justify-center items-center text-white p-4 lg:flex-row lg:flex-wrap lg:justify-between lg:p-6">
            {meals.map((meal: Meal) => (
                <MealCard key={meal.id} meal={meal} updateCart={() => updateCart(meal)}/>
            ))}
        </section>
    );
}