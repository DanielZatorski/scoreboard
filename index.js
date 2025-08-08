const home = document.getElementById("countElhome");
const guest = document.getElementById("countElguest");


const homeTitle = document.getElementById("homeBanner");
const guestTitle = document.getElementById("guestBanner");

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
  } highlightLeader()
}


function triggerPlusTwo(button) {
  if (button.id === "buttonPlusTwoHome") {
    countHome += 2;
    home.textContent = countHome;
  } else if (button.id === "buttonPlusTwoGuest") {
    countGuest += 2;
    guest.textContent = countGuest;
  } highlightLeader();
}

function triggerPlusThree(button) {
  if (button.id === "buttonPlusThreeHome") {
    countHome += 3;
    home.textContent = countHome;
  } else if (button.id === "buttonPlusThreeGuest") {
    countGuest += 3;
    guest.textContent = countGuest;
  } highlightLeader();
}


function newGame(button){

    if (button.id === "startNewGame") {
        home.textContent = 0
        guest.textContent = 0
        countHome = 0
        countGuest = 0
        

    } highlightLeader();

}

function highlightLeader() {
  if (countHome > countGuest) {
    homeTitle.style.color = "yellow";
    guestTitle.style.color = "white";
  } else if (countHome < countGuest) {
    guestTitle.style.color = "yellow";
    homeTitle.style.color = "white";
  } else {
    homeTitle.style.color = "white";
    guestTitle.style.color = "white";
  }
}