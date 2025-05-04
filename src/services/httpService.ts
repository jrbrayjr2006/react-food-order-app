export async function getMealData() {  
  const response = await fetch('http://localhost:3000/meals');
  const mealsJsonData = response.json();
  console.log("Meals:  ", mealsJsonData);
  return mealsJsonData
}