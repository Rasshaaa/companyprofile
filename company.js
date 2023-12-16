// Variables for the most outside
const nav = document.querySelector('.navbar');

// Rellax Setup
var rellax = new Rellax('.rellax');

// Fixed Navbar
document.addEventListener('scroll', (e) => {
    if (window.scrollY > window.innerHeight) {
        nav.classList.add('fixed');
    } else {
        nav.classList.remove('fixed');
    }
});