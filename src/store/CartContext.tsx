import Meal from "../domain/Meal";
import { createContext, useState } from "react";
import type { CartContextType } from "../types/CartContextType";


export const CartContext = createContext<CartContextType>({
    mealsInCart: [],
    addMealToCart: () => {},
    removeMealFromCart: () => {},
    clearCart: () => {},
});

export function CartContextProvider({ children }: { children: React.ReactNode }) {
    const [mealsInCart, setMealsInCart] = useState<Meal[]>([]);

    function addMealToCart(meal: Meal) {
        setMealsInCart((prevMeals: Meal[]) => {
            return [...prevMeals, meal];
        });
    }

    function removeMealFromCart(mealId: string) {
        setMealsInCart((prevMeals: Meal[]) => {
            return prevMeals.filter((meal) => meal.id !== mealId);
        });
    }
    function clearCart() {
        setMealsInCart([]);
    }
    const contextValue = {
        mealsInCart: mealsInCart,
        addMealToCart: addMealToCart,
        removeMealFromCart: removeMealFromCart,
        clearCart: clearCart,
    };
    return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
}
