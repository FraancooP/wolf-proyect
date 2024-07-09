let slideIndex1 = 1;
let slideIndex2 = 1;
let slideIndex3 = 1;
let slideIndex4 = 1;
showSlides1(slideIndex1);
showSlides2(slideIndex2);
showSlides3(slideIndex3);
showSlides4(slideIndex4);
function currentSlide1(n) {
  showSlides1(slideIndex1 = n);
}
function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
  }
function currentSlide3(n) {
    showSlides3(slideIndex3 = n);
  }
function currentSlide4(n) {
    showSlides4(slideIndex4 = n);
  }
function showSlides1(n) {
  let i;
  let slides = document.getElementsByClassName("deslizado1");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex1-1].style.display = "block";
  dots[slideIndex1-1].className += " active";
}
function showSlides2(n) {
    let i;
    let slides = document.getElementsByClassName("deslizado2");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex2 = 1}
    if (n < 1) {slideIndex2 = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex2-1].style.display = "block";
    dots[slideIndex2-1].className += " active";
  }
  function showSlides3(n) {
    let i;
    let slides = document.getElementsByClassName("deslizado3");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex3 = 1}
    if (n < 1) {slideIndex3 = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex3-1].style.display = "block";
    dots[slideIndex3-1].className += " active";
  }
function showSlides4(n) {
    let i;
    let slides = document.getElementsByClassName("deslizado4");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex1 = 1}
    if (n < 1) {slideIndex4 = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex4-1].style.display = "block";
    dots[slideIndex4-1].className += " active";
  }
// Función para obtener parámetros de la URL
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}