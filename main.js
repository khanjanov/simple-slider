let firstSliderSlides = document.querySelectorAll(".wrapper__firstSlider__slide");
let firstPreBtn = document.querySelector(".wrapper__firstSlider__buttons--pre");
let firstNextBtn = document.querySelector(".wrapper__firstSlider__buttons--next");
let firstSliderCurrentI = 0;
let firstSliderLastI = firstSliderSlides.length - 1;


firstSliderSlides.forEach((slide, index) => {
  slide.style.transform = `translate(${index * 100}%)`;
});


firstPreBtn.addEventListener("click", () => {
  if (firstSliderCurrentI == 0) {
    firstSliderCurrentI = firstSliderLastI;
  } else {
    firstSliderCurrentI--;
  }

  firstSliderSlides.forEach((slide, index) => {
    let falan = (index - firstSliderCurrentI) * 100;
    slide.style.transform = `translateX(${falan}%)`;
    firstSliderSlides[index].style.zIndex = index + 1;
  });
});

firstNextBtn.addEventListener("click", () => {
  if (firstSliderCurrentI == firstSliderLastI) {
    firstSliderCurrentI = 0;
  } else {
    firstSliderCurrentI++;
  }

  firstSliderSlides.forEach((slide, index) => {
    let falan = (index - firstSliderCurrentI) * 100;
    slide.style.transform = `translateX(${falan}%)`;
    firstSliderSlides[index].style.zIndex = firstSliderSlides.length - index;
  });
});
