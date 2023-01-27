const tab1 =  document.getElementById("tab-1")
const tab2 =  document.getElementById("tab-2")
const tab3 =  document.getElementById("tab-3");

const move = document.getElementById("move");


tab1.addEventListener("click",function(){
    move.style.transform = "translate(-150%)"
    tab1.style.color = "white"
    tab2.style.color = "black"
    tab3.style.color = "black";
})
tab2.addEventListener("click", function () {
  move.style.transform = "translate(-50%)";
    tab1.style.color = "black";
    tab3.style.color = "black";
    tab2.style.color = "white";
});
tab3.addEventListener("click", function () {
  move.style.transform = "translate(50%)";
    tab1.style.color = "black";
    tab2.style.color = "black";
    tab3.style.color = "white";
});