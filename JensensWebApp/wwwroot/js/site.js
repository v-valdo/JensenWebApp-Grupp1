
window.addEventListener('scroll', function () {
    const robot = document.getElementById('robot');
    const scrollTop = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / documentHeight;
    const movePercent = scrollPercent * 92;
    robot.style.transform = `translateX(${movePercent}vw)`;
});


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