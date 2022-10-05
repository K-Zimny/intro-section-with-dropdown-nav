const dropdownMenuItem = document.querySelectorAll(".nav-arrow-container");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const mobileNav = document.querySelector(".mobile-nav");
const body = document.querySelector("body");

dropdownMenuItem.forEach(function (elem) {
  elem.addEventListener("click", function () {
    console.log("click");
    elem.classList.toggle("open");
  });
});

hamburgerMenu.addEventListener("click", function () {
  console.log("click");
  hamburgerMenu.classList.toggle("open");
  mobileNav.classList.toggle("open");
  body.classList.toggle("dimmed");
});
