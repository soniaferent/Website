const menu= document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});


const text= ["Hi! I'm Sonia Ferent"];

let speed= 100;

const textElements= document.querySelector('.typewritter-text');

let textIndex= 0;
let charIndex= 0;

function typewritter() {
    if(charIndex < text[textIndex].length) {
        textElements.innerHTML += text[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typewritter, speed);
    } else {
        setTimeout(erase, 1000);
    }
}

function erase() {
    if(textElements.innerHTML.length > 0) {
        textElements.innerHTML= textElements.innerHTML.slice(0,- 1);
        setTimeout(erase, 50);
    } else {
        textIndex= (textIndex + 1) % text.length;
        charIndex= 0;
        setTimeout(typewritter, 500);
    }
}

window.onload= typewritter

const button= document.querySelector('.btn');
const funfact= document.querySelector('.funfact');
funfact.style.display= 'none';

button.addEventListener('click', function() {
    fetch('funfacts.json')
    .then(response => response.json())
    .then(data => {
        funfact.style.display= 'block';
        const facts= data.facts;
        const random= Math.floor(Math.random() * facts.length);
        funfact.innerHTML= facts[random];

    });
});

const button2= document.querySelector('.btn1');
const form= document.querySelector('.contact__form');

button2.addEventListener('click', function(event) {
    event.preventDefault();
    form.reset();
});


function scrollToAboutMe() {
    const aboutMeSection = document.getElementById('about__me');
    aboutMeSection.scrollIntoView({
        behavior: 'smooth'
    });
}

function scrollToProjects() {
    const projectsSection = document.getElementById('projects');
    projectsSection.scrollIntoView({
        behavior: 'smooth'
    });
}

function scrollToContact() {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({
        behavior: 'smooth'
    });
}

function scrollToHome() {
    const homeSection = document.getElementById('home');
    homeSection.scrollIntoView({
        behavior: 'smooth'
    });
}




