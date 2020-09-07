var menu = document.querySelector(".main-nav");
var menuToggle = document.querySelector(".main-nav__toggle");

window.onload = function() {
  menu.classList.remove("no-js");
};

menuToggle.addEventListener("click", function(evt) {
  if (menu.classList.contains("main-nav--opened")){
    menu.classList.add("main-nav--closed");
    menu.classList.remove("main-nav--opened");
  } else {
    menu.classList.add("main-nav--opened");
    menu.classList.remove("main-nav--closed");
  }
});
