window.addEventListener('DOMContentLoaded', () => {
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
