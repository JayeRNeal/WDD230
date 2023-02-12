/*banner at the top of webpage */
const today = now.getDay();
const chambermeeting = document.getElementById("chambermeeting");
if(today === 1 || today === 2) {
    chambermeeting.style.display = "block";
}
else {
    chambermeeting.style.display = "none";
}
