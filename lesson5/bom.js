document.querySelector('#submitbutton').addEventListener('click', submitbutton);



function submitbutton() {

  /* creates access to the text box */
  const favchap = document.getElementById('#favchap');
  let favchap_value = document.querySelector('#favchap').value;
  document.querySelector('#favchap').value= ""


  if (favchap_value != "") {
    /* creates access to the ul section */
    const sect = document.querySelector('ul');


    /* creates the li and the button under the ul */
    const para = document.createElement('li');

    /* updates the list part (li) and adds the button in too */
    sect.appendChild(para);

    /* loads the content of the txt box into a li content */
    para.textContent = favchap_value;


    const newbutton = document.createElement("button");
    newbutton.textContent = "X";
    /*used para the LI element to add button under the same LI*/
    para.appendChild(newbutton);


    newbutton.addEventListener('click', () => {
      sect.removeChild(para);
      document.getElementById('favchap').focus();
    });
    document.getElementById('favchap').focus();
    
  }  

  
}
