function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");

}/*toggle open means that the hamburger menu will open and close when you click
on it*/

const x = document.getElementById("hamburgerBtn")
x.onclick= toggleMenu;