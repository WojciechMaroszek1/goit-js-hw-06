

const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const display = document.getElementById('value');

let counterValue = 0;

decrement.addEventListener("click", () => {
    counterValue--
    display.innerHTML = counterValue; 
  });
increment.addEventListener("click", () => {
    counterValue++
    display.innerHTML = counterValue; 
  });
