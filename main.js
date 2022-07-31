var oldScroll = window.pageYOffset;
var navbar = document.getElementById("nav");

window.onscroll = function() {
var currScroll = window.pageYOffset;
  if (oldScroll > currScroll) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-80px";
  }
  oldScroll = currScroll;
}