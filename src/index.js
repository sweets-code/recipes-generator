function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "lava cake",
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
