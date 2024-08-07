﻿window.addEventListener('DOMContentLoaded', () => {
    const robot = document.getElementById('robot');
    const chatBubbles = document.getElementById('chat-bubbles');
    const minimizedRobot = document.getElementById('minimized-robot');
    const scrollingText = document.getElementById('scrolling-text');
    const backdrop = document.getElementById('backdrop');
    const bubbleTop = document.getElementById('bubble-top');
    const bubbleNav = document.getElementById('bubble-nav');
    const bubbleHide = document.getElementById('bubble-hide');


    function minimizeRobot() {
        robot.classList.add('minimized');
        minimizedRobot.style.display = 'block';
        chatBubbles.style.display = 'none';
        backdrop.classList.remove('active');
        scrollingText.style.display = 'none';
        localStorage.setItem('robotMinimized', 'true');
    }


    function restoreRobot() {
        robot.classList.remove('minimized');
        minimizedRobot.style.display = 'none';
        chatBubbles.style.display = 'none';
        backdrop.classList.remove('active');
        scrollingText.style.display = 'block';
        localStorage.setItem('robotMinimized', 'false');
    }


    robot.addEventListener('click', () => {
        if (chatBubbles.style.display === 'flex') {
            closeChatBubbles();
        } else {
            chatBubbles.style.display = 'flex';
            backdrop.classList.add('active');
            robot.classList.add('active');
            scrollingText.style.display = 'none';
        }
    });


    bubbleTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        closeChatBubbles();
    });


    bubbleNav.addEventListener('click', () => {
        const currentPage = window.location.pathname === '/Home/Privacy' ? '/' : '/Home/Privacy';
        window.location.href = currentPage;
        closeChatBubbles();
    });


    bubbleHide.addEventListener('click', minimizeRobot);


    minimizedRobot.addEventListener('click', restoreRobot);


    backdrop.addEventListener('click', () => {
        closeChatBubbles();
    });


    function closeChatBubbles() {
        chatBubbles.style.display = 'none';
        backdrop.classList.remove('active');
        robot.classList.remove('active');
    }
});

// Contact form confetti
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // making sure confetti won't activate in a incomplete form

    // Calculating the position of the button
    const submitButton = document.getElementById('submitButton');
    const rect = submitButton.getBoundingClientRect();
    const originX = (rect.left + rect.right) / 2 / window.innerWidth;
    const originY = (rect.top + rect.bottom) / 2 / window.innerHeight;

    // The confetti effects
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: originX, y: originY },
        colors: ['#0056b3', '#e6e04b', '#2a2a2a', '#fcf9a1'] 
    });
});

// Privacy policy slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("slides");
  const bullets = document.getElementsByClassName("bullet");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < bullets.length; i++) {
    bullets[i].className = bullets[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  bullets[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000);
}