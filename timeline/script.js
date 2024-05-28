
var tl= gsap.timeline()
// gsap.from means final to intial
gsap.from("h2",{
    y:-20,
    opacity:0,
    duration:1,
    delay:0.5,
    
    // scale = size
    })
    gsap.from("h4",{
        y:-20,
        opacity:0,
        duration:1,
     
        stagger:0.3
        // scale = size
        })
        gsap.from("h1",{
            y:20,
            opacity:0,
            duration:4.5,
            scale:0.2,
       
            // scale = size
            })