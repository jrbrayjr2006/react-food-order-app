import Meal from "@/domain/Meal";

export type CartContextType = {
    mealsInCart: Meal[];
    addMealToCart: (meal: Meal) => void;
    removeMealFromCart: (mealId: string) => void;
    clearCart: () => void;
};