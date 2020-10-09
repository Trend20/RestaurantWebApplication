const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', showNavLinks);

function showNavLinks() {
    if (navbar.style.display === 'none') {
        navbar.style.display = 'block'
    } else {
        navbar.style.display = 'none'
    }
}