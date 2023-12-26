
// start from here slidebar java script code .........................
let currentSlide = 0;
const totalSlides = document.querySelectorAll('.slide').length;

function showSlide(index) {
  const slides = document.querySelector('.slides');
  if (index < 0) {
    currentSlide = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentSlide = 0;
  } else {
    currentSlide = index;
  }
  slides.style.transform = `translateX(${-currentSlide * 100}%)`;
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

function nextSlide() {
  showSlide(currentSlide + 1);
}


//  its code here end...........


