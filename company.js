// Variables for the most outside
const nav = document.querySelector('.navbar');

// Rellax Setup
var rellax = new Rellax('.rellax');

// Fixed and Transparent Navbar
document.addEventListener('scroll', (e) => {
    if (window.scrollY > window.innerHeight) {
        nav.classList.add('transparent');
    } else {
        nav.classList.remove('transparent');
    }
});