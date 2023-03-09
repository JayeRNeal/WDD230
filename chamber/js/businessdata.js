const requestURL = 'json/data.json';
const businesinfo = document.querySelector('.businesscards');

async function getBusinessInfo() {
  let response = await fetch(requestURL);
  if (response.ok) {
    let data = await response.json()
    //console.log(data);
    displayBusinessInfo(data)
    
  } else {
    throw Error(response.statusText);
  }
}


function displayBusinessInfo(data) {
  data.Businessinfo.forEach(business => {
    
    let buscard = document.createElement("section");
    buscard.setAttribute("id",business.businessnid);
    let busImage = document.createElement("img")
    let busName = document.createElement("h2"); 


    
    let busIndustry  = document.createElement("p");
    let busAddress  = document.createElement("p");
    let busContactNumer  = document.createElement("p");
    let busEmailAddress  = document.createElement("p");
    //let busWebAddress  = document.createElement("p");
    let busWebAddress  = document.createElement("a");
    let busWebmemberstatus  = document.createElement("p");

    busName.innerHTML = business.businessname;


    let businessImgURL = "images/" + business.companylogo
    busImage.setAttribute("src", businessImgURL);
    busImage.setAttribute("alt", `Logo for ${business.businessname}`);
    busImage.setAttribute("loading", "lazy");
    
    busIndustry.innerHTML = `Industry: ${business.industry}`;
    busIndustry.setAttribute("class","busindustry");

    busAddress.innerHTML = business.address +", " +business.state + " " + business.areacode;
    busAddress.setAttribute("class","physicaladdess");

    busContactNumer.innerHTML = `📞: ${business.contactnumer}`;

    busEmailAddress.innerHTML = `📨: ${business.emailaddress}`;

    /*busWebAddress.innerHTML = `🕸️: ${business.webaddress}`; */
    busWebAddress.textContent = `🕸️: ${business.webaddress}`;
    busWebAddress.setAttribute("href", business.webaddress);
    busWebAddress.setAttribute("class","webaddress");

    busWebmemberstatus.innerHTML = business.membershiplvl;
    busWebmemberstatus.setAttribute("class","membershiplvl webaddressmargin");


    buscard.append(busImage);
    buscard.append(busName);
    buscard.append(busIndustry);
    buscard.append(busAddress);
    buscard.append(busContactNumer);
    buscard.append(busEmailAddress);
    buscard.append(busWebAddress);
    buscard.append(busWebmemberstatus)

    businesinfo.append(buscard) // appends everything to the .card as declared at the top
  })
}

getBusinessInfo();


const bdgridbtn = document.querySelector("#bdgridbtn");
const bdlistbtn = document.querySelector("#bdlistbtn");
const bddisplay = document.querySelector("#businesscards");

//grid
bdgridbtn.addEventListener("click", () => {
	bddisplay.classList.add("businesscards");
	bddisplay.classList.remove("businesscardsList");
});

//list
bdlistbtn.addEventListener("click", () => {
	bddisplay.classList.add("businesscardsList");
	bddisplay.classList.remove("businesscards");
});

/*
  bdlistbtn.setAttribute = ("class","activebutton");
  bdlistbtn.append();
*/