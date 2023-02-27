gsap.from(".b2 h2", {
    duration: 1,
    autoAlpha: 0,
    y: 100,
    scale: 0.5,
    scrollTrigger: {
        trigger: ".b2 h2",
        markers: true,
        // Trigger Scroller
        start: "top 85%",
        end: "bottom 60%",
        // scrub: true,
        scrub: 1.5
    }
})

ScrollTrigger.create({
    trigger: ".b2",
    pin: true,
    markers: true
})