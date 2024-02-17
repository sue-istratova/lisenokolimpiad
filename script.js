/* Panel NEWS. When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


/* Panel EXAMPLES. When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show1");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event1) {
  if (!event1.target.matches('.dropbtn1')) {

    var dropdowns1 = document.getElementsByClassName("dropdown1-content");
    var j;
    for (j = 0; j < dropdowns1.length; j++) {
      var openDropdown1 = dropdowns1[j];
      if (openDropdown1.classList.contains('show1')) {
        openDropdown1.classList.remove('show1');
      }
    }
  }
}
/* Slideshow */

var slideIndex = 1;
//showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var k;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (k = 0; k < slides.length; k++) {
      slides[k].style.display = "none";
  }
  for (k = 0; k < dots.length; k++) {
      dots[k].className = dots[k].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 

/* Buttons to the menu */
function about() {
  document.location = 'about.html';
}

function archive() {
  document.location = 'archive.html';
}

function dop() {
  document.location = 'dop.html';
}

function support() {
  document.location = 'support.html';
}

function main() {
  document.location = 'index.html';
}

function news() {
  document.location = 'news.html';
}


/* BUTTONS FOR MENU ON ENGLISH */
/* Buttons to the menu */
function about_en() {
  document.location = 'about_en.html';
}

function archive_en() {
  document.location = 'archive_en.html';
}

function dop_en() {
  document.location = 'dop_en.html';
}

function support_en() {
  document.location = 'support_en.html';
}

function main_en() {
  document.location = 'index_en.html';
}

function news_en() {
  document.location = 'news_en.html';
}

/* SUPPORT LINKS */
function tg_sup() {
  document.location = "https://t.me/sue_istratova"
}

function mail_sup() {
  document.location = "mailto:lisenokolimpiad@mail.ru"
}

function call_sup() {
  document.location = "tel:+79062938989"
}
/* Buttons */

function myFunctionB() {
    document.getElementById("myDropdownB").classList.toggle("showB");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(eventB) {
  if (!eventB.target.matches('.dropbtnB')) {

    var dropdownsB = document.getElementsByClassName("dropdownB-content");
    var iB;
    for (iB = 0; iB < dropdownsB.length; iB++) {
      var openDropdownB = dropdownsB[iB];


$(document).mouseup(function (e) { // событие клика по веб-документу        
 let div = $("#dropbtnB"); // тут указываем ID элемента
 if (!div.is(e.target) // если клик был не по нашему блоку
&& div.has(e.target).length == 0) // и не по его дочерним элементам) 
 { 
    div.removeClass('showB'); // скрываем его/убираем класс
 }
});  
    }
  }
}



//QUESTIONS
//QUEST1
but_Q1.onclick = function(event) {
  if (document.getElementById("cont_Q1").style.display === "block") {
    document.getElementById("cont_Q1").style.display = "none";
  } else {
    document.getElementById("cont_Q1").style.display = "block";
  }
}
//QUEST2
but_Q2.onclick = function(event) {
  if (document.getElementById("cont_Q2").style.display === "block") {
    document.getElementById("cont_Q2").style.display = "none";
  } else {
    document.getElementById("cont_Q2").style.display = "block";
  }
}
//QUEST3
but_Q3.onclick = function(event) {
  if (document.getElementById("cont_Q3").style.display === "block") {
    document.getElementById("cont_Q3").style.display = "none";
  } else {
    document.getElementById("cont_Q3").style.display = "block";
  }
}
//QUEST4
but_Q4.onclick = function(event) {
  if (document.getElementById("cont_Q4").style.display === "block") {
    document.getElementById("cont_Q4").style.display = "none";
  } else {
    document.getElementById("cont_Q4").style.display = "block";
  }
}
//QUEST5
but_Q5.onclick = function(event) {
  if (document.getElementById("cont_Q5").style.display === "block") {
    document.getElementById("cont_Q5").style.display = "none";
  } else {
    document.getElementById("cont_Q5").style.display = "block";
  }
}
//QUEST6
but_Q6.onclick = function(event) {
  if (document.getElementById("cont_Q6").style.display === "block") {
    document.getElementById("cont_Q6").style.display = "none";
  } else {
    document.getElementById("cont_Q6").style.display = "block";
  }
}
//QUEST7
but_Q7.onclick = function(event) {
  if (document.getElementById("cont_Q7").style.display === "block") {
    document.getElementById("cont_Q7").style.display = "none";
  } else {
    document.getElementById("cont_Q7").style.display = "block";
  }
}
//QUEST8
but_Q8.onclick = function(event) {
  if (document.getElementById("cont_Q8").style.display === "block") {
    document.getElementById("cont_Q8").style.display = "none";
  } else {
    document.getElementById("cont_Q8").style.display = "block";
  }
}
//END OF QUESTIONS

//NEWS
//QUEST1
but_N1.onclick = function(event) {
  if (document.getElementById("cont_N1").style.display === "block") {
    document.getElementById("cont_N1").style.display = "none";
  } else {
    document.getElementById("cont_N1").style.display = "block";
  }
}
//QUEST2
but_N2.onclick = function(event) {
  if (document.getElementById("cont_N2").style.display === "block") {
    document.getElementById("cont_N2").style.display = "none";
  } else {
    document.getElementById("cont_N2").style.display = "block";
  }
}
//QUEST3
but_N3.onclick = function(event) {
  if (document.getElementById("cont_N3").style.display === "block") {
    document.getElementById("cont_N3").style.display = "none";
  } else {
    document.getElementById("cont_N3").style.display = "block";
  }
}