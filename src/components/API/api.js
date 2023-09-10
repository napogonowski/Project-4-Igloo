/// testing the API unsuccessfully tho

const url =
  "https://techtic-naitik-supper_app-v1.p.rapidapi.com/spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/ingredients/map";
const options = {
  method: "POST",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    Authorization: "<REQUIRED>",
    "Content-Type": "application/json",
    Accept: "application/json",
    "X-RapidAPI-Key": process.env.XRapidAPIKey,
    "X-RapidAPI-Host": "techtic-naitik-supper_app-v1.p.rapidapi.com",
  },
  body: new URLSearchParams({
    servings: "2",
    ingredients: '["Pork sausages ", "Spinach"]',
  }),
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}
