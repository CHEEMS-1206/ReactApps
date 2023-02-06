const left = document.getElementById("ps5");
const right = document.getElementById("xbox");
console.log(left, right);
left.addEventListener("mouseover", function () {
  left.classList.add("left-hover");
  left.classList.remove("right-hover")
  right.classList.remove("right-hover");
  right.classList.add("left-hover");


});

right.addEventListener("mouseover", function () {
  right.classList.add("right-hover");
  right.classList.remove("left-hover");
  left.classList.remove("left-hover");
  left.classList.add("right-hover");
});
