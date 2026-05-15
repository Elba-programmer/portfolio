const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


// CONTACT FORM ALERTa
const form = document.querySelector('.contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    alert('Message sent successfully!');

    form.reset();
});