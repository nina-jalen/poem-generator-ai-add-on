function generatePoem(event) {
  event.preventDefault();

  //   alert("Generating Poem");

  //   let poemELement = document.querySelector("#poem");
  //   poemELement.innerHTML = "This is generated poem";
  // 1
  //   new Typewriter("#poem", {
  //     strings: "This is generated poem",
  //     autoStart: true,
  //     delay: 1,
  //     cursor: "",
  //   });

  // 2
  // built the API URL
  // Make a call to API
  // Display the generated poem

  function displayPoem(response) {
    // respose.data.answer
    console.log("Poem genetared");
    new Typewriter("#poem", {
      strings: response.data.answer,
      autoStart: true,
      delay: 1,
      cursor: "",
    });
  }

  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "7e0645b54e0a0f4c0fa7443bo6fb8tf9";
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
  let context =
    "You are a romantic poem expert and love to write short poems. Your mission is to generate a short, a 4 line poem in basic HTML (but do not incluede HTML and ` in text, in poem) and separete each line with a break. Sign the poem with SheCodes AI inside an <i> element at the end of the poem and not in the beggining beform the poem in a new line after the poem with a break. Make sure to follow user instructions.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  // 3 - UX
  // to show the poem element when submiting a word
  let poemELement = document.querySelector("#poem");
  poemELement.classList.remove("hidden");
  poemELement.innerHTML = `<div class="genetaring">Generating a poem for you about ${instructionsInput.value} ... </div>`;

  console.log("Generating poem ... ");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

// remove all the console.logs after finishing the project !
