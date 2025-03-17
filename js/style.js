gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '#shapes',
        start: 'top top',
        end: 'bottom bottom',
        markers: false,
        scrub: true,
        toggleActions: 'restart pause reverse pause',
    }
});

// TORSO

// shoulder
tl.from('#one',  5, {
    x: 20,
    y: -150,
    rotation: 70,
    delay: 0,
    scale: 1.6
});  

// collarbone
tl.from('#two',  5, {
    x: -100,
    y: -300,
    rotation: -70,
    delay: 0,
    scale: 1.6
}, 0);  

// chest
tl.from('#three',  5, {
    x: -150,
    y: -100,
    rotation: 10,
    delay: 0,
    scale: 1.6
}, 0);  

// ARM
// bicep
tl.from('#four',  5, {
    x: 0,
    y: 600,
    rotation: 70,
    delay: 0,
    scale: 1.6
}, 0);  

// outer bicep
tl.from('#five',  5, {
    x: 100,
    y: -100,
    rotation: 70,
    delay: 0,
    scale: 1.6
}, 0);  

// innerarm
tl.from('#six',  5, {
    x: 800,
    y: 300,
    rotation: 70,
    delay: 0,
    scale: 4.6
}, 0);  

// forearn
tl.from('#seven',  5, {
    x: 1000,
    y: 100,
    rotation: -90,
    delay: 0,
    scale: 5.6,
}, 0);  

// palm
tl.from('#eight',  5, {
    x: 5,
    y: -100,
    rotation: 10,
    delay: 0,
    scale: 1.6
}, 0);  

// wrist
tl.from('#nine',  5, {
    x: 5,
    y: -100,
    rotation: 10,
    delay: 0,
    scale: 1.6
}, 0);  

// HAND

tl.from('#ten',  5, {
    x: 50,
    y: -100,
    rotation: -180,
    delay: 0,
    scale: 1.6
}, 0);  

// BREAST

tl.from('#eleven',  5, {
    x: 100,
    y: -100,
    rotation: 30,
    delay: 0,
    scale: 1.6
}, 0);  

