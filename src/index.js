function generatePoem(event) {
  event.preventDefault();

  //   alert("Generating Poem");

  //   let poemELement = document.querySelector("#poem");
  //   poemELement.innerHTML = "This is generated poem";

  new Typewriter("#poem", {
    strings: "This is generated poem",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
