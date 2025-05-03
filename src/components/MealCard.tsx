import Meal from '../domain/Meal';

export default function MealCard(meal: Meal) {

    function addToCart(mealName: string | undefined) {
        console.log("Added to cart: ", mealName);
    }   

    return (
        <article className="flex flex-col items-center justify-center bg-cardBackground text-white shadow-md rounded-lg p-4 m-2 w-64">
            <img src={meal.image} alt={meal.name} className="mb-2" />
            <h2 className="text-2xl text-slate-100 font-bold">{meal.name}</h2>
            <div className="bg-darkBackground text-menuButtonBackground font-semibold py-1 px-4 my-2 rounded-sm">${meal.price}</div>
            <p className="my-2">{meal.description}</p>
            <button onClick={() => addToCart(meal.name)} className="bg-menuButtonBackground text-black py-2 px-6 my-2 rounded-md cursor-pointer hover:bg-yellow-400 hover:font-semibold">Add to Cart</button>
        </article>
    );
}