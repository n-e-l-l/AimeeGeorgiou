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
// THIGH
// bottom 1st
tl.from('#one',  5, {
    x: 0,
    y: 100,
    rotation: 70,
    delay: 0,
    scale: 5.6
});  

// top ankle
tl.from('#two',  5, {
    x: -100,
    y: -100,
    rotation: 70,
    delay: 0,
    scale: 1.6
}, 0);  

// top last
tl.from('#three',  5, {
    x: -100,
    y: -100,
    rotation: -70,
    delay: 0,
    scale: 2.6
}, 0);  

// top middle
tl.from('#four',  5, {
    x: -100,
    y: -100,
    rotation: 70,
    delay: 0,
    scale: 1.6
}, 0);  

// ankle strap
tl.from('#five',  5, {
    x: -100,
    y: -100,
    rotation: 70,
    delay: 0,
    scale: 1.6
}, 0);  

// foot 1st
tl.from('#six',  5, {
    x: 5,
    y: 100,
    rotation: 70,
    delay: 0,
    scale: 1.6
}, 0);  

// foot 2nd
tl.from('#seven',  5, {
    x: 50,
    y: -200,
    rotation: 0,
    delay: 0,
    scale: 1.6
}, 0);  

// foot 3rd
tl.from('#eight',  5, {
    x: 5,
    y: -100,
    rotation: 10,
    delay: 0,
    scale: 1.6
}, 0);  

// foot 4th
tl.from('#nine',  5, {
    x: 5,
    y: -100,
    rotation: 10,
    delay: 0,
    scale: 1.6
}, 0);  

// bottom second
tl.from('#ten',  5, {
    x: 200,
    y: -500,
    rotation: 10,
    delay: 0,
    scale: 3
}, 0);  

// kneecap
tl.from('#eleven',  5, {
    x: 5,
    y: -100,
    rotation: 10,
    delay: 0,
    scale: 1.6
}, 0);  

// SHIN
// calf
tl.from('#twelve',  5, {
    x: 1000,
    y: -200,
    rotation: 90,
    delay: 0,
    scale: 3.6
}, 0);  

// shin
tl.from('#thirteen',  5, {
    x: 50,
    y: -250,
    rotation: 30,
    delay: 0,
    scale: 2.6
}, 0);  

// thigh
tl.from('#fourteen',  5, {
    x: 400,
    y: 100,
    rotation: -110,
    delay: 0,
    scale: 2.6
}, 0);  

// HIP

tl.from('#fifteen',  5, {
    x: -50,
    y: -400,
    rotation: 10,
    delay: 0,
    scale: 3.6
}, 0);  

// FOOT

tl.from('#sixteen',  5, {
    x: 350,
    y: -250,
    rotation: 100,
    delay: 0,
    scale: 2.6
}, 0);  