"use strict";

// Getting the users screen height for section #1

const screenHeight = screen.height - 120;

document.getElementById('section1').style.height = screenHeight+'px';

//Building the carousel for my skills and expertise section
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

//Sticky Navbar background
window.onscroll = function() {stickyNav()};

var navbar = document.getElementById("navbar");
var section1 = document.getElementById("section1");
var sticky = 10;

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky", "fade_in_show");
  } else {
    navbar.classList.remove("sticky", "fade_in_show").add("");
  }
}

//Scrolling add and remove

var scrollKeys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
    if (scrollKeys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  document.addEventListener('wheel', preventDefault, {passive: false}); // Disable scrolling in Chrome
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    document.removeEventListener('wheel', preventDefault, {passive: false}); // Enable scrolling in Chrome
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}

//Open and close the navigation
function openNav() {
  document.getElementById("nav").style.width = "100%";
  disableScroll();
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("nav").style.width = "0";
  enableScroll();
}

function toggleNav(){

  var x = document.getElementById("nav");
  var y = document.getElementById("iconToggle")

  if (x.style.width == 0 || x.style.width == '0px') {
    openNav();
  } else {
    closeNav();
  }

  y.classList.toggle("closeIcon");

}

