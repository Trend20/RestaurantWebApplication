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

// get menu function

const menuButton = document.querySelector('#menu');
const orderBtn = document.querySelector('#order');

orderBtn.addEventListener('click', getMenu);

menuButton.addEventListener('click', getMenu);

function getMenu() {
    if (true) {
        location.href = '#meals';
    }
}

// cart items
let myCart = document.querySelector('.cart');
let addToCartBtn = document.querySelectorAll('.add-to-cart');