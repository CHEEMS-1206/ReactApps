const listItem = document.querySelectorAll(".thisOnly li");

for (let i = 0; i < listItem.length; i++) {
  listItem[i].addEventListener("mouseover", function () {
    this.classList.add("hoverlistcolor");
    this.classList.add("hoverAcolor");
  });
  listItem[i].addEventListener("mouseout", function () {
    this.classList.remove("hoverlistcolor");
    this.classList.remove("hoverAcolor");
  });
}

const close = document.getElementById("close");
// console.log(close)
const menu = document.getElementById("menus");

close.addEventListener("click", function () {
  document.getElementById("maxSideBar").classList.add("dispHid");
  document.getElementById("maxSideBar").classList.remove("dispShow");
  document.getElementById("minSideBar").classList.remove("dispHid");
  document.getElementById("minSideBar").classList.add("dispShow");

});

menu.addEventListener("click", function () {
  document.getElementById("maxSideBar").classList.add("dispShow");
  document.getElementById("maxSideBar").classList.remove("dispHid");
  document.getElementById("minSideBar").classList.add("dispShow");
  document.getElementById("minSideBar").classList.remove("dispHid");
});

