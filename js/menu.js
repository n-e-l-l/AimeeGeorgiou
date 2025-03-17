//  hamburger nav links
const hamburger = document.querySelector('.hamburger');
const icon = document.querySelector('.icon');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    icon.classList.toggle("rotate");
    navLinks.classList.toggle("open");
    links.forEach(link =>{
        link.classList.toggle("fade");
    })
});