import './App.css'
import Header from './components/Header'
import Meals from './components/Meals'
import { MealsContextProvider } from './store/MealsContext';


function App() {
  // const [meals, setMeals] = useState<Meal[]>([]);

  // Example: Simulate fetching meals data
  // useEffect(() => {
  //   setMeals([
  //     {
  //       id: '1',
  //       name: 'Pizza',
  //       description: 'Delicious cheese pizza',
  //       price: 10.00,
  //       image: 'pizza.jpg',
  //     },
  //     {
  //       id: '2',
  //       name: 'Burger',
  //       description: 'Juicy beef burger',
  //       price: 8.99,
  //       image: 'burger.jpg',
  //     },
  //     {
  //       id: '3',
  //       name: 'Chicken Curry',
  //       description: 'Spicy chicken curry',
  //       price: 12.00,
  //       image: 'chicken_curry.jpg',
  //     },
  //     {
  //       id: '4',
  //       name: 'Chicken Curry',
  //       description: 'Spicy chicken curry',
  //       price: 12.00,
  //       image: 'chicken_curry.jpg',
  //     },
  //     {
  //       id: '5',
  //       name: 'Chicken Curry',
  //       description: 'Spicy chicken curry',
  //       price: 12.00,
  //       image: 'chicken_curry.jpg',
  //     },
  //   ]);
  // }, []);


  return (
    <div>
      <MealsContextProvider>
        <Header />
        <Meals />
      </MealsContextProvider>
    </div>
  )
}

export default App
