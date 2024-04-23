var tl = gsap.timeline();
tl.from(".navbar", {
  opacity: 0,
  delay: 0.3,
});
tl.from(".navbar img, .center , .button", {
  y: -80,
  opacity: 0,
  duration: 0.8,
  stagger: 0.3,
});

gsap.to(".container .font-img", {
  scale: 0.5,
  x: "-20%",
  scrollTrigger: { 
    trigger: ".container",
    scroller: "body",
    start: "top 0",
    end: "top -10%",
    scrub: 2,
    pin: true,
  },
});

gsap.from(".sec-container p", {
  transform: "translateX(39%)",
  scrollTrigger: {
    trigger: ".sec-container",
    scroller: "body",
    start: "top 0",
    end: "top -100%",
    scrub: 1,
    pin: true,
  },
});
