
window.addEventListener('scroll', function () {
    const robot = document.getElementById('robot');
    const scrollTop = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / documentHeight;
    const movePercent = scrollPercent * 92;
    robot.style.transform = `translateX(${movePercent}vw)`;
});


