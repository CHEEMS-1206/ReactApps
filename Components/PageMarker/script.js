let [num1, num2, num3, num4] = document.getElementsByClassName("num");
let [lev1, lev2, lev3] = document.getElementsByClassName("empty");

let prev = document.getElementById("prev");
let next = document.getElementById("next");

let count = 0;
console.log(count);

function check() {
  switch (count) {
    case 0:
      prev.classList.add("noPrev");
      num1.setAttribute("id", "num-1");
      num2.setAttribute("id", "");
      lev1.setAttribute("id", "");

      
      break;
    case 1:
      prev.classList.remove("noPrev");
      num2.setAttribute("id", "num-2");
      lev1.setAttribute("id", "lev1");

      next.classList.remove("noPrev");
      num3.setAttribute("id", "");
      lev2.setAttribute("id", "");
      break;
    case 2:
      prev.classList.remove("noPrev");
      num3.setAttribute("id", "num-3");
      lev2.setAttribute("id", "lev2");

      next.classList.remove("noPrev");
      num4.setAttribute("id", "");
      lev3.setAttribute("id", "");
      break;
    case 3:
      prev.classList.remove("noPrev");
      num4.setAttribute("id", "num-4");
      lev3.setAttribute("id", "lev3");
      next.classList.add("noPrev");

      break;
  }
}
check();


prev.addEventListener("click", function () {
  if (count != 0) {
    count--;
    console.log(count);
  }
  check();
});
next.addEventListener("click", function () {
  if (count <= 2) {
    count++;
    console.log(count);
  }
  check();
});
