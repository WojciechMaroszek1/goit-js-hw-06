// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// function getRandomRgbColor() {
//   `rgb(`+ Math.round(Math.random()* 255) +
//   `,` + Math.round(Math.random()* 255) +
//   `,` + Math.round(Math.random()* 255) +`)`
// }

const changeBg = document.querySelector(".change-color")
const body = document.querySelector("body");
const colorCode = document.querySelector(".color")

changeBg.addEventListener("click", () => {
  let color = `#`;
  color += Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0);
  body.style.backgroundColor = color;
  colorCode.innerText = color;
  console.log(color)
});

