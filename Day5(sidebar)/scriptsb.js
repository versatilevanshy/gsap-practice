var menu=document.querySelector("#nav i")
var cross= document.querySelector("#full i")
var tl=gsap.timeline()
tl.to("#full",{
    right:"0",
    duration:0.6
})
tl.from("#full h4",{
    x:150,
    duration:0.5,
    stagger:0.28,
    opacity:0
})
tl.from("#full i",{
    opacity:0
})
tl.pause()
menu.addEventListener("click",function(){
    tl.play()
})

cross.addEventListener("click",function(){
    tl.reverse()
})
function breakTheText(){var h1=document.querySelector("#main h1")
var h1Text=h1.textContent;
var splitText=h1Text.split("");
var halfValue=Math.floor(splitText.length/2);
var clutter="";
splitText.forEach(function(elem,idx){
    if(idx<halfValue){
        clutter+=`<span class="a">${elem}</span>`
    } else{
        clutter+=`<span class="b">${elem}</span>`
    }
})
h1.innerHTML=clutter;}

breakTheText();
gsap.from("#main h1 .a",{
    y:70,
    opacity:0,
    duration:0.6,
    delay:0.5,
    stagger:0.15
})
gsap.from("#main h1 .b",{
    y:70,
    opacity:0,
    duration:0.6,
    delay:0.5,
    stagger:-0.15
})
