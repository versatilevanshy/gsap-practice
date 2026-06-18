var cursor =document.querySelector("#cursor")
document.addEventListener("mousemove",function(event){
    gsap.to(cursor,{
        x:event.clientX,
        y:event.clientY,
        duration:0.5
    })
})