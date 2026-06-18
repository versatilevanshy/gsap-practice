var path="M 10 100 Q 768 100 1526 100"
var finalPath="M 10 100 Q 768 100 1526 100"

var curve= document.querySelector("#curve")
curve.addEventListener("mousemove", function (move){
    path=`M 10 100 Q ${move.clientX} ${move.clientY} 1526 100`

    gsap.to("svg path",{
        attr: {d:path},
        duration:0.3,
        ease:"power3.out"
    })
})

curve.addEventListener("mouseleave",function(){
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:1.5,
        ease:"elastic.out(1.2,0.2)"
    })
})