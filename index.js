const home = document.getElementById("countElhome");
const guest = document.getElementById("countElguest");
let countHome = 0;
let countGuest = 0;



function triggerPlusOne(button) {
  if (button.id === "buttonPlusOneHome") {
    countHome++;
    home.textContent = countHome;
  } else if (button.id === "buttonPlusOneGuest") {
    countGuest++;
    guest.textContent = countGuest;
  }
}