"use strict";

let pokemonName = document.querySelector(".pokemon-name");
let pokemonPic = document.querySelector(".pokemon")
let upArrow = document.querySelector(".mdi--arrow-drop-up")
let leftArrow = document.querySelector(".material-symbols--arrow-left")
let rightArrow = document.querySelector(".material-symbols--arrow-right")
let downArrow = document.querySelector(".mdi--arrow-down-drop")
let searchPokemon = 1;
let typeNames = document.querySelector(".type-names")
let pokemonType1 = document.querySelector(".pokemon-type1")
let pokemonType2 = document.querySelector(".pokemon-type2")

const fetchPokemon = async (pokemon) => {

  const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const data = await APIResponse.json();
  return data;
}

const renderPokemon = async(pokemon) => {
  const data = await fetchPokemon(pokemon);

  pokemonName.innerHTML = data.name;
  pokemonPic.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
  pokemonType1.innerHTML = data['types']['0']['type']['name'];
  pokemonType2.innerHTML = data['types']['1']['type']['name'];

  if(pokemonType1.innerHTML = data['types']['0']['type']['name'] === "grass") {
    pokemonType1.innerHTML = "<span style='width: 30px; height: 30px' class='game-icons--high-grass'></span>";
  }

  if(pokemonType2.innerHTML = data['types']['1']['type']['name'] === "poison") {
    pokemonType2.innerHTML = "<span style='width: 30px; height: 30px' class='mdi--poison'></span>";
  }

  
}


renderPokemon('1');

(function turnOff() {

  let turnOnOffButton = document.querySelector(".under-display-button");
  let screen = document.querySelector(".content-display");

  screen.style.backgroundColor = "black";

  turnOnOffButton.addEventListener("click", function () {
    if (screen.style.backgroundColor === "black") {
      screen.style.backgroundImage = "url('../src/bk-pokemon.png')";
      screen.style.backgroundSize = "cover";
      screen.style.backgroundRepeat = "no-repeat";
      screen.style.backgroundPosition = "center";
      screen.style.backgroundColor = "white";
      pokemonPic.style.display = "flex"
      pokemonName.style.display = "block"
      typeNames.style.display = "flex"
    } else {
      screen.style.backgroundColor = "black";
      screen.style.backgroundImage = "";
      pokemonPic.style.display = ""
      pokemonName.style.display = ""
      typeNames.style.display = ""
    }

  });
})();

rightArrow.addEventListener("click", () => {
  searchPokemon += 1;
  renderPokemon(searchPokemon)
})

leftArrow.addEventListener("click", () => {
  searchPokemon -= 1;
  renderPokemon(searchPokemon)
})

upArrow.addEventListener("click", () => {
  searchPokemon -= 1;
  renderPokemon(searchPokemon)
})

downArrow.addEventListener("click", () => {
  searchPokemon += 1;
  renderPokemon(searchPokemon)
})

renderPokemon(searchPokemon);
