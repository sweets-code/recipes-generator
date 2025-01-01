function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "895d42a7dtfe24oe1bb63cf400f9b244";
  let prompt = `Generate a cupcake recipe using ${instructionsInput.value} as the flavour`;
  let context =
    "You are a cupcake expert that provides simple, delicious and quick cupcake recipe and the method of making the cupcake is based on the flavours provided by the user and the making of cupcake takes less than 30 minutes. The answer should be in this html format <p> This is the recipe </p>. Sign at the end of the recipe with Recipe from SheCodes AI inside a <strong> element and the signature should be purple";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class = "generating">Generating a recipe for ${instructionsInput.value} cupcake 🧁 </div>`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
