"use strict";

(function turnOff() {
  let turnOnOffButton = document.querySelector(".under-display-button");
  let screen = document.querySelector(".content-display");
  screen.style.backgroundColor = "black";

  turnOnOffButton.addEventListener("click", function () {
    if (screen.style.backgroundColor === "black") {
      screen.style.backgroundColor = "white";
    } else {
      screen.style.backgroundColor = "black";
    }
  });
})();
