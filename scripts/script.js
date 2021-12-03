// JavaScript Document
var hamMenu = document.querySelector("nav ul");

var hamButton = document.querySelector(".icon");



// Klik op menu Button

hamButton.addEventListener("click", toggleHamburgerMenu);



function toggleHamburgerMenu(){

    hamMenu.classList.toggle("...");

}