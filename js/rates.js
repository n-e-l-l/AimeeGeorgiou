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
// HEAD
tl.from('#one',  5, {
    x: 150,
    y: 100,
    rotation: -110,
    delay: 0,
    scale: 0.6
});   

// JAW
tl.from('#two',  5, {
    x: 1000,
    y: -100,
    rotation: 70,
    delay: 0,
    scale: 3.6
}, 0);  

tl.from('#three',  5, {
    x: 1000,
    y: -400,
    rotation: 70,
    delay: 0,
    scale: 2.6
}, 0);  

tl.from('#four',  5, {
    x: -100,
    y: -100,
    rotation: 70,
    delay: 0,
    scale: 2.6
}, 0);  

tl.from('#five',  5, {
    x: -100,
    y: -100,
    rotation: 70,
    delay: 0,
    scale: 2.6
}, 0);  

// NECK 1

tl.from('#six',  5, {
    x: 5,
    y: 100,
    rotation: 70,
    delay: 0,
    scale: 2.6
}, 0);  

tl.from('#seven',  5, {
    x: 200,
    y: 400,
    rotation: -60,
    delay: 0,
    scale: 1.6
}, 0);  

tl.from('#eight',  5, {
    x: -550,
    y: -100,
    rotation: 10,
    delay: 0,
    scale: 2.6
}, 0);  

tl.from('#nine',  5, {
    x: -100,
    y: -600,
    rotation: 10,
    delay: 0,
    scale: 2.6
}, 0);  

tl.from('#ten',  5, {
    x: -300,
    y: -200,
    rotation: 60,
    delay: 0,
    scale: 1.6
}, 0);  

tl.from('#eleven',  5, {
    x: 70,
    y: 600,
    rotation: 180,
    delay: 0,
    scale: 2.6
}, 0);  

tl.from('#twelve',  5, {
    x: 1000,
    y: -100,
    rotation: 10,
    delay: 0,
    scale: 2.6
}, 0);  

tl.from('#thirteen',  5, {
    x: 1000,
    y: 700,
    rotation: 10,
    delay: 0,
    scale: 2.6
}, 0);  

tl.from('#fourteen',  5, {
    x: 5,
    y: 600,
    rotation: 180,
    delay: 0,
    scale: 2.6
}, 0);  

tl.from('#fifteen',  5, {
    x: -500,
    y: 200,
    rotation: 10,
    delay: 0,
    scale: 1.6
}, 0);  

tl.from('#sixteen',  5, {
    x: 5,
    y: -100,
    rotation: 10,
    delay: 0,
    scale: 2.6
}, 0);  

tl.from('#seventeen',  5, {
    x: 5,
    y: -100,
    rotation: 10,
    delay: 0,
    scale: 2.6
}, 0);  

tl.from('#eighteen',  5, {
    x: 5,
    y: -100,
    rotation: 10,
    delay: 0,
    scale: 2.6
}, 0);  

tl.from('#nineteen',  5, {
    x: 5,
    y: -100,
    rotation: 10,
    delay: 0,
    scale: 2.6
}, 0);  

tl.from('#twenty',  5, {
    x: 5,
    y: -100,
    rotation: 10,
    delay: 0,
    scale: 2.6
}, 0);  

tl.from('#twentyone',  5, {
    x: 5,
    y: -100,
    rotation: 10,
    delay: 0,
    scale: 2.6
}, 0);  

tl.from('#twentytwo',  5, {
    x: 800,
    y: 300,
    rotation: 180,
    delay: 0,
    scale: 2.6
}, 0);  

tl.from('#twentythree',  5, {
    x: 600,
    y: -300,
    rotation: 10,
    delay: 0,
    scale: 2.6
}, 0);  

tl.from('#twentyfour',  5, {
    x: 5,
    y: -100,
    rotation: 10,
    delay: 0,
    scale: 2.6
}, 0);  

tl.from('#twentyfive',  5, {
    x: 500,
    y: -500,
    rotation: 10,
    delay: 0,
    scale: 2.6
}, 0);  

tl.from('#twentysix',  5, {
    x: 5,
    y: -100,
    rotation: 10,
    delay: 0,
    scale: 2.6
}, 0);  

//  NECK2
tl.from('#twentyseven',  5, {
    x: 5,
    y: -100,
    rotation: 10,
    delay: 0,
    scale: 1.6
}, 0);  

tl.from('#twentyeight',  5, {
    x: -205,
    y: 700,
    rotation: 10,
    delay: 0,
    scale: 1.6
}, 0);  

tl.from('#twentynine',  5, {
    x: 500,
    y: 100,
    rotation: 120,
    delay: 0,
    scale: 1.6
}, 0);  

tl.from('#thirty',  5, {
    x: 500,
    y: -300,
    rotation: 20,
    delay: 0,
    scale: 1.6
}, 0);  

tl.from('#thirtyone',  5, {
    x: 5,
    y: -100,
    rotation: 10,
    delay: 0,
    scale: 1.6
}, 0);  

tl.from('#thirtytwo',  5, {
    x: 5,
    y: -100,
    rotation: 10,
    delay: 0,
    scale: 1.6
}, 0);  

