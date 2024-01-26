const images = Array.from(document.querySelectorAll(".control"));
const layer = document.getElementById("layer");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const closeB = document.getElementById("close");
const imgClick = document.getElementById("imgClick");
let indexImage = 0;






// show layer
for(let i = 0 ; i < images.length; i++){
images[i].addEventListener("click",function(){

indexImage = images.indexOf(images[i]);




let srcimage = this.getAttribute('src');


   imgClick.style.backgroundImage = `url(${srcimage})`
    layer.classList.remove("d-none")
})
}


//hide layer
closeB.addEventListener("click",colseBtn)
//next icon
next.addEventListener('click',nextBtn)
//prev icon
prev.addEventListener('click',prevBtn)

function colseBtn(){
    layer.classList.add("d-none")
}
function nextBtn(){
    indexImage++;
    if(indexImage == images.length){
        indexImage = 0;
    }
  let nextImg = images[indexImage].getAttribute('src');

    imgClick.style.backgroundImage = `url(${nextImg})`;
}


function prevBtn(){
    --indexImage;
    if(indexImage < 0){
        indexImage = images.length - 1;
     }
 let prevEnd = images[indexImage].getAttribute('src');

 imgClick.style.backgroundImage = `url(${prevEnd})`;
}

document.addEventListener('keydown',function(e){

    if(e.key == "ArrowRight"){
        nextBtn()
    }
    else if(e.key == "ArrowLeft"){
        prevBtn()
    }
    else if(e.key == "Escape"){
        colseBtn()
    }
})





