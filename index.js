const home = document.querySelector(".score-home");
const guest = document.querySelector(".score-guest");

const homepoint1 = document.getElementById("home1");
const homepoint2 = document.getElementById("home2");
const homepoint3 = document.getElementById("home3");

const guestpoint1 = document.getElementById("guest1");
const guestpoint2 = document.getElementById("guest2");
const guestpoint3 = document.getElementById("guest3");

let homeScore = 0;
let guestScore = 0;

//home score functions
homepoint1.addEventListener("click", (e) => {
    homeScore += 1;
    home.textContent = homeScore;
    console.log("add point");
})

homepoint2.addEventListener("click", (e) => {
    homeScore += 2;
    home.textContent = homeScore;
    console.log("add point");
})

homepoint3.addEventListener("click", (e) => {
    homeScore += 3;
    home.textContent = homeScore;
    console.log("add point");
})

//guest score functions
guestpoint1.addEventListener("click", (e) => {
    guestScore += 1;
    guest.textContent = guestScore;
    console.log("add point");
})

guestpoint2.addEventListener("click", (e) => {
    guestScore += 2;
    guest.textContent = guestScore;
    console.log("add point");
})

guestpoint3.addEventListener("click", (e) => {
    guestScore += 3;
    guest.textContent = guestScore;
    console.log("add point");
})

// reset
function resetScores() {
    homeScore = 0;
    homeScoreEl.textContent = homeScore;
    guestScore = 0;
    guestScoreEl.textContent = guestScore;
}