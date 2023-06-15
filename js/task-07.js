const fontSizeControl = document.querySelector("#font-size-control")
const textChange = document.querySelector("#text")

fontSizeControl.addEventListener("input", () => {
    const rangeValue = fontSizeControl.value;
    textChange.style.fontSize = rangeValue + "px";
});