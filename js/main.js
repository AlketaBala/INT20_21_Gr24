
// ..........................Javascript for Slide share.............
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);// n is an argument 
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides fade");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} //  Nese n merr vlere me te madhe se 3 athere paraqitet fotoja e pare   
  if (n < 1) {slideIndex = slides.length}//Nese n merr vlere me te vogel se 3 paraqitet fotoja e 3 
 
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  // I mshefim te gjitha sllajdet
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");// Nga dot aktiv kalon ne joaktive
  }
  slides[slideIndex-1].style.display = "block";//Paraqesim foton e pare me display=block
  dots[slideIndex-1].className += " active";
}
//...........................................................................