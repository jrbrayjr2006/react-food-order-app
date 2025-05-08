export async function getMealData() {  
  const response = await fetch('http://localhost:3000/meals');

  if (!response.ok) {
    throw new Error('Failed to fetch meals data!');
  }
  // console.log("Response: ", response);
  const mealsJsonData = response.json();
  // console.log("Meals:  ", mealsJsonData);
  return mealsJsonData
}