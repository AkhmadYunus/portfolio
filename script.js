/* Hamburger Menu */
const menuToggle = document.getElementById('menuToggle');
const mobileNavLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => {
    mobileNavLinks.classList.toggle('show');
});

/* Active Link Highlighting */
const section = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
    let currentSection = '';
    section.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 150) {
            currentSection = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSection) {
            link.classList.add('active');
        }
    });
});

const darkModeBtn = document.getElementById('darkModeBtn');
    /* CEK SAAT HALAMAN DIBUKA */
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        darkModeBtn.textContent = "☀️";
    }    

darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    /* CEK SAAT TOMBOL DIKLIK */
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        darkModeBtn.textContent = '☀️';
    } else {
        localStorage.setItem('theme', 'light');
        darkModeBtn.textContent = '🌙';
    }
});

const typingElement = document.getElementById("typing");
const jobs = ["Microsoft 365", "Networking", "IT Support"];
let currentIndex = 0;
setInterval(() => {
    currentIndex++;
    if (currentIndex >= jobs.length) {
        currentIndex = 0;
    }
    typingElement.textContent = jobs[currentIndex];
}, 2500);
