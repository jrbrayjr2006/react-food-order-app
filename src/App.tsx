import './App.css'
import Header from './components/Header'
import MealCard from './components/MealCard'
import { useState, useEffect } from 'react';

export interface Meal {
    id: string;
    name: string;
    description: string;
    price: string;
    image: string;
}

function App() {
  const [meals, setMeals] = useState<Meal[]>([]);
  // const [loading, setLoading] = useState(true);

  // Example: Simulate fetching meals data
  useEffect(() => {
    setMeals([
      {
        id: '1',
        name: 'Pizza',
        description: 'Delicious cheese pizza',
        price: '$10',
        image: 'pizza.jpg',
      },
      {
        id: '2',
        name: 'Burger',
        description: 'Juicy beef burger',
        price: '$8',
        image: 'burger.jpg',
      },
      {
        id: '3',
        name: 'Chicken Curry',
        description: 'Spicy chicken curry',
        price: '$12',
        image: 'chicken_curry.jpg',
      },
      {
        id: '4',
        name: 'Chicken Curry',
        description: 'Spicy chicken curry',
        price: '$12',
        image: 'chicken_curry.jpg',
      },
      {
        id: '5',
        name: 'Chicken Curry',
        description: 'Spicy chicken curry',
        price: '$12',
        image: 'chicken_curry.jpg',
      },
    ]);
  }, []);


  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center text-white p-4 lg:flex-row lg:flex-wrap lg:justify-between lg:p-6">
        {meals.map((meal) => (
          <MealCard image={meal.image} name={meal.name} description={meal.description} price={meal.price} />
        ))}

      </div>
    </div>
  )
}

export default App
