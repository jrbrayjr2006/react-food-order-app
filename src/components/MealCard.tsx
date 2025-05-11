import Meal from '../domain/Meal';
import {ROOT_URL} from '../utils/Config';
import { currencyFormatter } from '../utils/formatting';

interface MealCardProps {
    meal: Meal;
    updateCart: (mealName: string | undefined) => void;
}

export default function MealCard(mealProps: MealCardProps) {

    function addToCart(mealName: string | undefined) {
        mealProps.updateCart(mealName);
        // console.log("Added to cart: ", mealName);
    }   

    return (
        <article className="flex flex-col items-center justify-center bg-cardBackground text-white shadow-md rounded-lg p-4 m-2 w-64">
            <img src={ROOT_URL + mealProps.meal.image} alt={mealProps.meal.name} className="mb-2" />
            <h2 className="text-2xl text-slate-100 font-bold">{mealProps.meal.name}</h2>
            <div className="bg-darkBackground text-menuButtonBackground font-semibold py-1 px-4 my-2 rounded-sm">{currencyFormatter.format(mealProps.meal.price ?? 0)}</div>
            <p className="my-2">{mealProps.meal.description}</p>
            <button onClick={() => addToCart(mealProps.meal.name)} className="button-primary">Add to Cart</button>
        </article>
    );
}