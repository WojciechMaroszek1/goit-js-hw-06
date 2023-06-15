const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector("#ingredients");

ingredients.forEach(ingredient => {
  const ingredientsCreator = document.createElement("li");
  ingredientsCreator.classList.add("item")
  ingredientsCreator.textContent = ingredient;
  ingredientsList.append(ingredientsCreator);

  console.log(ingredientsCreator);
  console.log(ingredient);
});
  

// const markup = ingredients
//   .map((ingredient) => `<li class="item">${ingredient}</li>`)
//   .join("");
// console.log(markup);
// list.insertAdjacentHTML("beforeend", markup);