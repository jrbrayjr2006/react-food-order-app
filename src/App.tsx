import './App.css'
import { useState } from 'react';
import Header from './components/Header'
import Meals from './components/Meals'
import { MealsContextProvider } from './store/MealsContext';
import Meal from "./domain/Meal";


function App() {
  const [mealsInCart, setMealsInCart] = useState<Meal[]>([]);

  function updateCart(meal: Meal | undefined) {
    console.log(meal);
    if (meal) {
      setMealsInCart((prevMeals: Meal[]) => {
        return [...prevMeals, meal];
      });
    }
    return mealsInCart;
  }


  return (
    <div>
      <MealsContextProvider>
        <Header mealsInCart={mealsInCart} />
        <Meals updateCart={updateCart} />
      </MealsContextProvider>
    </div>
  )
}

export default App
