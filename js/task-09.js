function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeBg = document.querySelector(".change-color")
const colorCode = document.querySelector(".color")

changeBg.addEventListener("click", () => {
  const color = getRandomHexColor()
  document.body.style.backgroundColor = color;
  colorCode.textContent = color;
});






// changeBg.addEventListener("click", () => {
//   let color = `#`;
//   color += Math.floor(Math.random() * 16777215)
//   .toString(16)
//   .padStart(6, 0);
//   body.style.backgroundColor = color;
//   colorCode.innerText = color;
//   console.log(color)
// });

// function getRandomRgbColor() {
//   `rgb(`+ Math.round(Math.random()* 255) +
//   `,` + Math.round(Math.random()* 255) +
//   `,` + Math.round(Math.random()* 255) +`)`
// }
