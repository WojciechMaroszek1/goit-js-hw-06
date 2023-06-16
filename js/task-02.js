const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector("#ingredients");
const listNodes = [];

ingredients.forEach((ingredient) => {
  const ingredientsCreator = document.createElement("li");
  ingredientsCreator.classList.add("item");
  ingredientsCreator.textContent = ingredient;
  listNodes.push(ingredientsCreator);
});
ingredientsList.append(...listNodes);
console.log(listNodes);


// const markup = ingredients
//   .map((ingredient) => `<li class="item">${ingredient}</li>`)
//   .join("");
// console.log(markup);
// list.insertAdjacentHTML("beforeend", markup);