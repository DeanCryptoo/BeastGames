document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });

        // Close nav menu when a link is clicked (for smooth scroll)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // Countdown Timer
    // Replace with your actual Season 2 launch date!
    const targetDate = new Date("December 19, 2025 00:00:00").getTime();
    const countdownElement = document.getElementById("timer");

    if (countdownElement) {
        const countdown = setInterval(function() {
            const now = new Date().getTime();
            const timeLeft = targetDate - now;

            // Calculate time components
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            // Display the result
            if (timeLeft < 0) {
                clearInterval(countdown);
                countdownElement.innerHTML = "SEASON 2 IS LIVE!";
                countdownElement.classList.add('live'); // Optional: add a class for live state styling
            } else {
                countdownElement.innerHTML = `${days} <small>Days</small> ${hours} <small>Hours</small> ${minutes} <small>Minutes</small> ${seconds} <small>Seconds</small>`;
            }
        }, 1000);
    }
});