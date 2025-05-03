export async function getMealData() {
  return await fetch('https://localhost:3000/meals')
    .then((response) => response.json())
    .then((data) => data.meals);
}   