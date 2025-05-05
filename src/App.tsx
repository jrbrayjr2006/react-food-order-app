import './App.css'
import { useState } from 'react';
import Header from './components/Header'
import Meals from './components/Meals'
import { MealsContextProvider } from './store/MealsContext';


function App() {
  const [mealsInCart, setMealsInCart] = useState<string[]>([]);

  function updateCart(meal: string | undefined) {
    console.log(meal);
    if (meal) {
      setMealsInCart((prevMeals: string[]) => {
        return [...prevMeals, meal];
      });
    }
    return mealsInCart;
  }


  return (
    <div>
      <MealsContextProvider>
        <Header mealsInCart={mealsInCart.length} />
        <Meals updateCart={updateCart} />
      </MealsContextProvider>
    </div>
  )
}

export default App
