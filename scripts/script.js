// JavaScript Document
var openMenu = document.querySelector("nav ul");
var closeMenu = document.querySelector("nav ul");
var hamButton = document.querySelector("nav button");



// Klik op menu Button

hamButton.addEventListener("click", toggleMenu);
openMenu.addEventListener ("click", toggleMenu);
closeMenu.addEventListener ("click", toggleMenu);



function toggleMenu(){

    hamMenu.classList.toggle('openMenu');
    console.log ("test");

}
