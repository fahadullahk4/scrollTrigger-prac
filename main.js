gsap.from(".page1 .circle", {
	scale: 0,
	duration: 2,
	rotate: 720,
});

gsap.to(".page2 img", {
	width: "100%",
	scrollTrigger: {
		trigger: ".page2 ",
		scroller: "body",
		start: "top 0",
		end: "top -100%",
		scrub: 2,
		pin: true,
	},
});

gsap.to(".page3 h1", {
	transform: "translateX(-125%)",
	scrollTrigger: {
		trigger: ".page3",
		scroller: "body",
		start: "top 0",
		end: "top -100%",
		scrub: 2,
		pin: true,
	},
});
