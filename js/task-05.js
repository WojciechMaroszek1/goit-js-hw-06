const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  if(textInput.length !== 0) {
    textOutput.textContent = event.currentTarget.value;
    }
});

textInput.addEventListener("blur", (event) => {
    if(event.currentTarget.value === "") {
        textOutput.textContent = "Anonymous"
    }
  });