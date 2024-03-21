export const fetchRecipes = async () => {
  try {
    const API_KEY = process.env.FOOD_API_KEY;
    // const URL = `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=10`;
    const URL = 'http://localhost:3000/api/recipes';
    const res = await fetch(URL);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
