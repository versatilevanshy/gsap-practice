gsap.registerPlugin(ScrollTrigger)
var tl=gsap.timeline()
tl.from("#nav h2",{
    y:-30,
    opacity:0,
    duration:0.5,
})
tl.from("#nav h4",{
    y:-30,
    opacity:0,
    duration:0.3,
    stagger:0.5
})
var cursor=document.querySelector("#cursor")
document.addEventListener("mousemove",function(e){
    gsap.to(cursor,{
        x:e.clientX,
        y:e.clientY,
        duration:0.6
    })
})

const h1 = document.querySelector("#skills h1")
const distance = h1.scrollWidth - window.innerWidth

gsap.fromTo("#skills h1",
    { x: 0 },
    {
        x: -distance,
        scrollTrigger: {
            trigger: "#skills",
            start: "top top",
            end: "+=3933",
            scrub: 1,
            pin: true
        }
    }
)

