let counter = 1;
// let prev = 4;

const leftBtn = document.getElementById("buttonDown");
const rightBtn = document.getElementById("buttonUp");

const allTexts = document.querySelectorAll(".textSlider");
const allImages = document.querySelectorAll(".imageSlider");
for (let i = 0; i < allImages.length; i++) {
  allImages[i].style.transform = `translateY(-300vh)`;
}

leftBtn.addEventListener("click", function () {
  if (counter > 1) {
    counter--;
    switch (counter) {
      case 1:
        for (let i = 0; i < allTexts.length; i++) {
          allTexts[i].style.transform = `translateY(0vh)`;
        }
        for (let i = 0; i < allImages.length; i++) {
          allImages[i].style.transform = `translateY(-300vh)`;
        }
        break;
      case 2:
        for (let i = 0; i < allTexts.length; i++) {
          allTexts[i].style.transform = `translateY(-100vh)`;
        }
        for (let i = 0; i < allImages.length; i++) {
          allImages[i].style.transform = `translateY(-200vh)`;
        }
        break;
      case 3:
        for (let i = 0; i < allTexts.length; i++) {
          allTexts[i].style.transform = `translateY(-200vh)`;
        }
        for (let i = 0; i < allImages.length; i++) {
          allImages[i].style.transform = `translateY(-100vh)`;
        }
        break;
      case 4:
        for (let i = 0; i < allTexts.length; i++) {
          allTexts[i].style.transform = `translateY(-300vh)`;
        }
        for (let i = 0; i < allImages.length; i++) {
          allImages[i].style.transform = `translateY(0vh)`;
        }
        break;
    }
  }
  // console.log(counter);
});

rightBtn.addEventListener("click", function () {
  if (counter < 4) {
    counter++;

    switch (counter) {
      case 2:
        for (let i = 0; i < allTexts.length; i++) {
          allTexts[i].style.transform = `translateY(-100vh)`;
        }
        for (let i = 0; i < allImages.length; i++) {
          allImages[i].style.transform = `translateY(-200vh)`;
        }
        break;
      case 3:
        for (let i = 0; i < allTexts.length; i++) {
          allTexts[i].style.transform = `translateY(-200vh)`;
        }
        for (let i = 0; i < allImages.length; i++) {
          allImages[i].style.transform = `translateY(-100vh)`;
        }
        break;
      case 4:
        for (let i = 0; i < allTexts.length; i++) {
          allTexts[i].style.transform = `translateY(-300vh)`;
        }
        for (let i = 0; i < allImages.length; i++) {
          allImages[i].style.transform = `translateY(0vh)`;
        }
        break;
    }
  }
  console.log(counter);
});
