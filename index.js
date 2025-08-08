const home = document.getElementById("countElhome");
const guest = document.getElementById("countElguest");

// start from what's in the DOM (or 0)
let countHome = Number(home.textContent) || 0;
let countGuest = Number(guest.textContent) || 0;



function triggerPlusOne(button) {
  if (button.id === "buttonPlusOneHome") {
    countHome++;
    home.textContent = countHome;
  } else if (button.id === "buttonPlusOneGuest") {
    countGuest++;
    guest.textContent = countGuest;
  }
}


function triggerPlusTwo(button) {
  if (button.id === "buttonPlusTwoHome") {
    countHome += 2;
    home.textContent = countHome;
  } else if (button.id === "buttonPlusTwoGuest") {
    countGuest += 2;
    guest.textContent = countGuest;
  }
}

function triggerPlusThree(button) {
  if (button.id === "buttonPlusThreeHome") {
    countHome += 3;
    home.textContent = countHome;
  } else if (button.id === "buttonPlusThreeGuest") {
    countGuest += 3;
    guest.textContent = countGuest;
  }
}


function newGame(button){

    if (button.id === "startNewGame") {
        home.textContent = 0
        guest.textContent = 0
        countHome = 0
        countGuest = 0
        

    }

}