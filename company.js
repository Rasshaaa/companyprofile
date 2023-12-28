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

const rootElement = document.querySelector(":root");

// Disable Scroll via add class list
function disableScroll() {
    document.body.classList.add("stop-scrolling");
}

// Agar disable scroll saat posisi scroll berada pada titik 0 (teratas)
if(window.scrollY == 0) {
    disableScroll();
}

// Agar saat reload page di section lain auto pergi ke section awal
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}

// Enable Scroll via add class list
function enableScroll() { 
    document.body.classList.remove("stop-scrolling");
    rootElement.style.scrollBehavior = 'smooth';
}

// Initialize AOS
AOS.init();