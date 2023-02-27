
// hero slider

const slides = document.querySelectorAll(".slide");
const btns = document.querySelectorAll(".hero-btn");
const nextBtn = document.querySelector(".hero-slider-cta-next");
const prevBtn = document.querySelector(".hero-slider-cta-prev");
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

let counter = 1;
nextBtn.addEventListener("click", function () {
  counter++;
  carousel();
  updateHeroSliderButtons();
});

function updateHeroSliderButtons() {
  const sliderContainer = document.querySelector(".hero-slider-btn");
  let children = Array.prototype.slice.call(sliderContainer.children);
  children.forEach(function (el) {
    el.classList.remove("hero-active");
  });
  children[counter].classList.add("hero-active");
}

prevBtn.addEventListener("click", function () {
  counter--;
  carousel();
  updateHeroSliderButtons();
});

function carousel() {
  if (counter < slides.length - 1) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }
  if (counter > 0) {
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

prevBtn.style.display = "none";

