//feature slider

const slider = document.querySelector(".feature-2");
const btns = document.querySelectorAll(".btn-slider");
const content = document.querySelectorAll(".feature-column-1");
const chevronLeft = document.querySelectorAll(".chevron-left");
const chevronRight = document.querySelectorAll(".chevron-right");

const arrows = document.querySelectorAll(".arrows");

slider.addEventListener("click", function (e) {
  const btnId = e.target.dataset.id;

  if (btnId) {
    // remove feature-active class from all buttons
    btns.forEach(function (btn) {
      btn.classList.remove("feature-active");
    });
    //set feature-active class to target button
    e.target.classList.add("feature-active");

    //remove feature-active class from all main articles
    content.forEach(function (singleContent) {
      singleContent.classList.remove("feature-active");
    });

    // set feature-active class to target article
    const contentId = document.getElementById(btnId);
    contentId.classList.add("feature-active");

    arrows.forEach(function (singleChevRight) {
      singleChevRight.classList.remove("feature-active");
    });
    e.target.parentElement.classList.add("feature-active");
  }
});
