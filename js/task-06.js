const input = document.querySelector("input#validation-input");

input.addEventListener("blur", (element) => {
  if (element.currentTarget.value.length === parseInt(element.currentTarget.getAttribute("data-length")))
  {
    element.currentTarget.classList.add("valid")
    element.currentTarget.classList.remove("invalid")
  }
  else {
    element.currentTarget.classList.add("invalid")
    element.currentTarget.classList.remove("valid")
  }
})