let slideIndex = 1;

let showSlides = (n) => {
  let slides = document.getElementsByClassName("pic");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let slide of slides) {
    slide.classList.remove("active");
  }
  slides[slideIndex - 1].classList.add("active");
};
showSlides(slideIndex);

let changeSlides = (n) => {
showSlides(slideIndex +=n)

};
