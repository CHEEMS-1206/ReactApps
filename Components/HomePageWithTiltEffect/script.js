let menu1 = document.getElementById("navBtn");
let menu2 = document.getElementById("navBtnEx");
let [navbar] = document.getElementsByClassName("navbar");
let [container] = document.getElementsByClassName("cont");

let count = 0;

menu1.addEventListener("click", function () {
  container.classList.add("rotate");
  container.classList.remove("rotateBack");
  menu2.style.display = "inline";
  menu1.style.display = "none";
  count++;
});
menu2.addEventListener("click", function () {
  container.classList.add("rotateBack");
  container.classList.remove("rotate");
  menu1.style.display = "block";
  menu2.style.display = "none";
  count--;
});
