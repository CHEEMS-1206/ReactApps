let n=0
let numImagesInSlide= 16
numImagesInSlide -=1

function slideshowRyt(n){
    let displaySlide = document.getElementsByClassName("slide")

    displaySlide[n].style.display = "block"
    if(n==0){
        displaySlide[numImagesInSlide].style.display ='none'
    }
    else{
        displaySlide[n-1].style.display = "none"
    }
}

function slideshowLeft(n){
    let displaySlide = document.getElementsByClassName("slide")

    displaySlide[n].style.display = "block"
    if(n==numImagesInSlide){
        displaySlide[0].style.display ='none'
    }
    else{
        displaySlide[n+1].style.display = "none"
    }
}

slideshowRyt(n,numImagesInSlide)

let moveLeft = document.getElementById("left")
let moveRight = document.getElementById("right")

moveLeft.addEventListener("click",function moveleft(){
    if(n==0){
        n=numImagesInSlide;
    }
    else{
        n-=1;
    }
    slideshowLeft(n);
})

moveRight.addEventListener("click",moveright)
function moveright(){
    if(n==numImagesInSlide){
        n=0;
    }
    else{
        n+=1;
    }
    slideshowRyt(n);
}
setInterval(moveright,5000)