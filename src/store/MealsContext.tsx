import { createContext, useEffect, useState } from "react";
import { getMealData } from "../services/httpService";
import Meal from "../domain/Meal";

export const MealsContext: React.Context<{meals: Meal[]}> = createContext<{ meals: Meal[] }>({
    meals: null as unknown as Meal[],
});

export function MealsContextProvider({ children }: { children: React.ReactNode }) {
    const [meals, setMeals] = useState<Meal[]>([]);

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const mealData = await getMealData();
                setMeals(mealData);
            } catch (error) {
                console.error("Error fetching meal data:", error);
            }

        };
        fetchMeals();
    });

    const contextValue = {
        meals: meals,
    };

    return <MealsContext.Provider value={contextValue}>{children}</MealsContext.Provider>;
}