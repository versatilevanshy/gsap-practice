gsap.from("#page1 #box",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360
    })
gsap.from("#page2 #box",{
    scale:0,
    duration:2,
    rotate:360,
    y:10,
    scrollTrigger:"#page2 #box"
})
gsap.from("#page3 #box",{
    scale:0,
    duration:2,
    rotate:360,
    y:10,
    scrollTrigger:{
        trigger:"#page3 #box",
        scroller:"body",
        makers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:3,
        pin:true
    }
})