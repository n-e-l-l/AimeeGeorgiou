gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
    scrollTrigger: {
        // trigger: '#shapes',
        start: 'top top',
        end: 'bottom bottom',
        markers: false,
        scrub: true,
        toggleActions: 'restart pause reverse pause',
    }
});
// LOWER MUSCLES
// right shoulder top
tl.from('#one',  5, {
    x: 0,
    y: 100,
    rotation: 70,
    delay: 0,
    scale: 1.6
});  

// left shoulder top
tl.from('#two',  5, {
    x: -100,
    y: -100,
    rotation: 70,
    delay: 0,
    scale: 1.6
}, 0);  

// left bottom
tl.from('#three',  5, {
    x: 0,
    y: 0,
    rotation: 0,
    delay: 0,
    scale: 1.6
}, 0);  

// left middle right 
tl.from('#four',  5, {
    x: -100,
    y: -100,
    rotation: 70,
    delay: 0,
    scale: 1.6
}, 0);  

// left middle left
tl.from('#five',  5, {
    x: -100,
    y: -100,
    rotation: 70,
    delay: 0,
    scale: 1.6
}, 0);  

// right bottom
tl.from('#six',  5, {
    x: 700,
    y: 100,
    rotation: -70,
    delay: 0,
    scale: 2.6
}, 0);  

// right middle
tl.from('#seven',  5, {
    x: 500,
    y: -200,
    rotation: 0,
    delay: 0,
    scale: 2.6
}, 0);  


// UPPER MUSCLES
// left bottom
tl.from('#eight',  5, {
    x: 5,
    y: 200,
    rotation: 10,
    delay: 0,
    scale: 0.6
}, 0);  

// right bottom
tl.from('#nine',  5, {
    x: 400,
    y: 80,
    rotation: 60,
    delay: 0,
    scale: 0.6
}, 0);  

// right top
tl.from('#ten',  5, {
    x: 100,
    y: 100,
    rotation: -100,
    delay: 0,
    scale: 1.6
}, 0);  

// left top
tl.from('#eleven',  5, {
    x: 5,
    y: -100,
    rotation: 10,
    delay: 0,
    scale: 1.6
}, 0);  

// SPINE
tl.from('#twelve',  5, {
    x: 5,
    y: -100,
    rotation: 10,
    delay: 0,
    scale: 1.6
}, 0);  

// ARMS
// left
tl.from('#thirteen',  5, {
    x: 5,
    y: -100,
    rotation: 10,
    delay: 0,
    scale: 1.6
}, 0);  

// head
tl.from('#fourteen',  5, {
    x: 5,
    y: -100,
    rotation: 10,
    delay: 0,
    scale: 1.6
}, 0);  

// right
tl.from('#fifteen',  5, {
    x: 5,
    y: -100,
    rotation: 10,
    delay: 0,
    scale: 1.6
}, 0);  



