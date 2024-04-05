"use strict";

let pokemonName = document.querySelector(".pokemon-name");
let pokemonPic = document.querySelector(".pokemon");
let upArrow = document.querySelector(".mdi--arrow-drop-up");
let leftArrow = document.querySelector(".material-symbols--arrow-left");
let rightArrow = document.querySelector(".material-symbols--arrow-right");
let downArrow = document.querySelector(".mdi--arrow-down-drop");
let searchPokemon = 1;
let typeNames = document.querySelector(".type-names");
let pokemonType1 = document.querySelector(".pokemon-type1");
let pokemonType2 = document.querySelector(".pokemon-type2");
let pokemonStats1 = document.querySelector(".attack-stats");
let pokemonStats2 = document.querySelector(".defense-stats");
let pokemonAttack = document.querySelector(".attack-value");
let pokemonDefense = document.querySelector(".defense-value");

const fetchPokemon = async (pokemon) => {

  const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const data = await APIResponse.json();
  return data;
}

const renderPokemon = async(pokemon) => {
  const data = await fetchPokemon(pokemon);

  pokemonName.innerHTML = data.name;
  pokemonPic.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
  let type1 = pokemonType1.innerHTML = data['types']['0']['type']['name'];
  let type2 = pokemonType2.innerHTML = data['types'].length > 1 ? data['types']['1']['type']['name'] : undefined;
  let attack = pokemonAttack.innerHTML = data['stats']['1']['base_stat'];
  let defense = pokemonDefense.innerHTML = data['stats']['2']['base_stat'];

  if(type1 === "grass"){
    pokemonType1.innerHTML = "<span style='width: 30px; height: 30px' class='game-icons--high-grass'></span>";
  }

  if(type2 === "grass") {
    pokemonType2.innerHTML = "<span style='width: 30px; height: 30px' class='game-icons--high-grass'></span>";
  }

  if(type1 === "poison") {
    pokemonType1.innerHTML = "<span style='width: 30px; height: 30px' class='mdi--poison'></span>";
  }

  if(type2 === "poison") {
    pokemonType2.innerHTML = "<span style='width: 30px; height: 30px' class='mdi--poison'></span>";
  }

  if(type1 === "fire" || type2 === "fire") {
    pokemonType1.innerHTML = "<span style='width: 30px; height: 30px' class='mdi--fire'></span>";
  }

  if(type2 === "fire") {
    pokemonType2.innerHTML = "<span style='width: 30px; height: 30px' class='mdi--fire'></span>";
  }

  if(type1 === "flying") {
    pokemonType1.innerHTML = "<span style='width: 30px; height: 30px' class='game-icons--liberty-wing'></span>";
  }

  if(type2 === "flying") {
    pokemonType2.innerHTML = "<span style='width: 30px; height: 30px' class='game-icons--liberty-wing'></span>";
  }

  if(type1 === "water") {
    pokemonType1.innerHTML = "<span style='width: 30px; height: 30px' class='emojione-monotone--water-wave'></span>";
  }

  if(type2 === "water") {
    pokemonType2.innerHTML = "<span style='width: 30px; height: 30px' class='emojione-monotone--water-wave'></span>";
  }

  if(type1 === "bug") {
    pokemonType1.innerHTML = "<span style='width: 30px; height: 30px' class='mdi--bug'></span>";
  }

  if(type2 === "bug") {
    pokemonType2.innerHTML = "<span style='width: 30px; height: 30px' class='mdi--bug'></span>";
  }

  if(type1 === "electric") {
    pokemonType1.innerHTML = "<span style='width: 30px; height: 30px' class='game-icons--electric'></span>";
  }

  if(type2 === "electric") {
    pokemonType2.innerHTML = "<span style='width: 30px; height: 30px' class='game-icons--electric'></span>";
  }

  if(type1 === "ground") {
    pokemonType1.innerHTML = "<span style='width: 30px; height: 30px' class='game-icons--ground-sprout'></span>";
  }

  if(type2 === "ground") {
    pokemonType2.innerHTML = "<span style='width: 30px; height: 30px' class='game-icons--ground-sprout'></span>";
  }

  if(type1 === "fairy") {
    pokemonType1.innerHTML = "<span style='width: 30px; height: 30px' class='game-icons--fairy-wings'></span>";
  }

  if(type2 === "fairy") {
    pokemonType2.innerHTML = "<span style='width: 30px; height: 30px' class='game-icons--fairy-wings'></span>";
  }

  if(type1 === "fighting") {
    pokemonType1.innerHTML = "<span style='width: 30px; height: 30px' class='game-icons--punch'></span>";
  }

  if(type2 === "fighting") {
    pokemonType2.innerHTML = "<span style='width: 30px; height: 30px' class='game-icons--punch'></span>";
  }

  if(type1 === "psychic") {
    pokemonType1.innerHTML = "<span style='width: 30px; height: 30px' class='game-icons--psychic-waves'></span>";
  }

  if(type2 === "psychic") {
    pokemonType2.innerHTML = "<span style='width: 30px; height: 30px' class='game-icons--psychic-waves'></span>";
  }

  if(type1 === "rock") {
    pokemonType1.innerHTML = "<span style='width: 30px; height: 30px' class='game-icons--rock'></span>";
  }

  if(type2 === "rock") {
    pokemonType2.innerHTML = "<span style='width: 30px; height: 30px' class='game-icons--rock'></span>";
  }

  if(type1 === "steel") {
    pokemonType1.innerHTML = "<span style='width: 30px; height: 30px' class='game-icons--steel-claws'></span>";
  }

  if(type2 === "steel") {
    pokemonType2.innerHTML = "<span style='width: 30px; height: 30px' class='game-icons--steel-claws'></span>";
  }
  
  if(type1 === "ice") {
    pokemonType1.innerHTML = "<span style='width: 30px; height: 30px' class='arcticons--icebox'></span>";
  }

  if(type2 === "ice") {
    pokemonType2.innerHTML = "<span style='width: 30px; height: 30px' class='arcticons--icebox'></span>";
  }

  if(type1 === "ghost") {
    pokemonType1.innerHTML = "<span style='width: 30px; height: 30px' class='mdi--ghost'></span>";
  }

  if(type2 === "ghost") {
    pokemonType2.innerHTML = "<span style='width: 30px; height: 30px' class='mdi--ghost'></span>";
  }

  if(type1 === "dragon") {
    pokemonType1.innerHTML = "<span style='width: 30px; height: 30px' class='fa6-solid--dragon'></span>";
  }

  if(type2 === "dragon") {
    pokemonType2.innerHTML = "<span style='width: 30px; height: 30px' class='fa6-solid--dragon'></span>";
  }

  if(type1 === "dark") {
    pokemonType1.innerHTML = "<span style='width: 30px; height: 30px' class='circum--dark'></span>";
  }

  if(type2 === "dark") {
    pokemonType2.innerHTML = "<span style='width: 30px; height: 30px' class='circum--dark'></span>";
  }




  if(type2 === undefined){
    pokemonType2.innerHTML = "";
    typeNames.style.justifyContent = "center";
  } else {
    typeNames.style.justifyContent = "space-evenly";
  }

  if(type1 === "normal" || type2 === "normal") {
    pokemonType1.innerHTML = "Normal";
    typeNames.style.alignItems = "center";
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
      pokemonPic.style.display = "flex";
      pokemonName.style.display = "block";
      typeNames.style.display = "flex";
      pokemonStats1.style.display = "block";
      pokemonStats2.style.display = "block";
      pokemonAttack.style.display = "block";
      pokemonDefense.style.display = "block";
    } else {
      screen.style.backgroundColor = "black";
      screen.style.backgroundImage = "";
      pokemonPic.style.display = "";
      pokemonName.style.display = "";
      typeNames.style.display = "";
      pokemonStats1.style.display = "";
      pokemonStats2.style.display = "";
      pokemonAttack.style.display = "";
      pokemonDefense.style.display = "";
    }

  });
})();

rightArrow.addEventListener("click", () => {
  searchPokemon += 1;
  renderPokemon(searchPokemon);
})

leftArrow.addEventListener("click", () => {
  if(searchPokemon > 1) {
    searchPokemon -= 1;
    renderPokemon(searchPokemon);
  } 
})

upArrow.addEventListener("click", () => {
  if(searchPokemon > 1) {
    searchPokemon -= 1;
    renderPokemon(searchPokemon);
  } 
})

downArrow.addEventListener("click", () => {
  searchPokemon += 1;
  renderPokemon(searchPokemon);
})

renderPokemon(searchPokemon);