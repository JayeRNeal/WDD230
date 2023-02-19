
const todayDisplay = document.querySelector(".discoverlasthere");
const visitsDisplay = document.querySelector(".discovervisits");

// get the localStorage data if any
let numVisits = Number(window.localStorage.getItem("discovervisits"));
let dateslastVisits = Number(window.localStorage.getItem("lastvisited"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = "Welcome this seems  to be your first visit!";
}
// determine the total whole dayssince your last visit .
if (dateslastVisits !== 0) {
  dateslastVisits =  parseInt(((((Date.now() - dateslastVisits)/1000)/60)/60)/24)
	todayDisplay.textContent = dateslastVisits;
} else {
	todayDisplay.textContent = 0;
}


// increment the number of visits.
numVisits++;
// store the updated numbers 
localStorage.setItem("discovervisits", numVisits);
localStorage.setItem("lastvisited", Date.now());